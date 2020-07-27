import { FancyNav } from "@components/FancyNav"
import { TestContent } from "@components/TestContent"
import { ProjectExample } from "@components/ProjectExample"
import { ProjectExampleLeft } from "@components/ProjectExampleLeft"
import { ProjectExampleThird } from "@components/ProjectExampleThird"
import { MainNavBar } from "@components/MainNavBar"
import { ContactBar } from "@components/ContactBar"
import { ContactField } from "@components/ContactField"
import { Footer } from "@components/Footer"

import { useState, useEffect } from "react"
import Head from "next/head"

export async function getStaticProps() {
  const posts = []
  const response = await fetch(
    "https://api.github.com/users/thescripted/repos"
  ).then(res => res.json())

  response.sort(function (a, b) {
    return new Date(b.updated_at) - new Date(a.updated_at)
  })

  Object.entries(response)
    .slice(0, 3)
    .map(item => {
      posts.push({
        key: item[1].id,
        name: item[1].name,
        url: item[1].html_url,
      })
    })
  return {
    props: {
      posts,
    },
  }
}

const HomePage = ({ posts }) => {
  const [locations, setLocations] = useState({})

  useEffect(() => {
    const elementLocation = {
      Home: document.getElementById("Home").getBoundingClientRect(),
      Projects: document.getElementById("Projects").getBoundingClientRect(),
      Contact: document.getElementById("Contact").getBoundingClientRect(),
      // getBoundingClientRect is relative to the viewport. This offset adjusts the correct locations in case the user refreshes the page halfway down.
      offset: window.pageYOffset,
    }
    setLocations(elementLocation)
    // getGitHubRecentCommitMessages()
  }, [])

  return (
    <>
      <Head>
        <title>Benjamin Kinga</title>
        {/* <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}
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
              <img className="hero-image" src="face.jfif" alt="My Photo" />
            </div>
            <div className="last-repositories">
              <i style={{ opacity: 0.3 }}>Latest Repository Updated ...</i>
              <div className="latest-commits">
                {posts.map(post => (
                  <a href={post.url} key={post.key}>
                    {post.name}
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
          {/* TODO: Create "Project" Component & Inject data externally (i.e. Markdown file, props, etc)*/}
          <ProjectExampleThird />
          <ProjectExampleLeft />
          <ProjectExample />
          {/* <AdditionalProjects /> */}
        </div>
        <ContactField />
        <Footer />
      </div>
      {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script> */}
      {/* <script>AOS.init();</script> */}
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
