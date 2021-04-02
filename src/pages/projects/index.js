import Head from 'next/head'
import { ProjectCard } from '@components'
import { getMarkdownFolder } from '@helpers'
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
      <h2 className={styles.intro}>
        Below are some of my web development projects. Just click on one of the projects if you want to know more about it!
      </h2>
      <section className={styles.cardContainer}>
        {projects.map((project, i) => <ProjectCard 
          data={project} 
          key={i}
        />)}
      </section>
    </main> 
  </>
  )
}

export const getStaticProps = async () => ({
  props: {
    projects: getMarkdownFolder('src/content/projects')
  }
})

export default Projects
