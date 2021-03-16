import styles from './Footer.module.css'

const Footer = () => (
<footer className={styles.footer}>
    <section className={styles.container}>
      <h3>
        Put some random text here :D
      </h3>
      <a href="https://github.com/BVictorB" target="_blank"><img src="/assets/icons/github.png"></img></a>
      <a href="https://www.linkedin.com/in/victor-boucher-18267813b/" target="_blank"><img src="/assets/icons/linkedin.png"></img></a>
      <a href="mailto:victory-boucher@hotmail.com"><img src="/assets/icons/email.png"></img></a>
    </section>
  </footer>
)

export default Footer
