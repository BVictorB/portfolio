import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'

const Navbar = () => {
  const router = useRouter()

  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">
            <a><img src="/assets/images/logo.png" /></a>
          </Link>
          <Link href="/projects">
            <a className={router.pathname == '/projects' ? styles.active : ''}>Projects</a>
          </Link>
          <Link href="/photography">
            <a className={router.pathname == '/photography' ? styles.active : ''}>Photography</a>
          </Link>
          <Link href="/about">
            <a className={router.pathname == '/about' ? styles.active : ''}>About</a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname == '/contact' ? styles.active : ''}>Contact</a>
          </Link>
        </nav>
    </header>
  )
}

export default Navbar
