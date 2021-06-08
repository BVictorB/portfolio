import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { getArticle, getPaths } from '@helpers'
import { ArrowAnchor } from '@components'
import styles from './Blog.module.css'

const Article = ({ content, data }) => (
  <>
    <Head>
      <title>Blog | {data.title}</title>
      <meta name="description" content={`${data.title} blog post.`}/>
    </Head>
    <main className={styles.container}>
      <ArrowAnchor
        anchorText="Back to articles"
        anchorHref="/blog"
      />
        <h1>{data.title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  </>
)

export const getStaticPaths = async () => ({
  paths: getPaths('src/content/blog', 'id'),
  fallback: false
})

export const getStaticProps = async ({ params: { id } }) => ({
  props: getArticle(id)
})

export default Article
