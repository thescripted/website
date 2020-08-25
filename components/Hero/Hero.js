import styles from "./styles/Hero.module.css"
import { ContactBar } from "@components/ContactBar"
import { FancyNav } from "@components/FancyNav"
import { useState, useEffect } from "react"

function Hero({ repos }) {
  const [locations, setLocations] = useState({})

  useEffect(() => {
    // fetch('api').then(...)
    const elementLocation = {
      Home: document.getElementById("Home").getBoundingClientRect(),
      Projects: document.getElementById("Projects").getBoundingClientRect(),
      Blogs: document.getElementById("Blogs").getBoundingClientRect(),
      Contact: document.getElementById("Contact").getBoundingClientRect(),
      // getBoundingClientRect is relative to the viewport. This offset adjusts the correct locations in case the user refreshes the page halfway down.
      offset: window.pageYOffset,
    }
    setLocations(elementLocation)
    // getGitHubRecentCommitMessages()
  }, [])

  return (
    <>
      <div className="intro-container" id="Home">
        <div className="intro-copytext">
          <h1>Benjamin Kinga</h1>
          <p>
            I am a JavaScript developer currently building applications with{" "}
            <b>React</b>, <b>Node</b>, and <b>PostgreSQL</b>.
          </p>
          <ContactBar />
          <a href="mailto:bk527@cornell.edu">
            <button>Contact Me</button>
          </a>
        </div>
        <div className="intro-bio">
          <div className="hero-image-wrapper">
            <img className="hero-image" src="face.jfif" alt="My Photo" />
          </div>
          <div className="last-repositories">
            <i style={{ opacity: 0.3 }}>Latest Repository Updated ...</i>
            <div className="latest-commits">
              {repos.map(repo => (
                <a href={repo.url} key={repo.key}>
                  {repo.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div>
        <FancyNav elementLocation={locations} />
      </div>
    </>
  )
}

export default Hero
