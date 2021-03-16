import Link from 'next/link'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <Link href={'/projects/' + project}>
      <a className={styles.card}>
        <p className={styles.year}>2020</p>
        <h2>{project}</h2>
        <p>Short description ...</p>
        <div className={styles.icons}>
          <p>icon1</p>
          <p>icon2</p>
        </div>
      </a>
    </Link>
  )
}

export default ProjectCard
