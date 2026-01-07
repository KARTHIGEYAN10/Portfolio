import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './CommonComponents/Navbar'
import HomePage from './HomePage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
