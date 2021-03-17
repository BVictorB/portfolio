import Head from 'next/head'
import ArrowAnchor from '../../components/ArrowAnchor'
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styles from './Project.module.css'
import ProjectInfo from '../../components/ProjectInfo'

const Project = ({ content, data }) => {
  return (  
  <>
    <Head>
      <title>{data.title}</title>
    </Head>
    <main>
      <ArrowAnchor
        anchorText="Back to projects"
        anchorHref="/projects"
      />
      <h1>{data.title}</h1>
      <h2>{data.description}</h2>
      <ProjectInfo data={data} />
      <img className={styles.headerImg} src={`/projects/${data.slug}/main.png`}></img>
      <ReactMarkdown>{content}</ReactMarkdown>
      {data.live && <iframe src={data.live} title={`Embed ${data.title} website`} width="100%" height="500px"/>}
    </main>
  </>
)
}

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
      data: {
        slug: id,
        ...parsedMarkdown.data
      }
    }
  }
}

export default Project
