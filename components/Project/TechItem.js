import styles from "./styles/TechItem.module.css"
function TechItem({ children }) {
  return <li className={styles.techitem}>{children}</li>
}

export default TechItem
