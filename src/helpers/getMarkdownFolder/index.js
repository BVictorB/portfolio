import fs from 'fs'
import matter from 'gray-matter'

const getMarkdownData = (path) => {
  const files = fs.readdirSync(path)

  const items = files.map(file => {
    const markdown = fs
      .readFileSync(`${path}/${file}`)
      .toString()

    const parsedMarkdown = matter(markdown)

    return {
      slug: file.replace('.md', ''),
      ...parsedMarkdown.data
    }
  })

  return items
}

export default getMarkdownData
