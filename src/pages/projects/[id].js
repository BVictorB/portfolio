import Head from 'next/head'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { getProject, getPaths } from '@helpers'
import { ArrowAnchor, ProjectInfo, Embed } from '@components'
import styles from './Project.module.css'

const Project = ({ content, data, images }) => {
  const [viewCode, setViewCode] = useState(false)
  const js = typeof window !== 'undefined'

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
        {!data.private && js && <button
          className={styles.button}
          onClick={() => setViewCode(prevState => !prevState)}
        >
          {viewCode ? 'Hide code' : 'View code'}
        </button>}
        {viewCode && <Embed 
          title={'Code'}
          url={`https://github1s.com/victorboucher/${data.slug}`}
          frameTitle={`Embed ${data.title} code`}
        />}
        {data.embed && <Embed 
          title={'Live version'}
          url={data.live}
          frameTitle={`Embed ${data.title} website`}
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
