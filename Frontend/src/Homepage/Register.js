import { Box, Button, Heading, Input,  useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import axios from "axios"
// import { Link } from 'react-router-dom'
export const Register = ({onClose}) => {
    
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
//    const nav=useNavigate()
   const handleRegister=()=>
   {
    console.log(register)
    if(register.mobile==null || register.name==="" || register.dob==="" || register.email==="" || register.password==="")
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
                //   nav("/login")
                onClose()
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

     
        <Box  m="auto" display={"grid"} gap="20px"  borderRadius={"16px"} >
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

