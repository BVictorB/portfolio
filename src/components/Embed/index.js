import styles from './Embed.module.css'

const Embed = ({ title, url, frameTitle }) => (
  <>
    <a 
      href={url}
      target="_blank"
      className={styles.link}
    >
      <h2>{title}</h2>
    </a>
    <iframe 
      className={styles.frame} 
      src={url} 
      title={frameTitle} 
    />
  </>
)

export default Embed
