import React from 'react'
import Experiance from './Experiance'
import { experiences } from '../../utils/data'
import "./experiances.css"
import SectionTitle from '../SectionTitle'

const Experiances = () => {
  return (
            <section className="experiances">
            <div className="container">
                <SectionTitle number="03" text="my experiances" extraClass="experiances-title"/>
                <div className="experiances-wrapper">
                    {experiences && (
                        experiences.map(item => {
                            const {company,description,extraClass,id,job,logo,number,period} =item
                            return(
                                <Experiance {...item} key={id}/>
                            )
                        })
                    )}
                    
                    
                </div>
            </div>
        </section>
  )
}

export default Experiances