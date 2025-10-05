import React from 'react'
import Overlay from './components/Overlay'
import Navbar from './components/Navbar'
import Header from './components/Header'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className="absolute top-0 -z-10">
      <Overlay/>
      </div>
      <Header/>
    </div>
  )
}

export default page