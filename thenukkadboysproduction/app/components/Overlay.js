import React from 'react'
import Carimg from '@/public/images/image1.jpg'
import Image from 'next/image'

const Overlay = () => {
  return (
    <div className=''>
      <Image src={Carimg} width={1600} height={100} alt="car" />
    </div>
  )
}

export default Overlay