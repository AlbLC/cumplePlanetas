import React from 'react'
import { Routes, Route } from "react-router-dom"
import Calculadora from './Calculadora'


const Main = () => {
  return (
    <div className='Main'>

      <Routes>

        <Route path='/planets' element={<Calculadora />} />

      </Routes>
    </div>
  )
}

export default Main