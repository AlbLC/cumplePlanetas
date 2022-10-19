import React from 'react'
import { Routes, Route } from "react-router-dom"
import Calculadora from './Calculadora'
import Home from './Home'


const Main = () => {
  return (
    <div className='Main'>

      <Routes>

        <Route path='/planets' element={<Calculadora />} />
        <Route path='/' element={<Home />} />
        

      </Routes>
    </div>
  )
}

export default Main