import React from 'react'
import Navber from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>
        <Navber/>
            {children}
        <Footer/>
    </>
  )
}
