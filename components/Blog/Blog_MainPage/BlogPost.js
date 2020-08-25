import styles from "./styles/BlogPost.module.css"

function BlogPost({ title, date, subtitle }) {
  return (
    <div role="button" className={styles.titleContainer}>
      <div className={styles.titles}>
        <p>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <p className={styles.date}>{date}</p>
    </div>
  )
}

export default BlogPost
