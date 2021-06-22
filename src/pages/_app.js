import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../styles/nprogress.css'
import { Navbar, Footer } from '@components'
import '../styles/globals.css'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#4146b5"/>
        <meta name="msapplication-TileColor" content="#4146b5"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta name="description" content="My personal portfolio website. All my web development projects, some photography and info can be found on this website."/>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,300;0,600;0,700;1,400&display=swap"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,300;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
            type="text/css"
          />
        </noscript>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default App
