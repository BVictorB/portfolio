import Head from 'next/head'
import { ProjectCard, ImageCard } from '@components'
import { getMarkdownFolder } from '@helpers'

const Home = ({ projects, albums }) => {
  const 
    projectSpotlight = projects.sort((a, b) => a.order - b.order)[0],
    albumSpotlight = albums.sort((a, b) => a.order - b.order)[0]

  return (
    <>
      <Head>
        <title>Victor Boucher | Portfolio</title>
      </Head>
      <main>
        <h1>Hi, I am Victor Boucher</h1>
        <h2>Welcome to my personal portfolio website. Click on one of the cards below to take a look at my work or get to know more about me.</h2>
        <h3>Featured project</h3>
        <ProjectCard 
          data={projectSpotlight} 
          favorite={projectSpotlight.favorite}
        />
        <h3>Featured album</h3>
        <ImageCard 
          url={`/photography/${albumSpotlight.slug}`}
          image={`/albums/${albumSpotlight.slug}/main.jpg`}
          title={albumSpotlight.title}
        />
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const 
    projects = getMarkdownFolder('src/content/projects'),
    albums = getMarkdownFolder('src/content/albums')

  return {
    props: {
      projects,
      albums
    }
  }
}

export default Home
