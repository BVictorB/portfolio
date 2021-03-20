import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import { ProjectCard } from '@components'
import styles from './Projects.module.css'

const Projects = ({ projects }) => {
  projects.sort((a, b) => a.order - b.order)

  return (
    <>
    <Head>
      <title>Victor Boucher | Projects</title>
    </Head>
    <main>
      <h1>Projects</h1>
      <h2 className={styles.intro}>Below are some of my (school) projects. If you want to get a bit more information, just click on one of the projects!</h2>
      <section className={styles.cardContainer}>
        {projects.map((project, i) => <ProjectCard 
          data={project} 
          favorite={project.favorite}
          key={i}
        />)}
      </section>
    </main> 
  </>
  )
}


export const getStaticProps = async () => {
  const files = fs.readdirSync('src/content/projects')

  const projects = files.map(file => {
    const markdown = fs
      .readFileSync(`src/content/projects/${file}`)
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
