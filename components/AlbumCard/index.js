import Link from 'next/link'
import styles from './AlbumCard.module.css'

const AlbumCard = ({ data }) => {
  return (
    <Link href={`/photography/${data.slug}`}>
      <a 
        className={styles.card}
        style={{
          backgroundImage: `url('/albums/${data.slug}/main.jpg')`
        }}
      >
        <h2 className={styles.title}>{data.title}</h2>
      </a>
    </Link>
  )
}
    
export default AlbumCard
