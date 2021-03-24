import Head from 'next/head'
import { Timeline } from '@components'
import styles from './About.module.css'

const About = () => {
  const experience = [
    {
      date: 'September 2020 - Present',
      info: 'Student assistant for CMD frontend courses',
      at: 'Amsterdam University of Applied Sciences'
    },
    {
      date: 'January 2020 - April 2020',
      info: 'Frontend development internship',
      at: 'Super Interactive'
    },
    {
      date: 'April 2019 - Present',
      info: 'Event photography',
      at: 'Boucher.pics'
    },
    {
      date: 'October 2018 - Present',
      info: 'Allround employee',
      at: 'Coolblue'
    },
    {
      date: 'August 2016 - September 2018',
      info: 'Graphic design & DTP',
      at: 'Repro Amsterdam'
    }
  ]

  const education = [
    {
      date: 'September 2018 - Present',
      info: 'Communication & Multimedia Design',
      at: 'Amsterdam University of Applied Sciences'
    },
    {
      date: 'August 2016 - June 2017',
      info: 'Havo N&G',
      at: 'Joke Smit College Amsterdam'
    },
    {
      date: 'August 2010 - June 2016',
      info: 'Havo N&T',
      at: 'Geert Groote College Amsterdam'
    }
  ]

  const 
    ageInMs = new Date(Date.now() - 895298400000),
    age = ageInMs.getUTCFullYear() - 1970

  return (
    <>
      <Head>
        <title>Victor Boucher | About</title>
      </Head>
      <main>
        <h1>About</h1>
        <p className={styles.textblock}>
          As you have probably figured out by now, my name is Victor Boucher. I am a {age} year old guy from (and living in) Amsterdam.
          I am currently studying Communication and Multimedia Design at the Amsterdam University of Applied Sciences. 
          I also work here as a student assistant where I help other students with their programming during several different courses.
          Since the beginning of my study I have also been working part-time at Coolblue (a consumer electronics retailer). 
        </p>
        <p className={styles.textblock}>
          Before I started with my current study I was not doing any programming at all. 
          I was interested in design, and that's why I decided to do this study. However, I really enjoyed doing the programming courses during 
          the first two years of my study. I even preferred them over the design courses. At this point I decided to go completely for the tech-side
          of this study. I still really enjoy programming and I think that I am quite good at it (if I may say so myself).
        </p>
        <p className={styles.textblock}>
          In my spare time I do a lot of programming aswell, I am currently working on the Musician Finder application. 
          I also really enjoy making music in Logic (a digital audio workstation), DJing, photography,
           sports (cycling, boxing, fitness, football) and learning new things (I am learning Spanish at the moment).
        </p>
        <h2 className={styles.firstTitle}>Experience</h2>
        <Timeline events={experience} />
        <h2>Education</h2>
        <Timeline events={education} />
      </main>
    </>
  )
}

export default About
