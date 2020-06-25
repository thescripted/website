import { FancyNav } from "../components/FancyNav"
import { TestContent } from "../components/TestContent"
import { ProjectExample } from "../components/ProjectExample"
import { ProjectExampleLeft } from "../components/ProjectExampleLeft"
import { MainNavBar } from "../components/MainNavBar"
import { ContactBar } from "../components/ContactBar"
import { ContactField } from "../components/ContactField"
import { Footer } from "../components/Footer"

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
      .map(item => {
        response.push({
          key: item[1].id,
          name: item[1].name,
          url: item[1].html_url,
        })
      })
    setGithubData(response)
  }

  useEffect(() => {
    const elementLocation = {
      Home: document.getElementById("Home").getBoundingClientRect(), //Todo: Update Calcuations
      Projects: document.getElementById("Projects").getBoundingClientRect(),
      Contact: document.getElementById("Contact").getBoundingClientRect(),
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
              <img className="hero-image" src="Obama.jpg" alt="My Photo" />
            </div>
            <div className="last-repositories">
              <i style={{ opacity: 0.3 }}>Latest Repository Updated ...</i>
              <div className="latest-commits">
                {githubData.map(data => (
                  <a href={data.url} key={data.key}>
                    {data.name}
                  </a>
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
        <ContactField />
        <Footer />
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
