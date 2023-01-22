import { Box, Button, Divider, Flex, Input, Text, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Pay = () => {

  const [cart, setCart] = React.useState([]);
  const toast = useToast()
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
  
  const nav=useNavigate();
  const handleOrdered=()=>
  {
      axios.post(`https://snapdealbackend.onrender.com/orders/done`,{product:cart},{headers:{token:localStorage.getItem("token")}}).then(r=>
      {
        if(r.data.msg)
        {
          toast({
            title: 'Order',
            description: r.data.msg,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })

          cart.map((ele)=>
          {
            axios.patch("https://snapdealbackend.onrender.com/carts/delete",{productId:ele._id},{headers:{token:localStorage.getItem("token")}})
          })

          window.location.href="/"
        }
      })
  }


  return (
    <div>
        <Box  backgroundColor="gray.50">
         <Text color="black">Pay Using Card</Text>
         <Divider mt={4}/>

         <Flex width="60%"  p={2} justifyContent="space-between">
          
          <Text color="black">Card Number</Text>
          <Input width="50%" type="number" placeholder='Card Number'/>

         </Flex>

         <Flex width="60%"  p={2} justifyContent="space-between">
          
          <Text color="black">Expiry Date</Text>
          <Box width="50%" display="flex" gap={2}>
          <Input width="25%" type="number"  placeholder='MM'/>
          <Text fontSize="2xl">/</Text>
          <Input width="20%" type="number"  placeholder='YY'/>

          <Text mt={1} color="black">CVV</Text>
          <Input width="25%" type="number"  placeholder='CVV'/>



          </Box>

         </Flex>
            

         <Button  color="white" backgroundColor="#E40046" mt={8} onClick={handleOrdered}>PAY RS. {cart.reduce((c,el)=>c+(el.product.price*el.quntity),0)}</Button>
         <Text color="black" mt={5}>7 Days Easy Returns</Text>
              <Text color="black">
                Trustpay: 100% Payment Protection. Return or Replacement is
                applicable for 7 days after delivery{" "}
              </Text>
        
         </Box>

    </div>
  )
}

export default Pay