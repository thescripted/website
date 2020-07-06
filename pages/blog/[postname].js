import * as matter from "gray-matter"
import path from "path"
import fs from "fs"
import Head from "next/head"
import ReactMarkdown from "react-markdown"

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
      <div className="post">
        <div className="header">
          <h1>{data.title}</h1>
          <h2 style={{ opacity: 0.7 }}>{data.subtitle}</h2>
          <p style={{ opacity: 0.7 }}>{data.date}</p>
        </div>
        <div className="content">
          <ReactMarkdown source={content} />
        </div>
      </div>
      <style jsx>{`
        .post {
          max-width: 750px;
          margin: auto;
        }
        .header {
          margin: 35px 0;
        }
        .header h1 {
          font-size: 48px;
          margin: 0.4em 0;
        }
        .content {
          width: 650px;
          margin: auto;
          font-size: 18px;
          line-height: 1.8em;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}
