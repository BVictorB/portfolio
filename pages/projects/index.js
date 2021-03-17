import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import ProjectCard from '../../components/ProjectCard'
import styles from './Projects.module.css'

const Projects = ({ projects }) => {
  projects.forEach((project, i) => {
    if (project.favorite) {
      projects.splice(i, 1)
      projects.unshift(project)
    }
  })

  return (
    <>
    <Head>
      <title>Projects</title>
    </Head>
    <main>
      <h1>Projects</h1>
      <h2 className={styles.intro}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h2>
      <section className={styles.cardContainer}>
        {projects.map((project, i) => <ProjectCard 
          data={project} 
          favorite={i === 0 && true}
          key={i}
        />)}
      </section>
    </main> 
  </>
  )
}


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
