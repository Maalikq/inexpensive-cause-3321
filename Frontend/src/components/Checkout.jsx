import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Alert, AlertIcon, Box, Divider, Flex, Heading, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react'
import Address from './Address';
import Pay from './Pay';
import Review from './Review';

const Checkout = () => {

    const [login,setlogin]=useState(false);
    const [add,setadd]=useState(false);
    const [review,setreview]=useState(true);
    const [pay,setpay]=useState(false);


    const [cart, setCart] = React.useState([]);
   


    const token=localStorage.getItem("token");

 React.useEffect(()=>{
  cartHandler();
         
 

 },[])

const cartHandler = () => {

  axios.get("https://snapdealbackend.onrender.com/carts",{
    headers:{
      "token":token
    }

}
  ).then(res=>{setCart(res.data.products)})

  
 
};


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

      let showadr=JSON.parse(localStorage.getItem("address")) || {};

     

  return (
    <div>
 <Box display="flex" flexDirection={{lg:"row",sm:"column",md:"column"}} border="1px solid black">

    <Box  width={{lg:"75%",md:"100%",sm:"100%"}} p={5}>
    
    <Accordion defaultIndex={[2]} allowToggle border="1px solid gray" borderRadius="10px" width={{lg:"100%",md:"400px",sm:"360px"}}> 

  <AccordionItem border="none" borderBottom="1px solid grey"  >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' onClick={()=>setlogin(!login)} color={login==true?"white":'gray.600'} backgroundColor={login==true?"black":"white"} borderRadius="10px" p={2} textAlign='left'>
        <Alert status='success' variant="none">
            <Flex direction={{lg:"row",sm:"column"}}>
         { login==false && <AlertIcon color="green" boxSize={6}/>}
            <Text color={login?"white":"gray.600"}>1.Login</Text>
            { login==false && <Text ml={{lg:"200px"}}>suryawanshi@gmail.com</Text>}
       </Flex>
       
        </Alert>
          {/* Section 1 title */}
        </Box>
        
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem border="none" borderBottom="1px solid grey">
    <h2>
      <AccordionButton>
        <Box as="span" flex='1'onClick={()=>setadd(!add)} color={add==true?"white":'gray.600'} backgroundColor={add==true?"black":"white"} borderRadius="10px" p={2} textAlign='left'>
         
        <Alert status='success' variant="none">
            <Flex direction={{lg:"row",sm:"column"}}>
         { add==false && <AlertIcon color="green" boxSize={6}/>}
            <Text color={add?"white":"gray.600"}>2.DELIVERY ADDRESS</Text>

            { add==false && <Box  ml={{lg:"150px"}}>{showadr.address && <Box>
               <Text>{`${showadr.name}  Mob: ${showadr.mob} `}</Text> 
               <Text>{`${showadr.address} ${showadr.locality}`}</Text>
               <Text>{`${showadr.city} - ${showadr.pincode}, ${showadr.state}`} <span style={{color:"blue"}}>Change</span></Text>
            </Box>}</Box>}

       </Flex>
       
        </Alert>

        
        </Box>
        
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     
     <Address/>

    </AccordionPanel>
  </AccordionItem>


  <AccordionItem border="none" borderBottom="1px solid grey">
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' onClick={()=>setreview(!review)} color={review==true?"white":'gray.600'} backgroundColor={review==true?"black":"white"} borderRadius="10px" p={4} textAlign='left'>
         3.Review Order
        </Box>
        
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

     <Review/>
     
    </AccordionPanel>
  </AccordionItem>


  <AccordionItem border="none" >
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' onClick={()=>setpay(!pay)} color={pay==true?"white":'gray.600'} backgroundColor={pay==true?"black":"white"} borderRadius="10px" p={4} textAlign='left'>
         4.Make Payment
        </Box>
        
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} color="gray.400">

     <Pay/>
     
    </AccordionPanel>
  </AccordionItem>


</Accordion>
    </Box>

    <Box color="grey" p={5} backgroundColor="gray.50" width={{lg:"25%",sm:"100%",md:"60%"}} >
       <Text>SUMMARY {cart?.length} Items</Text>
       
       <Box textAlign="left" height="400px" overflow="scroll" p={5}  mt={2}>
        {cart?.map((el)=>
        <div key={el.id}>
           <Text color="gray.600">{el.product.name}</Text>

           <Flex justifyContent="space-between" p={2}>
            <Text>Quantity: {el.quntity}</Text>
            <Text>Rs.{el.product.price}</Text>
           </Flex>
            <Divider/>
        </div>
        )}
       </Box>

       <Flex justifyContent="space-between" mt={5} >
        <Text>Total:</Text>
        <Text>Rs.{cart.reduce((c,el)=>c+(el.product.price*el.quntity),0)}</Text>
      </Flex>
      <Flex justifyContent="space-between" mt={4}>
        <Text>Delivery Charges:</Text>
        <Text color="green">Free</Text>
      </Flex>
      <Divider color="grey" mt={2}/>

      <Flex justifyContent="space-between" mt={4}>
        <Heading as="h2" size="md">You Pay</Heading>
        <Heading as="h2" size="md" color="black">Rs.{cart.reduce((c,el)=>c+(el.product.price*el.quntity),0)}</Heading>
      </Flex>
      <Divider color="grey" mt={3}/>

    </Box>
 </Box>

    </div>
  )
}

export default Checkout