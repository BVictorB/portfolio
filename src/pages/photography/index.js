import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import { ImageCard } from '@components'

const Photography = ({ albums }) => {
  albums.sort((a, b) => a.order - b.order)

  return (
    <>
      <Head>
        <title>Victor Boucher | Photography</title>
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

export const getStaticProps = async () => {
  const files = fs.readdirSync('src/content/albums')

  const albums = files.map(file => {
    const markdown = fs
      .readFileSync(`src/content/albums/${file}`)
      .toString()

    const parsedMarkdown = matter(markdown)

    return {
      slug: file.replace('.md', ''),
      ...parsedMarkdown.data
    }
  })

  return {
    props: {
      albums
    }
  }
}

export default Photography
