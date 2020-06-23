import { useEffect } from "react"

export const TestContent = ({ returnElementLocations }) => {
  useEffect(() => {
    const elementLocations = {
      Home: document.getElementById("Home").getBoundingClientRect(),
      Projects: document.getElementById("Projects").getBoundingClientRect(),
      Contact: document.getElementById("Contact").getBoundingClientRect(),
    }
    returnElementLocations(elementLocations)
  }, [])
  return (
    <div className="main">
      <div className="test" id="Home">
        Home
      </div>
      <div className="test" id="Projects">
        Projects
      </div>
      <div className="test" id="Contact">
        Georgia Tech Sucks
      </div>
    </div>
  )
}
