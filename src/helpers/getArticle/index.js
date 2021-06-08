import fs from 'fs'
import matter from 'gray-matter'

const getArticle = (article) => {
  const markdown = fs
  .readFileSync(`src/content/blog/${article}.md`)
  .toString()

  const parsedMarkdown = matter(markdown)

  return {
    content: parsedMarkdown.content,
    data: {
      slug: article,
      ...parsedMarkdown.data
    },
  }
}

export default getArticle
