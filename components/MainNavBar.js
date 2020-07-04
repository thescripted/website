import { useState } from "react"
import Link from "next/link"

export const MainNavBar = props => {
  const handleNavigation = () => {
    const navBar = document.getElementById("mainNav")
    if (navBar.classList.contains("main-navbar")) {
      navBar.classList.remove("main-navbar")
      navBar.classList.add("responsive-navbar")
    } else {
      navBar.classList.remove("responsive-navbar")
      navBar.classList.add("main-navbar")
    }
  }

  return (
    <div id="mainNav" className="main-navbar">
      {props.blogPage ? (
        <>
          <Link href="/">
            <a className="blog-site">Home</a>
          </Link>
        </>
      ) : (
        <>
          <a href="#Home">Home</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          {/* <a href="/">Blog</a> */}
          {/* <a href="#" className="icon" onClick={handleNavigation}>
        <img src="hamburger.svg" />
      </a> */}
        </>
      )}
      <a href="Benjamin-Kinga__Resume.pdf">
        <button>Resume</button>
      </a>
    </div>
  )
}
