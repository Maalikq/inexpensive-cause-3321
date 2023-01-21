import { Box, Button, Flex, Heading, Input, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const initalValue={email:"",password:""}
    const [login,setLogin]=useState(initalValue)
    const nav=useNavigate()
    const toast = useToast()
    const handleLogin=()=>
    {
        if(login.email=="" || login.password=="")
        {
         toast({
            title: 'Fail.',
            description: "Please Fill All the Fildes",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
       }
       else
       {
         axios.post("https://snapdealbackend.onrender.com/users/login",login).then(r=>
         {
            if(r.data.token)
            {
              console.log(r.data.token)
                toast({
                    title: 'Login',
                    description: "Login Successfull",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                  localStorage.setItem("token",r.data.token)
                  nav("/posts")
            }
            else
            {
                toast({
                    title: 'Login',
                    description: r.data,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })
            }
         })
       }
    }
  return (
    <>
    <Flex justifyContent={["space-between","space-around"]} p={["20px 10px","20px 0px"]} boxShadow="2xl">
       <Box><Link to={"/"}><Button>Go Back</Button></Link></Box>
       <Box><Heading>Home Page</Heading></Box>
       <Box><Link to={"/register"}><Button>Sign Up</Button></Link></Box>

      </Flex>

    <Box w={["90%","50%","50%","30%"]} m="auto" display={"grid"} gap="20px" p="40px" borderRadius={"16px"} mt="50px">
    <Heading textAlign={"center"}>Login</Heading>
    <Input value={login.email} onChange={(e)=>setLogin({...login,email:e.target.value})} placeholder="Enter Your Email"/>
    <Input value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})} placeholder="Enter Your Password"/>

    <Button onClick={handleLogin}>Login</Button>

  </Box>
  </>
  )
}

export default Login