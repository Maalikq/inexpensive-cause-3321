import { Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Flex justify="space-evenly">
        <Link to="/cart">cart</Link>
        <Link to="/register">register</Link>
        <Link to="/login">Login</Link>
        
        </Flex>
    </div>
  )
}

export default Navbar