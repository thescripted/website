import Head from "next/head"
import { ContactField } from "@components/ContactField"
import { Footer } from "@components/Footer"
import Hero from "@components/Hero/Hero"
import ProjectContainer from "@components/Project/ProjectContainer"
import BlogContainer from "@components/Blog/Blog_MainPage/BlogContainer"
import Navigator from "@components/Navigator/Navigator"
import * as matter from "gray-matter"
import fs from "fs"
import path from "path"

export async function getStaticProps() {
  const repos = []
  const response = await fetch(
    "https://api.github.com/users/thescripted/repos?sort=updated"
  ).then(res => res.json())

  response
    // .sort(function (a, b) {
    //   return new Date(b.updated_at) - new Date(a.updated_at)
    // })
    .slice(0, 3)
    .map(item => {
      repos.push({
        key: item.id,
        name: item.name,
        url: item.html_url,
      })
    })

  const postsDirectory = path.join(process.cwd(), "public/posts")
  const postsFileNames = fs.readdirSync(postsDirectory)
  const metadata = postsFileNames
    .map(file => {
      const metaPath = path.join(process.cwd(), `public/posts/${file}`)
      const meta = matter(fs.readFileSync(metaPath, "utf-8")).data
      return meta
    })
    .sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
    })
  return {
    props: {
      repos,
      metadata,
    },
  }
}

const HomePage = ({ repos, metadata }) => {
  return (
    <>
      <Head>
        <title>Benjamin Kinga</title>
      </Head>
      <Navigator />
      <div className="main-container">
        <Hero repos={repos} />
        <ProjectContainer />
        <BlogContainer metadata={metadata} />
        <ContactField />
        <Footer />
      </div>
    </>
  )
}

export default HomePage
