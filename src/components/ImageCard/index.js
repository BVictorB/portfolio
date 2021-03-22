import Link from 'next/link'
import styles from './ImageCard.module.css'

const ImageCard = ({ url, image, title }) => {
  return (
    <Link href={url}>
      <a 
        className={styles.card}
        style={image && { backgroundImage: `url('${image}')` }}
      >
        <h2 className={styles.title}>{title}</h2>
      </a>
    </Link>
  )
}
    
export default ImageCard
