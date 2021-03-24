import Link from 'next/link'
import Head from 'next/head'
import { ProjectCard, ImageCard } from '@components'
import { getMarkdownFolder } from '@helpers'
import styles from './Home.module.css'

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
        <h2>Welcome to my personal portfolio website. Click on one of the featured items or go to the projects and photography pages to take a look at my work. If you want to get to know more about me, just go to the about page!</h2>
        <h2 className={styles.featured}>Featured project</h2>
        <ProjectCard 
          data={projectSpotlight} 
          favorite={projectSpotlight.favorite}
        />
        <Link href="/projects">
          <a className={styles.link} title="all projects">See all projects<span className={styles.arrow}>&rarr;</span></a>
        </Link>
        <h2 className={styles.featured}>Featured photography album</h2>
        <ImageCard 
          url={`/photography/${albumSpotlight.slug}`}
          image={`/albums/${albumSpotlight.slug}/main.jpg`}
          title={albumSpotlight.title}
        />
        <Link href="/photography">
          <a className={styles.link} title="all albums">See all albums<span className={styles.arrow}>&rarr;</span></a>
        </Link>
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
