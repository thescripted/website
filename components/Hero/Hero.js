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
      OSS: document.getElementById("OSS").getBoundingClientRect(),
      Blogs: document.getElementById("Blogs").getBoundingClientRect(),
      Contact: document.getElementById("Contact").getBoundingClientRect(),
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
            Web Application Developer building with <b>React</b>, <b>TypeScript</b>, and <b>Flask</b>.
          </p>
          <ContactBar />
          <a href="mailto:bk527@cornell.edu">
            <button>Contact Me</button>
          </a>
        </div>
        <div className="intro-bio">
          <div className="hero-image-wrapper">
            <img className="hero-image" src="PortraitSquare.jpg" alt="My Photo" />
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
