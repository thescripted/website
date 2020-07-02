import Link from "next/link"
import { posts } from "@components/posts"
import { formatTitleURLParam } from "../../support"

// TODO: Normalize Navbar across Blog and Home Page.
export default function Blog() {
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
        <h2>Hi, There.</h2>
        <p>
          This will be the landing page for my blog. You will see all the links
          you can click in here.
        </p>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link
                href="/blog/[postname]"
                as={`/blog/${formatTitleURLParam(post.title)}`}
              >
                <a>{post.title}</a>
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
        }
        .container > ul > li:hover {
          color: red;
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
