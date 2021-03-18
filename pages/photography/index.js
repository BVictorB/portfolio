import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import AlbumCard from '@components/AlbumCard/index'
import styles from './Albums.module.css'

const Photography = ({ albums }) => {
  albums.sort((a, b) => a.order - b.order)

  return (
    <>
      <Head>
        <title>Victor Boucher | Photography</title>
      </Head>
      <main>
        <h1>Photography</h1>
        <h2>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h2>
        {albums.map((album, i) => <AlbumCard 
          data={album} 
          key={i}
        />)}
      </main> 
    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('content/albums')

  const albums = files.map(file => {
    const markdown = fs
      .readFileSync(`content/albums/${file}`)
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
