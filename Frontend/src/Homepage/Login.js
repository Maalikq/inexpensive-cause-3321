import { Box, Button, Heading, Input, useToast } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

export const Login = ({onClose,setrandom}) => {

    const initalValue={email:"",password:""}
    const [login,setLogin]=useState(initalValue)
   
 
    // const nav=useNavigate()
    const toast = useToast()
    const handleLogin=()=>
    {
        if(login.email==="" || login.password==="")
        {
         toast({
            title: 'Fail.',
            description: "Please Fill All the Fields",
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
                //   nav("/posts")
                setrandom(1)
                onClose()
                
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
   

    <Box  m="auto" display={"grid"} gap="20px" >
    <Heading textAlign={"center"}>Login</Heading>
    <Input value={login.email} onChange={(e)=>setLogin({...login,email:e.target.value})} placeholder="Enter Your Email"/>
    <Input value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})} placeholder="Enter Your Password"/>

    <Button onClick={handleLogin}>Login</Button>

  </Box>
  </>
  )
}

