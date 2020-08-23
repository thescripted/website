import styles from "./styles/Content.module.css"

function Content({ children }) {
  return <div className={styles.blurb}>{children}</div>
}

export default Content
