import { Box, Button, Center, Flex, Grid, GridItem, Heading, Image, Input, InputGroup, InputRightAddon, InputRightElement, Text, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'

const AdminHome = () => {
   
    const [searchParams,setSearchParams]=useSearchParams()
    const [data,setData]=useState([])
    const [random,setRandom]=useState(0)
    const toast = useToast()
    const nav=useNavigate()
    const [search,setSearch]=useState("")
    const [page,setPage]=useState(1)
    const [totalPage,setTotalPage]=useState(1)
    const handleSearch=()=>
    {
      setPage(1)
      setSearchParams({search:search,page:page})
       axios.get(`https://snapdealbackend.onrender.com/products/?search=${search}&page=${page}`,{headers:{token:localStorage.getItem("token")}})
       .then(r=>setData(r.data))
    }

    useEffect(()=>
    {

      setSearchParams({page:page})
      axios.get(`https://snapdealbackend.onrender.com/products/?search=${search}&page=${page}`,{headers:{token:localStorage.getItem("token")}}).then(r=>setData(r.data));
    },[random,page]);
   
    const handleDelete=(item)=>
    {
      axios.delete(`https://snapdealbackend.onrender.com/products/deleteProduct/${item._id}`,{headers:{token:localStorage.getItem("token")}}).then(r=>
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
              setRandom(random+1)
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

    const handleLogout=()=>
    {
        localStorage.removeItem("token")
        nav("/")
    }
    console.log(totalPage)
  return (
    <>
    <Flex justifyContent={["space-between","space-around"]} p={["20px 10px","20px 0px"]} boxShadow="2xl" >
         <Box><Link to={"/products/addProduct"}><Button>Add Product</Button></Link></Box>
         <Box><Heading>Admin Panel</Heading></Box>
         <Box><Button onClick={handleLogout}>Logout</Button></Box>
       </Flex>
      <Center w={"400px"} m="auto" mt={"50px"}> <InputGroup >
        <Input placeholder='Search Product By Name' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleSearch}>
          Search
        </Button>
      </InputRightElement>
    
      </InputGroup></Center>

     

      <Grid templateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)',]} gap={"40px 20px"} w={["95%","95%","90%","90%","80%"]} m="auto" mt="50px">
        {data?.map((ele)=>
        <GridItem key={ele._id} boxShadow="lg" borderRadius={"16px"} p="10px 0px">
            <Image src={ele.image}  />
            <Text p={"0px 20px"}>{ele.name}</Text>
            <Text p={"0px 20px"}>Price:- {ele.price}</Text>
            <Text p={"0px 20px"}>Offer Price:- {ele.offPrice}</Text>
            <Text p={"0px 20px"}>Rating:- {ele.rating}</Text>

           <Center mt="10px" gap={"10px"}> <Link to={`/products/edit/${ele._id}`}><Button>Edit</Button></Link>
            <Button onClick={()=>handleDelete(ele)}>Delete</Button></Center>
        </GridItem>
        )
        }


      </Grid>
      <Center p={"20px"}>
         <Button  borderRadius="none" onClick={()=>setPage(page-1)} isDisabled={page==1}>Previous</Button>
         <Button bg={"none"} borderRadius="none" border={"1px solid #edf2f7"}>{page}</Button>
         <Button  borderRadius="none" onClick={()=>setPage(page+1)} isDisabled={data?.length!=10}>Next</Button>
      </Center>
    </>
  )
}

export default AdminHome