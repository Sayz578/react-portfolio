import React from 'react'
import Aboutme from '../components/about/Aboutme'
import Skills from '../components/skills/Skills'
import Experiances from '../components/experiances/Experiances'
import MyPartners from '../components/mypartners/MyPartners'


const About = () => {
  return (
    <>
      <Aboutme />
      <Skills />
      <Experiances />
      <MyPartners number="04" text="my partners" extraClass="mypartners-title" />
    </>
  )
}

export default About