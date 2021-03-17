import IconContainer from '../IconContainer'
import styles from './ProjectInfo.module.css'

const ProjectInfo = ({ data }) => {
  const 
    date = new Date(data.timestamp * 1000),
    year = date.getFullYear(),
    month = date.toLocaleString('default', { month: 'long' })

  return (
    <div className={styles.container}>
      Info:
      {data.timestamp ? <p>{`${month}, ${year}`}</p> : <p>Unknown date</p>}
      {data.live ? <a href={data.live} target="_blank">Click here to go to the website in a new tab.</a> : <p>There is no live version</p>}
      {data.repo ? <a href={data.repo} target="_blank">GitHub repository</a> : <p>This repo is private</p>}
      {data.tech ? <IconContainer icons={data.tech.split(', ')}/> : <p>There are no added technologies</p>}
    </div>
  )
}
    

export default ProjectInfo
