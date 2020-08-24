import Link from "next/link"
import styles from "./styles/Navigator.module.css"

function Resume() {
  return (
    <a className={styles.resume} href="Benjamin_Kinga__Resume.pdf">
      <button>Resume</button>
    </a>
  )
}
// Determines which function to return based on props provided
function _navigator(source) {
  switch (source) {
    case "BLOG_PAGE":
      return (
        <>
          <Link href="/">
            <a href="/">Home</a>
          </Link>
          <Resume />
        </>
      )
    case "BLOG_POST":
      return (
        <>
          <Link href="/">
            <a href="/">Home</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </>
      )
    default:
      return (
        <>
          <a href="#Home">Home</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Resume />
        </>
      )
  }
}

const Navigator = props => {
  return (
    <div id="mainNav" className="main-navbar">
      {_navigator(props.source)}
    </div>
  )
}

export default Navigator
