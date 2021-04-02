import Head from 'next/head'
import { getMarkdownFolder } from '@helpers'
import { ImageCard } from '@components'

const Photography = ({ albums }) => {
  albums.sort((a, b) => a.order - b.order)

  return (
    <>
      <Head>
        <title>Victor Boucher | Photography</title>
        <meta name="description" content="Some of my photography work. Separated in different albums. I mainly do event photography but I also enjoy capturing the enviroment and people."/>
      </Head>
      <main>
        <h1>Photography</h1>
        <h2>Click on one of the albums below to see some of my work. I mainly do event photography but I also enjoy capturing the enviroment and people.</h2>
        {albums.map((album, i) => <ImageCard 
          url={`/photography/${album.slug}`}
          image={`/albums/${album.slug}/main.jpg`}
          title={album.title}
          key={i}
        />)}
      </main> 
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    albums: getMarkdownFolder('src/content/albums')
  }
})

export default Photography
