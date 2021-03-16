import Link from 'next/link'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ data }) => {
  return (
    <Link href={`/projects/${data.slug}`}>
      <a className={styles.card}>
        <p className={styles.year}>{data.year}</p>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div className={styles.icons}>
          <p>icon1</p>
          <p>icon2</p>
        </div>
        <img src={`/${data.slug}/main.png`}></img>
      </a>
    </Link>
  )
}

export default ProjectCard
