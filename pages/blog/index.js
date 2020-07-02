import Link from "next/link"
import { posts } from "@components/posts"
import { formatTitleURLParam } from "../../support"
import * as matter from "gray-matter"
import fs from "fs"
import path from "path"

export async function getStaticProps() {
  let metadata = []
  const postsDirectory = path.join(process.cwd(), "public/posts")
  const postsNames = fs.readdirSync(postsDirectory)
  const posts = postsNames.map(post => {
    const filePath = path.join(process.cwd(), `public/posts/${post}`)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const meta = matter(fileContent).data

    metadata.push(meta)
  })

  return {
    props: {
      metadata,
    },
  }
}
// TODO: Normalize Navbar across Blog and Home Page.
export default function Blog({ metadata }) {
  console.log(metadata)
  return (
    <>
      <div className="navbar">
        <span>
          <Link href="/">
            <a>Home</a>
          </Link>
        </span>
      </div>
      <div className="container">
        <h2>Personal Blog</h2>
        <p>
          This will be the landing page for my blog. You will see all the links
          you can click in here.
        </p>
        <ul>
          {metadata.map(meta => (
            <li key={meta.id}>
              <Link
                href="/blog/[postname"
                as={`/blog/${formatTitleURLParam(meta.title)}`}
              >
                <div className="item">
                  <a>{meta.title}</a>
                  <p>{meta.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .container {
          width: 80%;
          max-width: 950px;
          margin: auto;
        }
        .container > h2 {
          font-size: 60px;
          margin: 0.8em 0;
        }
        .container > p {
          width: 70%;
          font-size: 24px;
        }
        .container > ul > li {
          list-style: none;
          font-size: 16px;
          margin: 0.8em 0;
          padding: 6px 20px;
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
        }
        .item p {
          opacity: 0.7;
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
