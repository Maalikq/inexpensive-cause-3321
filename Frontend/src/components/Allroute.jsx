import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from './Checkout'
import Register from './Register'
import Login from "./Login"
import Cart from './Cart'

const Allroute = () => {
  return (
    <div>
        <Routes>

            <Route path='/cart' element={<Cart/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
    </div>
  )
}

export default Allroute