import { Box, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Cartapi = () => {
    
  const [data,setData]=useState([])
  const token=localStorage.getItem("token");

 
    useEffect(()=>
    {
      axios.get("https://snapdealbackend.onrender.com/carts",{headers:token}).then(r=>{setData(r.data.products)})
    },[])

    console.log(data)
  return (
    <>
      {data?.map(ele=>
        <Box>
        <Image src={ele.product.image}/>
        <Text>{ele.quntity}</Text>
      </Box>)}
      
    
    </>
  )
}

export default Cartapi