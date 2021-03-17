import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter'
import styles from './Albums.module.css'

const Photography = ({ albums }) => (
  <>
    <Head>
      <title>Victor Boucher | Photography</title>
    </Head>
    <main>
      <h1>Photography</h1>
      {albums.map(album => <Link key={album} href={`/photography/${album.slug}`}><a>{album.title}</a></Link>)}
    </main> 
  </>
)

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
