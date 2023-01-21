import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminAddProduct from '../Admin/AdminAddProduct'
import AdminEdit from '../Admin/AdminEdit'
import AdminHome from '../Admin/AdminHome'
import Skin from '../AllProductPage/beauty/Skin'
import MensProducts from '../AllProductPage/mens/product/shoes'
import Tshirt from '../AllProductPage/mens/product/tShirt'
import Sarees from '../AllProductPage/womens/Sarees'
import Cart from '../components/Cart'
import Checkout from '../components/Checkout'
import SinglePage from '../components/SinglePage'
import { Home } from '../Homepage/Home'

const MainRoute = () => {
  return (
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/products/shoes' element={<MensProducts/>}/>
        <Route path='/products/tshirt' element={<Tshirt/>}/>
        <Route path='/products/sarees' element={<Sarees/>}/>
        <Route path='/products/skinCare' element={<Skin/>}/>
        <Route path='/user/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/admin' element={<AdminHome/>}/>
        <Route path='/products/edit/:id' element={<AdminEdit/>}/>
        <Route path='/products/addProduct' element={<AdminAddProduct/>}/>
        <Route path='products/:id' element={<SinglePage/>} />
     </Routes>
  )
}

export default MainRoute