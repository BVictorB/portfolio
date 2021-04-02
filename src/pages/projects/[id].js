import Head from 'next/head'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { getProject, getPaths } from '@helpers'
import { ArrowAnchor, ProjectInfo } from '@components'
import styles from './Project.module.css'

const Project = ({ content, data, images }) => {
  const [viewCode, setViewCode] = useState(false)

  return (
    <>
      <Head>
        <title>Projects | {data.title}</title>
        <meta name="description" content={data.description}/>
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
        {!data.private && <button
          className={styles.viewCode}
          onClick={() => setViewCode(prevState => !prevState)}
        >
          {viewCode ? 'Hide code' : 'View code'}
        </button>}
        {viewCode && <>
          <a 
            href={`https://github1s.com/BVictorB/${data.slug}`}
            target="_blank"
          >
            <h2>Code</h2>
          </a>
          <iframe 
            className={styles.embed} 
            src={`https://github1s.com/BVictorB/${data.slug}`} 
            title={`Embed ${data.title} code`} 
          />
        </>}
        {data.embed && <a 
          href={data.live} 
          target="_blank"
        >
          <h2>Live version</h2>
        </a>}
        {data.embed && <iframe 
          className={styles.embed} 
          src={data.live} 
          title={`Embed ${data.title} website`} 
        />}
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
