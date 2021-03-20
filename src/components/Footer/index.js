import { GitHub, LinkedIn, Email } from '@icons'
import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <section className={styles.container}>
      <a className={styles.link} href="https://github.com/BVictorB" target="_blank">
        <GitHub color={'white'} />
      </a>
      <a className={styles.link} href="https://www.linkedin.com/in/victor-boucher-18267813b/" target="_blank">
        <LinkedIn color={'white'} />
      </a>
      <a className={styles.link} href="mailto:victory-boucher@hotmail.com">
        <Email color={'white'} />
      </a>
    </section>
  </footer>
)

export default Footer
