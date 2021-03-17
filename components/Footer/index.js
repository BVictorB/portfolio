import styles from './Footer.module.css'

const Footer = () => (
<footer className={styles.footer}>
    <section className={styles.container}>
      <a href="https://github.com/BVictorB" target="_blank"><img src="/assets/icons/github.svg"></img></a>
      <a href="https://www.linkedin.com/in/victor-boucher-18267813b/" target="_blank"><img src="/assets/icons/linkedin.svg"></img></a>
      <a href="mailto:victory-boucher@hotmail.com"><img src="/assets/icons/email.svg"></img></a>
    </section>
  </footer>
)

export default Footer
