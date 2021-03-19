import { Timeline } from '@components/index'
import Head from 'next/head'
import styles from './About.module.css'

const About = () => {
  const events = [
    {
      date: 'September 2020',
      info: 'Student assistant for CMD frontend courses',
      at: 'Hogeschool van Amsterdam'
    },
    {
      date: 'January 2020 - April 2020',
      info: 'Frontend development internship',
      at: 'Super Interactive'
    },
    {
      date: 'April 2019',
      info: 'Event photography',
      at: 'Boucher.pics'
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
      date: 'August 2016 - June 2017',
      info: 'Havo N&G',
      at: 'Joke Smit College Amsterdam'
    },
    {
      date: 'August 2016 - September 2018',
      info: 'Graphic design & DTP',
      at: 'Repro Amsterdam'
    },
    {
      date: 'August 2010 - June 2016',
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
        <h2>Timeline</h2>
        <Timeline events={events} />
      </main>
    </>
  )
}

export default About
