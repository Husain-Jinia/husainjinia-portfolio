import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Contact/Contact'
import Experience from '../components/experience/Experience'
import Header from '../components/header/Header'
import Projects from '../components/projects/Projects'
import Skills from '../components/skills/Skills'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className=''>
        <Header/>
        <hr className='mt-20 mb-20 ' />
        <Skills/>
        <hr className='mt-20 mb-20 ' />
        <Experience/>
        <hr className='mt-10 ' />               
        <Projects/>
        <hr className='mt-20 ' />
        <Contact/>
      </div>
    </>
  )
}
