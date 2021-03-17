import Link from 'next/link'
import IconContainer from '../IconContainer'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ data, favorite }) => {
  return (
    <Link href={`/projects/${data.slug}`}>
      <a className={styles.card}>
        {favorite && <div className={styles.favorite}>
          <div className={styles.favoriteText}><p>Personal favorite</p></div>
          <div className={styles.favoriteIcon}><img src="/assets/images/trophy.png" alt="trophy icon" /></div>
        </div>}
        <p className={styles.year}>{data.year}</p>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <IconContainer icons={data.tech.split(', ')}/>
        <img className={styles.image} src={`/projects/${data.slug}/main.png`}></img>
      </a>
    </Link>
  )
}
    

export default ProjectCard
