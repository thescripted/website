import styles from "./styles/BlogPost.module.css"

function BlogPost({ title }) {
  return (
    <div role="button" className={styles.titleContainer}>
      {title}
    </div>
  )
}

export default BlogPost
