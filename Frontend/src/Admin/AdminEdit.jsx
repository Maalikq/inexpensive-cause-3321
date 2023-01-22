import { Box, Button, Center, Flex, FormLabel, Heading, Image, Input, TagLabel, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'

const AdminEdit = () => {
 
    const [current,setCurrent]=useState({})
    const {id}=useParams()
    const toast = useToast()
    const nav=useNavigate()
    const handleLogout=()=>
    {
        localStorage.removeItem("token")
        nav("/")
    }
 
    useEffect(()=>
    {
      axios.get(`https://snapdealbackend.onrender.com/products/edit/${id}`,{headers:{token:localStorage.getItem("token")}}).then(r=>{
      if(typeof r.data=="string")
      {
        toast({
          title: 'Not Authorize',
          description: r.data,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
        return nav("/")
      }  
      setCurrent(r.data)})
      
    },[id])
   
    const handleUpdate=()=>
    {
        axios.patch(`https://snapdealbackend.onrender.com/products/edit/${id}`,current,{headers:{token:localStorage.getItem("token")}}).then(r=>
        {
            if(r.data.msg)
            {
                toast({
                    title: 'Product',
                    description: r.data.msg,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
            }
            else
            {
                toast({
                    title: 'Product',
                    description: r.data,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
            }
        })
    }
   
  return (
    <>
       <Flex justifyContent={["space-between","space-around"]} p={["20px 10px","20px 0px"]} boxShadow="2xl" >
         <Box><Link to={"/admin"}><Button>Go Back</Button></Link></Box>
         <Box><Heading>Edit Product</Heading></Box>
         <Box><Button onClick={handleLogout}>Logout</Button></Box>
       </Flex>
     <Flex  gap="20px" w="95%" m={"auto"} mt={"50px"} flexDirection={["column","column","column","row"]}>
       <Box w={["100%","100%","100%","50%"]} p="20px" boxShadow={"2xl"} borderRadius="16px">
         <FormLabel>Image Url</FormLabel>
         <Input value={current.image} onChange={(e)=>setCurrent({...current,image:e.target.value})}/>
         <FormLabel>Product Name</FormLabel>
         <Input value={current.name} placeholder="Product Name" onChange={(e)=>setCurrent({...current,name:e.target.value})}/>
         <FormLabel>Product Price</FormLabel>
         <Input type={"number"} value={current.price} placeholder="Product Name" onChange={(e)=>setCurrent({...current,price:e.target.value})}/>

         <FormLabel>Product Off Price</FormLabel>
         <Input value={current.offPrice} placeholder="Product Off Price" onChange={(e)=>setCurrent({...current,offPrice:e.target.value})}/>

         <FormLabel>Product Category</FormLabel>
         <Input value={current.category} placeholder="Product Category" onChange={(e)=>setCurrent({...current,category:e.target.value})}/>

         <FormLabel>Product Sub Category</FormLabel>
         <Input value={current.subCategory} placeholder="Product Sub Category" onChange={(e)=>setCurrent({...current,subCategory:e.target.value})}/>

         <FormLabel>Product Size</FormLabel>
         <Input value={current.size} placeholder="Enter Product Size using ," onChange={(e)=>setCurrent({...current,size:[...(e.target.value.split(","))]})}/>
         <Center><Button onClick={handleUpdate} mt="20px" >Update Product</Button> </Center>

         
         
       </Box>

        <Flex w={["100%","100%","100%","50%"]} flexDirection={["column","column","row","row"]} gap={10} p="20px" boxShadow={"2xl"} borderRadius="16px">
           <Image src={current.image} w="400px"/>
           <Box>
           <Text fontSize={20}>{current.name}</Text>
           <Text textDecoration={"line-through"}>₹ {current.price}</Text> <span>₹ {current.offPrice}</span>
           <Text>Category :- {current.category}</Text>
           <Text>Sub Category :- {current.subCategory}</Text>
           {current.size?<Flex gap={4}>Size :- {current.size.map((ele)=><span>{ele}</span>)}</Flex>:""}.
           </Box>
        </Flex>
     </Flex>  

    </>
  )
}

export default AdminEdit