import { Box, Button, Image, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Product = () => {
    const [shoes,setShoes]=useState([])
    const toast = useToast()
    useEffect(()=>
    {
        axios.get("http://localhost:3000/products/shoes").then(r=>setShoes(r.data));
    },[])
    const handleCart=(ele)=>
    {
        const id=ele._id
        axios.post("http://localhost:3000/carts/addToCart",{product:{product:id,quntity:1}},{headers:{token:localStorage.getItem("token")}}).then(r=>
        {
            if(r.data.msg)
            {
                toast({
                    title: 'Cart',
                    description: r.data.msg,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
            }
            else
            {
                toast({
                    title: 'Cart',
                    description: r.data,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
            }
        })
    }
 console.log(shoes);
  return (
   <>
     {
        shoes?.map((ele)=>
        
          <Box>
            <Image src={ele.image}/>
            <Button onClick={()=>handleCart(ele)}>Add To Card</Button>
          </Box>
        )
     }
   </>
  )
}

export default Product