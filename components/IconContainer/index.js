import styles from './IconContainer.module.css'

const IconContainer = ({ icons }) => (
  <div className={styles.icons}>
    {icons.map(icon => (
      <img key={icon} src={`/assets/icons/${icon}.svg`}></img>
    ))}
  </div>
)

export default IconContainer
