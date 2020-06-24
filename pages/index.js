import { FancyNav } from "../components/FancyNav"
import { TestContent } from "../components/TestContent"
import { ProjectExample } from "../components/ProjectExample"
import { ProjectExampleLeft } from "../components/ProjectExampleLeft"
import { MainNavBar } from "../components/MainNavBar"
import { ContactBar } from "../components/ContactBar"
import { useState, useEffect } from "react"
import Head from "next/head"

const HomePage = () => {
  const [locations, setLocations] = useState({})
  const [githubData, setGithubData] = useState([])

  const getGitHubRecentCommitMessages = async () => {
    let response = []
    const data = await fetch(
      "https://api.github.com/users/thescripted/repos"
    ).then(res => res.json())
    Object.entries(data)
      .slice(0, 3)
      .map(item => response.push(item[1].name))
    setGithubData(response)
  }

  useEffect(() => {
    const elementLocation = {
      Home: document.getElementById("Home").getBoundingClientRect(), //Todo: Update Calcuations
      Projects: document.getElementById("Projects").getBoundingClientRect(),
    }
    setLocations(elementLocation)
    getGitHubRecentCommitMessages()
  }, [])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <div className="main-container">
        <MainNavBar />
        <div className="intro-container" id="Home">
          <div className="intro-copytext">
            <h1>Benjamin Kinga</h1>
            <p>
              I am a JavaScript developer building applications with{" "}
              <b>React</b>, <b>Node</b>, and <b>PostgreSQL</b>.
            </p>
            <ContactBar />
            <button>Contact Me</button>
          </div>
          <div className="intro-bio">
            <div className="hero-image-wrapper">
              <img className="hero-image" src="example2.jpg" alt="My Photo" />
            </div>
            <div className="last-repositories">
              <i style={{ opacity: 0.3 }}>Latest Repository Updated ...</i>
              <div className="latest-commits">
                {githubData.map(message => (
                  <a href="/">{message}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <FancyNav elementLocation={locations} />
        </div>
        <div className="project-fields" id="Projects">
          <h1 className="header-link">Projects</h1>
          <ProjectExample />
          <ProjectExampleLeft />
        </div>
      </div>
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  )
}

export default HomePage

{
  /* <div>
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div> */
}
