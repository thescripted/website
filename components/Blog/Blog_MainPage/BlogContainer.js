import styles from "./styles/BlogContainer.module.css"
import BlogPost from "./BlogPost"
import Link from "next/link"
import { formatTitleURLParam } from "support"

function BlogContainer({ metadata }) {
  return (
    <div className={styles.container} id="Blogs">
      <h1 className="header-link">Blogs</h1>
      <div className={styles.contentList}>
        {metadata.map(function (item) {
          return (
            <Link
              key={item.id}
              href="/blog/[postname]"
              as={`/blog/${formatTitleURLParam(item.title)}`}
            >
              <a href={`/blog/${formatTitleURLParam(item.title)}`}>
                <BlogPost
                  title={item.title}
                  date={item.date}
                  subtitle={item.subtitle}
                />
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export async function getStaticProps() {}

export default BlogContainer
