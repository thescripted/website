import styles from "./styles/Project.module.css"

// Children: [ Header, Image, Content TechStack: [TechItems] ]
function Project({ children, github }) {
  return (
    <div className={styles.container}>
      <div className={styles.titlecontainer}>{children[0]}</div> {/* Header */}
      <div className={styles.main}>
        <div className={styles.imagecontainer}>
          {children[1]} {/* Image */}
          <h3 className={styles.repository}>
            <a href={github}>Link to Repository</a>
          </h3>
        </div>
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
