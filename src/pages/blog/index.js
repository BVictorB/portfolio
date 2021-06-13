import Head from 'next/head'
import { getMarkdownFolder } from '@helpers'
import { ImageCard } from '@components'

const Blog = ({ articles }) => {
  articles.sort((a, b) => a.order - b.order)

  return (
    <>
      <Head>
        <title>Victor Boucher | Blog</title>
      </Head>
      <main>
        <h1>Blog</h1>
        <h2>Articles written during the Communication and Multimedia Design minor Web Design and Development. Click on one of the cards to read the article!</h2>
        {articles.map((article, i) => <ImageCard 
          url={`/blog/${article.slug}`}
          image={`/articles/${article.slug}.jpg`}
          title={article.title}
          key={i}
        />)}
      </main> 
    </>
  )
}

export const getStaticProps = async () => ({
  props: {
    articles: getMarkdownFolder('src/content/blog')
  }
})

export default Blog
