import React from 'react'
import { Outlet } from 'react-router'
import Header from "./header/Header"
import Footer from "./footer/Footer"

const layout = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default layout