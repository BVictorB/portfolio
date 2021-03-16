import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,300;0,600;0,700;1,400&display=swap" rel="stylesheet"/>
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default App
