import styles from './Timeline.module.css'

const Timeline = ({ events }) => (
  <ul className={styles.list}>
    {events.map(event => (
      <li className={styles.listItem}>
        <p className={styles.date}>{event.date}</p>
        <p className={styles.info}>{event.info}</p>
        <p>{event.at}</p>
      </li>
    ))}
  </ul>
)

export default Timeline
