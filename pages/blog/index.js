import Link from "next/link"
import { formatTitleURLParam } from "../../support"
import * as matter from "gray-matter"
import fs from "fs"
import path from "path"
import Navigator from "@components/Navigator/Navigator"
import Head from "next/head"
import styles from "./index.module.css"

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "public/posts")
  const postsFileNames = fs.readdirSync(postsDirectory)

  const formattedDirectoryNames = postsFileNames.map(postname =>
    postname.replace(".md", "")
  )

  const metadata = postsFileNames
    .map(file => {
      const metaPath = path.join(process.cwd(), `public/posts/${file}`)
      const meta = matter(fs.readFileSync(metaPath, "utf-8")).data
      return meta
    })
    .sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
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
      <div className={styles.container}>
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
                <div role="button" className={styles.item}>
                  <div className={styles.item_title_layout}>
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
    </>
  )
}
