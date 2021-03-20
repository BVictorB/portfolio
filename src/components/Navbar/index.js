import Link from 'next/link'
import { useRouter } from 'next/router'
import { Projects, About, Photography } from '@icons'
import { Logo } from '@images'
import styles from './Navbar.module.css'

const Navbar = () => {
  const router = useRouter()

  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">
            <a className={styles.logo}><Logo color={'#4146B5'}/></a>
          </Link>
          <Link href="/projects">
            <a className={styles.a}>
              <p className={router.pathname.includes('/projects') ? `${styles.active} ${styles.p}` : styles.p}>Projects</p>
              <Projects color={router.pathname.includes('/projects') ? '#4146B5' : '#1f1f1f'}/>
            </a>
          </Link>
          <Link href="/photography">
            <a className={styles.a}>
              <p className={router.pathname.includes('/photography') ? `${styles.active} ${styles.p}` : styles.p}>Photography</p>
              <Photography color={router.pathname.includes('/photography') ? '#4146B5' : '#1f1f1f'}/>
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.a}>
              <p className={router.pathname.includes('/about') ? `${styles.active} ${styles.p}` : styles.p}>About</p>
              <About color={router.pathname.includes('/about') ? '#4146B5' : '#1f1f1f'}/>
            </a>
          </Link>
        </nav>
    </header>
 )
}

export default Navbar
