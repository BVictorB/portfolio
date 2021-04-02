import Link from 'next/link'
import { IconContainer } from '@components'
import styles from './ProjectCard.module.css'
import { Trophy } from '@images'

const ProjectCard = ({ data }) => {
  const date = new Date(data.timestamp * 1000)

  return (
    <Link href={`/projects/${data.slug}`}>
      <a className={styles.card}>
        {data.favorite && <div className={styles.favorite}>
          <div className={styles.favoriteText}><p>Personal favorite</p></div>
          <div className={styles.favoriteIcon}><Trophy /></div>
        </div>}
        <p className={styles.year}>{date.getFullYear()}</p>
        <h2>{data.title}</h2>
        <p className={styles.description}>{data.description}</p>
        <IconContainer icons={data.tech.split(', ')}/>
        <img 
          className={styles.image} 
          src={`/projects/${data.slug}/${data.slug}-1.png`} 
          alt={data.title}
        ></img>
      </a>
    </Link>
  )
}

export default ProjectCard
