import Head from 'next/head'
import fs from 'fs'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { ArrowAnchor, ProjectInfo } from '@components/index'
import styles from './Project.module.css'

const Project = ({ content, data, images }) => {
  return (  
    <>
      <Head>
        <title>Projects | {data.title}</title>
      </Head>
      <main>
        <ArrowAnchor
          anchorText="Back to projects"
          anchorHref="/projects"
        />
        <h1>{data.title}</h1>
        <h2>{data.description}</h2>
        <div className={styles.container}>
          <ReactMarkdown className={styles.text}>{content}</ReactMarkdown>
          <ProjectInfo data={data} />
        </div>
        {data.embed && <a href={data.live} target="_blank"><h2>Live version</h2></a>}
        {data.embed && <iframe className={styles.embed} src={data.live} title={`Embed ${data.title} website`} />}
        <h2>Images</h2>
        {images.map(image => <img key={image} className={styles.image} src={`/projects/${data.slug}/${image}`}></img>)}
      </main>
    </>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync('content/projects')
  const paths = files.map(filename => ({
    params: {
      id: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params: { id } }) => {
  const markdown = fs
    .readFileSync(`content/projects/${id}.md`)
    .toString()

  const images = fs.readdirSync(`public/projects/${id}`)
  const parsedMarkdown = matter(markdown)

  return {
    props: {
      content: parsedMarkdown.content,
      data: {
        slug: id,
        ...parsedMarkdown.data
      },
      images
    }
  }
}

export default Project
