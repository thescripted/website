import styles from "./styles/Project.module.css"

// Children: [ Header, Image, Content TechStack: [TechItems] ]
function Project({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.titlecontainer}>{children[0]}</div> {/* Header */}
      <div className={styles.main}>
        <div className={styles.imagecontainer}>{children[1]}</div> {/* Image */}
        <div className={styles.copy}>
          <div className={styles.contentcontainer}>
            {children[2]} {/* Content */}
          </div>
          {children[3]} {/* TechStack */}
        </div>
      </div>
    </div>
  )
}

export default Project
