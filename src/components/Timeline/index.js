import styles from './Timeline.module.css'

const Timeline = ({ events }) => (
  <ul className={styles.list}>
    {events.map((event, i) => (
      <li key={i} className={styles.listItem}>
        <p className={styles.info}>{event.info}</p>
        <p className={styles.date}>{event.date}</p>
        <p>{event.at}</p>
      </li>
    ))}
  </ul>
)

export default Timeline
