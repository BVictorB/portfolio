import Head from 'next/head'
import ArrowAnchor from '../../components/ArrowAnchor'
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import styles from './Album.module.css'

const PhotoAlbum = ({ content, data }) => {
  return (  
    <>
      <Head>
        <title>Photography | (INSERT CATEGORY HERE)</title>
      </Head>
      <main>
        <ArrowAnchor
          anchorText="Back to photography"
          anchorHref="/photography"
        />
        <h1>{data.title}</h1>
        <h2>{data.description}</h2>
        <ReactMarkdown>{content}</ReactMarkdown>
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

  const parsedMarkdown = matter(markdown)

  return {
    props: {
      content: parsedMarkdown.content,
      data: {
        slug: album,
        ...parsedMarkdown.data
      }
    }
  }
}

export default PhotoAlbum
