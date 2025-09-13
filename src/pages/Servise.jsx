import React from 'react'
import Service from '../components/service/Service'
import MyPartners from '../components/mypartners/MyPartners'
import Testimonial from '../components/testimonial/Testimonial'
import Faq from '../components/faq/Faq'

const Servise = () => {
  return (
    <div>
      <Service number="01" text="my service" extraClass="service-title" />
      <MyPartners number="02" text="my partners" extraClass="mypartners-title" />
      <Testimonial number="03" text="testimonial" extraClass="service-title" nextClass="media-title" />
      <Faq number="04" text="HAVE ANY QUESTIONS?" extraClass="faq-title"/>
    </div>
  )
}

export default Servise