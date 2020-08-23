import styles from "./styles/Image.module.css"

function Image({ source, alt, link }) {
  return (
    <a href={link}>
      <img
        src={source}
        alt={alt}
        className={styles.container}
        id="image-source"
      />
    </a>
  )
}

export default Image
