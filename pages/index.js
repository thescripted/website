import { FancyNav } from "../components/FancyNav"
import { TestContent } from "../components/TestContent"
import { useState, useEffect } from "react"
import { ProjectExample } from "../components/ProjectExample"

const HomePage = () => {
  const [locations, setLocations] = useState({})
  const [githubData, setGithubData] = useState([])

  const getGitHubRecentCommitMessages = async () => {
    let response = []
    let data = await fetch(
      "https://api.github.com/repos/thescripted/trello-markup/commits"
    ).then(res => res.json())
    Object.entries(data)
      .slice(0, 3)
      .map(item => response.push(item[1].commit.message))
    setGithubData(response)
  }

  useEffect(() => {
    const elementLocation = {
      Home: document.getElementById("Home").getBoundingClientRect(),
      Projects: document.getElementById("Projects").getBoundingClientRect(),
    }
    setLocations(elementLocation)
    getGitHubRecentCommitMessages()
  }, [])

  return (
    <div className="main-container">
      <div className="intro-container" id="Home">
        <div className="intro-copytext">
          <h1>Benjamin Kinga</h1>
          <p>
            I am a JavaScript developer building applications with <b>React</b>,{" "}
            <b>Node</b>, and <b>PostgreSQL</b>.
          </p>
          <button>resume</button>
        </div>
        <div className="intro-bio">
          <img className="hero-image" src="example2.jpg" alt="My Photo" />
          <div className="last-repositories">
            {githubData.map(message => (
              <p>{message}</p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <FancyNav elementLocation={locations} />
      </div>
      <div className="project-fields" id="Projects">
        <h1 className="header-link">Projects</h1>
        <ProjectExample />
      </div>
    </div>
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
