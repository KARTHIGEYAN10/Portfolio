import React from 'react'
import Navbar from './CommonComponents/Navbar'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Skill from './Pages/Skill'

const HomePage = () => {
  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className='bg-yellow-400'>
        <About />
    </div>
    <div className='bg-[#e85d04] p-10'>
      <Skill />
    </div>
    <div className='bg-pink-300'>
        <Contact />
    </div>
    </>
  )
}

export default HomePage