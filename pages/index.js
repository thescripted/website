import Navigator from "@components/Navigator/Navigator"
import { ContactField } from "@components/ContactField"
import { Footer } from "@components/Footer"
import ProjectContainer from "@components/Project/ProjectContainer"
import Hero from "@components/Hero/Hero"
import Head from "next/head"

export async function getStaticProps() {
  const repos = []
  const response = await fetch(
    "https://api.github.com/users/thescripted/repos"
  ).then(res => res.json())

  response.sort(function (a, b) {
    return new Date(b.updated_at) - new Date(a.updated_at)
  })

  Object.entries(response)
    .slice(0, 3)
    .map(item => {
      repos.push({
        key: item[1].id,
        name: item[1].name,
        url: item[1].html_url,
      })
    })
  return {
    props: {
      repos,
    },
  }
}

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Benjamin Kinga</title>
      </Head>
      <Navigator />
      <div className="main-container">
        <Hero />
        <ProjectContainer />
        <ContactField />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
