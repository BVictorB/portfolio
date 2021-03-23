import fs from 'fs'
import matter from 'gray-matter'

const getProject = (id) => {
  const markdown = fs
    .readFileSync(`src/content/projects/${id}.md`)
    .toString()

  const images = fs.readdirSync(`public/projects/${id}`)
  const parsedMarkdown = matter(markdown)

  return {
    content: parsedMarkdown.content,
    data: {
      slug: id,
      ...parsedMarkdown.data
    },
    images
  }
}

export default getProject
