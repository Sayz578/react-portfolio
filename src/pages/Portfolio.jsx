import React from 'react'
import Portfolio from '../components/portfolio/Portfolio'
import MyPartners from '../components/mypartners/MyPartners'
import Faq from '../components/faq/Faq'


const pagePortfolio = () => {
  return (
    <>
    <Portfolio/>
    <MyPartners number="02" text="my partners" extraClass="mypartners-title" />
    <Faq number="03" text="HAVE ANY QUESTIONS?" extraClass="faq-title"/>
    </>
  )
}

export default pagePortfolio