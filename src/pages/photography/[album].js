import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import { ArrowAnchor } from '@components'
import styles from './Album.module.css'

const PhotoAlbum = ({ data, photos }) => {
  const 
    isEven = num => num % 2 === 0,
    isOdd = num => Math.abs(num % 2) === 1

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
          <article className={styles.column}>
            {photos.map((photo, i) => isEven(i) && <img 
              key={photo} 
              className={styles.photo} 
              src={`/albums/${data.slug}/${photo}`} 
              alt={photo}
            ></img>)}
          </article>
          <article className={styles.column}>
            {photos.map((photo, i) => isOdd(i) && <img 
                key={photo} 
                className={styles.photo} 
                src={`/albums/${data.slug}/${photo}`} 
                alt={photo}
            ></img>)}          
          </article>
        </section>
      </main>
    </>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync('src/content/albums')
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
    .readFileSync(`src/content/albums/${album}.md`)
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
