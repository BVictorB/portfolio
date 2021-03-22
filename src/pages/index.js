import Head from 'next/head'
import { ImageCard } from '@components'

const Home = () => (
  <>
    <Head>
      <title>Victor Boucher | Portfolio</title>
    </Head>
    <main>
      <h1>Hi, I am Victor Boucher</h1>
      <h2>Welcome to my personal portfolio website. Click on one of the cards below to take a look at my work or get to know more about me.</h2>
      <ImageCard 
        url={'/projects'}
        title={'Projects'}
      />
      <ImageCard 
        url={'/photography'}
        title={'Photography'}
      />
      <ImageCard 
        url={'/about'}
        title={'About'}
      />
    </main>
  </>
)

export default Home
