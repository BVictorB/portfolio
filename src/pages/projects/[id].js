import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { getProject, getPaths } from '@helpers'
import { ArrowAnchor, ProjectInfo } from '@components'
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
        {images.map(image => <img 
          key={image} 
          className={styles.image} 
          src={`/projects/${data.slug}/${image}`} 
          alt={image}
        ></img>)}
      </main>
    </>
  )
}

export const getStaticPaths = async () => ({
  paths: getPaths('src/content/projects', 'id'),
  fallback: false
})

export const getStaticProps = async ({ params: { id } }) => ({
  props: getProject(id)
})

export default Project
