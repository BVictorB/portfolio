import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import { ArrowAnchor } from '@components/index'
import styles from './Album.module.css'

const PhotoAlbum = ({ data, photos }) => {
  return (  
    <>
      <Head>
        <title>Photography | {data.title}</title>
      </Head>
      <main>
        <ArrowAnchor
          anchorText="Back to photography"
          anchorHref="/photography"
        />
        <h1>{data.title}</h1>
        <section className={styles.container}>
          {photos.map(photo => <img key={photo} className={styles.photo} src={`/albums/${data.slug}/${photo}`}></img>)}
        </section>
      </main>
    </>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync('content/albums')
  const paths = files.map(filename => ({
    params: {
      album: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { album } }) => {
  const markdown = fs
    .readFileSync(`content/albums/${album}.md`)
    .toString()

  const photos = fs.readdirSync(`public/albums/${album}`)
  const parsedMarkdown = matter(markdown)

  return {
    props: {
      data: {
        slug: album,
        ...parsedMarkdown.data
      },
      photos: photos.filter(photo => photo !== 'main.jpg')
    }
  }
}

export default PhotoAlbum
