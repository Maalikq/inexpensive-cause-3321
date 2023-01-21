import { Box, Button, Flex, Heading, Input, Select, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
    const initalValue={
        name:"",
        mobile:null,
        dob:"",
        email:"",
        password:"",
        isAdmin:false
    }

   const [register,setRegister]=useState(initalValue);
   const toast = useToast()
   const nav=useNavigate()
   const handleRegister=()=>
   {
    console.log(register)
    if(register.mobile==null || register.name=="" || register.dob=="" || register.email=="" || register.password=="")
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
        register.age=+register.age
        axios.post("https://snapdealbackend.onrender.com/users/register",register).then(r=>{
            if(r.data.msg)
            {
                toast({
                    title: 'Account created',
                    description: r.data.msg,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                  nav("/login")
            }
            else
            {
                toast({
                    title: 'Fail',
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
       <Box><Heading>Sign Up Page</Heading></Box>
       <Box><Link to={"/login"}><Button>Login</Button></Link></Box>

      </Flex>
     
      <Box w={["90%","50%","50%","30%"]} m="auto" display={"grid"} gap="20px" p="40px" borderRadius={"16px"} mt="50px">
        <Heading textAlign={"center"}>Register Now</Heading>
        <Input type={"text"} value={register.name} onChange={(e)=>setRegister({...register,name:e.target.value})} placeholder="Enter Your Name"/>
        <Input type="number" value={register.mobile} onChange={(e)=>setRegister({...register,mobile:e.target.value})} placeholder="Enter Your Mobile Number"/>
        <Input type={"date"} value={register.dob} onChange={(e)=>setRegister({...register,dob:e.target.value})} placeholder="Enter Your DOB"/>
        <Input type={"email"} value={register.email} onChange={(e)=>setRegister({...register,email:e.target.value})} placeholder="Enter Your Email"/>
        <Input type={"password"} value={register.password} onChange={(e)=>setRegister({...register,password:e.target.value})} placeholder="Enter Your Password" />

        <Button onClick={handleRegister}>Register</Button>

      </Box>
    </>
  )
}

export default Register