import Link from "next/link"
import { posts } from "@components/posts"
import { formatTitleURLParam } from "../../support"
import * as matter from "gray-matter"
import fs from "fs"
import path from "path"
import Navigator from "@components/Navigator/Navigator"
import Head from "next/head"

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "public/posts")
  const postsFileNames = fs.readdirSync(postsDirectory)

  const formattedDirectoryNames = postsFileNames.map(postname =>
    postname.replace(".md", "")
  )

  const metadata = postsFileNames.map(file => {
    const metaPath = path.join(process.cwd(), `public/posts/${file}`)
    const meta = matter(fs.readFileSync(metaPath, "utf-8")).data
    return meta
  })

  return {
    props: {
      metadata,
      formattedDirectoryNames,
    },
  }
}
export default function Blog({ metadata, formattedDirectoryNames }) {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <Navigator source="BLOG_PAGE" />
      <div className="container">
        <span style={{ margin: 0 }}></span>
        <h2>Personal Blog</h2>
        <p>
          This will be the landing page for my blog. You will see all the links
          you can click in here.
        </p>
        <ul>
          {metadata.map(meta => (
            <li key={meta.id}>
              <Link
                href="/blog/[postname]"
                as={`/blog/${formatTitleURLParam(meta.title)}`} // Use FormattedURL instead of this function
              >
                <div role="button" className="item">
                  <div className="item-title-layout">
                    <p
                      style={{ fontSize: "18px", color: "hsl(150, 90%, 66%)" }}
                    >
                      {meta.title}
                    </p>

                    <p style={{ opacity: 0.8, fontSize: "14px" }}>
                      {meta.subtitle}
                    </p>
                  </div>
                  <p>{meta.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .navbar span {
          width: 80%;
          max-width: 950px;
          margin: auto;
        }
        .container {
          width: 80%;
          max-width: 950px;
          margin: auto;
        }
        .container > h2 {
          font-size: 60px;
          margin-bottom: 0.8em;
        }
        .container > p {
          width: 70%;
          font-size: 24px;
          margin-bottom: 2em;
        }
        .container > ul > li {
          list-style: none;
          font-size: 16px;
          margin: 0.8em 0;
          padding: 10px 24px;
          transition: 0.1s;
          border-radius: 3px;
        }
        .container > ul > li:hover {
          background-color: hsla(150, 90%, 66%, 0.2);
        }
        .item {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .item > p {
          opacity: 0.7;
        }
        .item-title-layout {
          display: flex;
          flex-direction: column;
        }
        .navbar {
          display: flex;
          align-items: center;
          min-height: 60px;
        }
      `}</style>
    </>
  )
}
