import { IconContainer } from '@components'
import styles from './ProjectInfo.module.css'

const ProjectInfo = ({ data }) => {
  const 
    date = new Date(data.timestamp * 1000),
    year = date.getFullYear(),
    month = date.toLocaleString('default', { month: 'long' })

  return (
    <div className={styles.container}>
      <h3>Info</h3>
      {data.timestamp ? <p>{`${month}, ${year}`}</p> : <p>Unknown date</p>}
      {data.live && <a 
        className={styles.link} 
        href={data.live} 
        target="_blank" 
        rel="noopener"
      >
        Live version <span className={styles.arrow}>&rarr;</span>
      </a>}
      {!data.private && <a 
        className={styles.link} 
        href={`https://github.com/victorboucher/${data.slug}`}
        target="_blank" 
        rel="noopener"
      >
        GitHub repository <span className={styles.arrow}>&rarr;</span>
      </a>}
      {data.tech && <IconContainer 
        className={styles.tech} 
        icons={data.tech.split(', ')}
      />}
    </div>
  )
}

export default ProjectInfo
