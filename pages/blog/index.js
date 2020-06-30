import Link from "next/link"
import { posts } from "@components/posts"
import { formatTitleURLParam } from "../../utils"

export default function Blog() {
  return (
    <div>
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
  )
}
