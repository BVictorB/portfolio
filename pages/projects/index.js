import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import ProjectCard from '../../components/ProjectCard'
import styles from './Projects.module.css'

const Projects = ({ projects }) => (
  <>
    <Head>
      <title>Projects</title>
    </Head>
    <main>
      <h1>Projects</h1>
      <h2>Some info...</h2>
      <section className={styles.cardContainer}>
        {projects.map((project, i) => <ProjectCard data={project} key={i}/>)}
      </section>
    </main> 
  </>
)


export const getStaticProps = async () => {
  const files = fs.readdirSync('projects')

  const projects = files.map(file => {
    const markdown = fs
      .readFileSync(`projects/${file}`)
      .toString()

    const parsedMarkdown = matter(markdown)

    return {
      slug: file.replace('.md', ''),
      ...parsedMarkdown.data
    }
  })

  return {
    props: {
      projects
    }
  }
}

export default Projects
