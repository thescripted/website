import * as matter from "gray-matter"
import path from "path"
import fs from "fs"
import { formatTitleURLParam } from "support"

export async function getStaticPaths() {
  let metadata = []
  const postsDirectory = path.join(process.cwd(), "public/posts")
  const postsNames = fs.readdirSync(postsDirectory)
  postsNames.map(post => {
    const filePath = path.join(process.cwd(), `public/posts/${post}`)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const meta = matter(fileContent).data

    metadata.push(meta)
  })

  const postpath = metadata.map(meta => ({
    params: { postname: formatTitleURLParam(meta.title) },
  }))

  console.log(postpath)
  return {
    paths: postpath,
    fallback: false,
  }
}

export default function Post(props) {
  return (
    <div className="post">
      <h3>I need to know how to style all of this.</h3>
    </div>
  )
}
