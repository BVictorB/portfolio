import Link from 'next/link'
import styles from './ArrowAnchor.module.css'

const ArrowAnchor = ({ anchorText, anchorHref }) => (
  <Link href={anchorHref}>
    <a className={styles.link}><span className={styles.arrow}>&larr;</span>{anchorText}</a>
  </Link>
)

export default ArrowAnchor
