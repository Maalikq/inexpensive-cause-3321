import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Alert, AlertIcon, Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

const Checkout = () => {

    const [login,setlogin]=useState(false);

    const data=[
        {
            id:1,
          images:[ "https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg"],
          title:"hrx item name Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          sizes:"xl",
          qty:2,
          discounted_price:"584",
        },
        {
            id:2,
          images:[ "https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg"],
          title:"hrx item name Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          sizes:"xl",
          qty:1,
          discounted_price:"584",
        },
        {
            id:3,
          images:[ "https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg"],
          title:"hrx item name Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          sizes:"xl",
          qty:1,
          discounted_price:"584",
        },
        {
            id:4,
          images:[ "https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg"],
          title:"hrx item name Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
          sizes:"xl",
          qty:1,
          discounted_price:"584",
        }
    
      ]
console.log(login)
  return (
    <div>
 <Box display="flex" flexDirection={{lg:"row",sm:"column",md:"column"}} border="1px solid black">

    <Box  width={{lg:"75%",md:"100%",sm:"100%"}} p={5}>
    
    <Accordion allowToggle border="1px solid gray" borderRadius="10px"> 

  <AccordionItem border="none" borderBottom="1px solid grey"  >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' onClick={()=>setlogin(!login)} color={login==true?"white":'gray.600'} backgroundColor={login==true?"black":"white"} p={2} textAlign='left'>
        <Alert status='success' variant="none">
            <Flex>
         { login==false && <AlertIcon color="green" boxSize={6}/>}
            <Text color={login?"white":"gray.600"}>1.Login</Text>
            { login==false && <Text ml="200px">suryawanshi@gmail.com</Text>}
       </Flex>
       
        </Alert>
          {/* Section 1 title */}
        </Box>
        
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem border="none" >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1'p={2} textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
    </Box>

    <Box color="grey" p={5} backgroundColor="gray.50" width={{lg:"25%",sm:"100%",md:"60%"}} border="1px solid black">
       <Text>SUMMARY (2 items)</Text>
       
       <Box textAlign="left" height="400px" overflow="scroll" p={5} border="1px solid red" mt={2}>
        {data.map((el)=>
        <div key={el.id}>
           <Text color="gray.600">{el.title}</Text>

           <Flex justifyContent="space-between" p={2}>
            <Text>Quantity: {el.qty}</Text>
            <Text>Rs.{el.discounted_price}</Text>
           </Flex>
            <Divider/>
        </div>
        )}
       </Box>

       <Flex justifyContent="space-between" mt={5} >
        <Text>Total:</Text>
        <Text>Rs.{"daldena bad me"}</Text>
      </Flex>
      <Flex justifyContent="space-between" mt={4}>
        <Text>Delivery Charges:</Text>
        <Text color="green">Free</Text>
      </Flex>
      <Divider color="grey" mt={2}/>

      <Flex justifyContent="space-between" mt={4}>
        <Heading as="h2" size="md">You Pay</Heading>
        <Heading as="h2" size="md" color="black">Rs.{"daldena"}</Heading>
      </Flex>
      <Divider color="grey" mt={3}/>

    </Box>
 </Box>

    </div>
  )
}

export default Checkout