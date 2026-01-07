import React from 'react'
import Navbar from './CommonComponents/Navbar'
import About from './Pages/About'

const HomePage = () => {
  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className='bg-yellow-400'>
        <About />
    </div>
    <div>
        
    </div>
    </>
  )
}

export default HomePage