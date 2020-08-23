import styles from "./styles/TechStack.module.css"

function TechStack({ children }) {
  return (
    <div className={styles.techstack}>
      <h3>Technology Used</h3>
      <ul>{children}</ul>
    </div>
  )
}

export default TechStack
