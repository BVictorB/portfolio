import Timeline from '@components/Timeline/index'
import Head from 'next/head'
import styles from './About.module.css'

const About = () => {
  const events = [
    {
      date: 'January 2020',
      info: 'Frontend development internship',
      at: 'Super Interactive'
    },
    {
      date: 'October 2018',
      info: 'Allround employee',
      at: 'Coolblue'
    },
    {
      date: 'September 2018',
      info: 'Communication & Multimedia Design',
      at: 'Hogeschool van Amsterdam'
    },
    {
      date: 'June 2017',
      info: 'Havo N&G',
      at: 'Joke Smit College Amsterdam'
    },
    {
      date: 'August 2016',
      info: 'Graphic design & DTP',
      at: 'Repro Amsterdam'
    },
    {
      date: 'June 2016',
      info: 'Havo N&T',
      at: 'Geert Groote College Amsterdam'
    }
  ]

  return (
    <>
      <Head>
        <title>Victor Boucher | About</title>
      </Head>
      <main>
        <h1>About</h1>
        <h2>[BRIEF DESCRIPTION ABOUT MYSELF]</h2>
        <h2>[INTERESTS]</h2>
        <h2>[QUALITIES]</h2>
        <Timeline events={events} />
      </main>
    </>
  )
}

export default About