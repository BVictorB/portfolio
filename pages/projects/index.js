import fs from 'fs'
import ProjectCard from '../../components/ProjectCard'
import styles from './Projects.module.css'

const Projects = ({ projects }) => (
  <main>
    <h1>Projects</h1>
    <h2>Some info...</h2>
    <div className={styles.cardContainer}>
      {projects.map(project => <ProjectCard project={project} key={project}/>)}
    </div>
  </main>
)

export const getStaticProps = async () => {
  const files = fs.readdirSync('projects')
  
  return {
    props: {
      projects: files.map(file => file.replace('.md', ''))
    }
  }
}

export default Projects
