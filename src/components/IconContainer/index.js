import * as iconComponents from '@icons'
import styles from './IconContainer.module.css'

const IconContainer = ({ icons }) => (
  <div className={styles.icons}>
    {icons.map((icon, index) => {
      const IconComponent = iconComponents[icon]
      return <IconComponent key={index} color={'white'} />
    })}
  </div>
)

export default IconContainer
