import Head from 'next/head'
import { useRouter } from 'next/router'

const FourOFour = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>404 | This page could not be found.</title>
      </Head>
      <main>
        <h1>404</h1>
        <h2>The page "{router.asPath}" does not exist.</h2>
      </main>
    </>
  )
}

export default FourOFour
