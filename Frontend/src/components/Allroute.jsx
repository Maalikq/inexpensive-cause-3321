import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from './Checkout'

const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    </div>
  )
}

export default Allroute