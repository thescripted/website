import * as matter from "gray-matter"
import path from "path"
import fs from "fs"
import Head from "next/head"
import ReactMarkdown from "react-markdown"

export async function getStaticPaths() {
  // Grabs and formats URL Parameter for each posts
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
  // Grabs the Content for each page
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
      <div className="post">
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <p>{data.date}</p>
        <ReactMarkdown source={content} />
      </div>
    </>
  )
}
