import Link from 'next/link'
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
        <div className={styles.icons}>
          {data.tech.split(', ').map(icon => (
            <img src={`/assets/icons/${icon}.png`}></img>
          ))}
        </div>
        <img className={styles.image} src={`/${data.slug}/main.png`}></img>
      </a>
    </Link>
  )
}
    

export default ProjectCard
