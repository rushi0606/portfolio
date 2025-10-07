import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'

const page = () => {
  return (
    <div className=' '>
      <Navbar/>
      <div className="absolute left-0 top-0 -z-10">
      </div>
      <Header/>
    </div>
  )
}

export default page