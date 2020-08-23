import styles from "./styles/Header.module.css"

function Header({ children, link, date }) {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        {children}
        <a href={link}>
          <img src="web-link.svg" alt="Link" className={styles.icon} />
        </a>
      </div>

      <div className={styles.date}>{date}</div>
    </div>
  )
}

export default Header
