import Head from 'next/head'
import { getAlbum, getPaths } from '@helpers'
import { ArrowAnchor } from '@components'
import styles from './Album.module.css'

const PhotoAlbum = ({ data, photos }) => {
  const 
    isEven = num => num % 2 === 0,
    isOdd = num => num % 2 === 1

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

export const getStaticPaths = async () => ({
  paths: getPaths('src/content/albums', 'album'),
  fallback: false
})

export const getStaticProps = async ({ params: { album } }) => ({
  props: getAlbum(album)
})

export default PhotoAlbum
