import Head from 'next/head'
import { getAlbum, getPaths } from '@helpers'
import { ArrowAnchor } from '@components'
import styles from './Album.module.css'

const PhotoAlbum = ({ data, photos }) => (
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
        {photos.map(photo => <img 
          key={photo} 
          src={`/albums/${data.slug}/${photo}`} 
          alt={photo}
        ></img>)}
      </section>
    </main>
  </>
)

export const getStaticPaths = async () => ({
  paths: getPaths('src/content/albums', 'album'),
  fallback: false
})

export const getStaticProps = async ({ params: { album } }) => ({
  props: getAlbum(album)
})

export default PhotoAlbum
