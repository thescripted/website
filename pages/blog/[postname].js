import * as matter from "gray-matter"
import path from "path"
import fs from "fs"
import Head from "next/head"
import ReactMarkdown from "react-markdown"
import CodeBlock from "@components/CodeBlock"
import Navigator from "@components/Navigator/Navigator"
import styles from "./[postname].module.css"

export async function getStaticPaths() {
  const directory = path.join(process.cwd(), "public/posts")
  const postPath = fs.readdirSync(directory).map(url_param => ({
    params: { postname: url_param.replace(".md", "") },
  }))
  console.log("path: ", postPath)

  return {
    paths: postPath,
    fallback: false,
  }
}

export async function getStaticProps({ params: { postname } }) {
  const TextUnformatted = fs
    .readFileSync(path.join(process.cwd(), `public/posts/${postname}.md`))
    .toString()

  const textMetaData = matter(TextUnformatted)
  return {
    props: {
      content: textMetaData.content,
      data: textMetaData.data,
    },
  }
}

export default function Post({ content, data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.subtitle} />
      </Head>
      <Navigator source="BLOG_POST" />
      <div className={styles.post}>
        <div className={styles.header}>
          <h1>{data.title}</h1>
          <h2 style={{ opacity: 0.7 }}>{data.subtitle}</h2>
          <p style={{ opacity: 0.7 }}>{data.date}</p>
        </div>
        <div className={styles.content}>
          <ReactMarkdown
            source={content}
            escapeHtml={false}
            className={styles.blog_content} // TODO: Does not work with JSX, maybe modules???\
            renderers={{ code: CodeBlock }}
          />
        </div>
      </div>
    </>
  )
}
