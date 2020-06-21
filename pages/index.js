import { FancyNav } from "../components/FancyNav"
import { TestContent } from "../components/TestContent"
import { useState } from "react"

const HomePage = () => {
  const [locations, setLocations] = useState({})
  const returnElementLocations = elements => {
    setLocations(elements)
  }
  return (
    // <div className="intro-container">
    //   <h1>Benjamin Kinga</h1>
    //   <p>
    //     I am a javascript developer building applications with <b>React</b>,{" "}
    //     <b>Node</b>, and <b>PostgreSQL</b>.
    //   </p>
    //   <button>resume</button>
    // </div>
    <div>
      <TestContent returnElementLocations={returnElementLocations} />
      <FancyNav elementLocation={locations} />
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
