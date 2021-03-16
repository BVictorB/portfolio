import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const Project = ({ content, data }) => (
  <main>
    <ReactMarkdown>{content}</ReactMarkdown>
  </main>
)

export const getStaticPaths = async () => {
  const files = fs.readdirSync('projects')
  const paths = files.map(filename => ({
    params: {
      id: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const markdown = fs
    .readFileSync(`projects/${id}.md`)
    .toString()

  const parsedMarkdown = matter(markdown)

  return {
    props: {
      content: parsedMarkdown.content,
      data: parsedMarkdown.data
    }
  }
}

export default Project
