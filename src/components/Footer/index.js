import { GitHub, LinkedIn, Email } from '@icons'
import styles from './Footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <section className={styles.container}>
      <a className={styles.link} href="https://github.com/BVictorB" target="_blank" rel="noopener" title="GitHub">
        <GitHub color={'white'} />
      </a>
      <a className={styles.link} href="https://www.linkedin.com/in/victor-boucher-18267813b/" target="_blank" rel="noopener" title="LinkedIn">
        <LinkedIn color={'white'} />
      </a>
      <a className={styles.link} href="mailto:victory-boucher@hotmail.com" title="Email">
        <Email color={'white'} />
      </a>
    </section>
  </footer>
)

export default Footer
