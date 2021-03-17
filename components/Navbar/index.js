import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavMobile from '../NavMobile'
import styles from './Navbar.module.css'

const Navbar = () => {
  const 
    router = useRouter(),
    [showNav, setShowNav] = useState(false)
  
  useEffect(() => {
    if (showNav) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [showNav])

  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/">
            <a className={styles.logo}><img src="/assets/images/logo.svg" /></a>
          </Link>
          <div onClick={() => setShowNav(prevState => !prevState)} className={showNav ? `${styles.navButton} ${styles.active}` : styles.navButton}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <NavMobile showNav={showNav} />
          <div className={styles.navContainer}>
            <Link href="/projects">
              <a className={router.pathname.includes('/projects') ? `${styles.active} ${styles.a}` : styles.a}>Projects</a>
            </Link>
            <Link href="/photography">
              <a className={router.pathname.includes('/photography') ? `${styles.active} ${styles.a}` : styles.a}>Photography</a>
            </Link>
            <Link href="/about">
              <a className={router.pathname.includes('/about') ? `${styles.active} ${styles.a}` : styles.a}>About</a>
            </Link>
            <Link href="/contact">
              <a className={router.pathname.includes('/contact') ? `${styles.active} ${styles.a}` : styles.a}>Contact</a>
            </Link>
          </div>
        </nav>
    </header>
 )
}

export default Navbar
