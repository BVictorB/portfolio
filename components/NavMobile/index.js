import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './NavMobile.module.css'

const NavMobile = ({ showNav, setShowNav }) => {
  const router = useRouter()

  return (
    <nav className={showNav ? `${styles.nav} ${styles.active}` : styles.nav}>
        <Link href="/projects">
          <a onClick={() => setShowNav(prevState => !prevState)} className={router.pathname.includes('/projects') ? `${styles.active} ${styles.a}` : styles.a}>Projects</a>
        </Link>
        <Link href="/photography">
          <a onClick={() => setShowNav(prevState => !prevState)} className={router.pathname.includes('/photography') ? `${styles.active} ${styles.a}` : styles.a}>Photography</a>
        </Link>
        <Link href="/about">
          <a onClick={() => setShowNav(prevState => !prevState)} className={router.pathname.includes('/about') ? `${styles.active} ${styles.a}` : styles.a}>About</a>
        </Link>
        <Link href="/contact">
          <a onClick={() => setShowNav(prevState => !prevState)} className={router.pathname.includes('/contact') ? `${styles.active} ${styles.a}` : styles.a}>Contact</a>
        </Link>
        <img className={styles.logo} src="/assets/images/logo.svg" />
    </nav>
 )
}

export default NavMobile
