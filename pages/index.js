import { FancyNav } from "../components/FancyNav"
import { TestContent } from "../components/TestContent"
import { useState, useEffect } from "react"
import { ProjectExample } from "../components/ProjectExample"

const HomePage = () => {
  const [locations, setLocations] = useState({})
  useEffect(() => {
    const elementLocation = {
      Home: document.getElementById("Home").getBoundingClientRect(),
      Projects: document.getElementById("Projects").getBoundingClientRect(),
    }
    setLocations(elementLocation)
  }, [])
  return (
    <div className="main-container">
      <div className="intro-container" id="Home">
        <h1>Benjamin Kinga</h1>
        <p>
          I am a Javascript developer building applications with <b>React</b>,{" "}
          <b>Node</b>, and <b>PostgreSQL</b>.
        </p>
        <button>resume</button>
      </div>
      <div>
        <FancyNav elementLocation={locations} />
      </div>
      <div className="project-container" id="Projects">
        Here are some of the projects I've built.
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
