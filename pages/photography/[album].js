import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import ArrowAnchor from '@components/ArrowAnchor'
import styles from './Album.module.css'

const PhotoAlbum = ({ content, data, photos }) => {
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
        <h2>{data.description}</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
        {photos.map(photo => <img key={photo} className={styles.photo} src={`/assets/photos/${data.slug}/${photo}`}></img>)}
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

  const photos = fs.readdirSync(`public/assets/photos/${album}`)
  const parsedMarkdown = matter(markdown)

  return {
    props: {
      content: parsedMarkdown.content,
      data: {
        slug: album,
        ...parsedMarkdown.data
      },
      photos
    }
  }
}

export default PhotoAlbum
