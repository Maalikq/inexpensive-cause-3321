import { Box, Button, Flex, Heading, Image, Select, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import "./review.css"

const Review = () => {

   
    
      const [cart, setCart] = React.useState([]);
      const [qty, setqty] = useState(1);


      const token=localStorage.getItem("token");

   React.useEffect(()=>{
    cartHandler();
           
   

   },[qty])
  
  const cartHandler = () => {

    axios.get("https://snapdealbackend.onrender.com/carts",{
      headers:{
        "token":token
      }
  
  }
    ).then(res=>{setCart(res.data.products)})

    
   
  };

  const qtychange=(val,prodid)=>{
    
    

    axios.patch("https://snapdealbackend.onrender.com/carts/update",

      {
        productId:prodid,
        quntity:val
      },
      {
      headers:{
        "token":token
      },}
  
  
    ).then(()=>setqty(val));
          
   
  }

      
  return (
    <div>
        <Box  color="gray.500" width="100%" >
          
          <Flex className='tablerow'   p={3} justifyContent="space-between"  backgroundColor="gray.100">
           <Box>Item Details</Box>
           <Box ml={12}>Quantity</Box>
           <Box>Delivery Options</Box>
           <Box>Subtotal</Box>

          </Flex>

          <Box height="400px" overflow="scroll">
            {
                cart.map((el)=>
                <Flex key={el.id} justifyContent="space-between"  p={2} >
                    <Box display="flex" width="25%" >
                   <Image src={el.product.image} alt='el.title' width={{lg:"40%",sm:"0%",md:"0%"}}/>
                   <Text>{el.product.name}</Text>

                   </Box>

                   <Box >
                   <Select onChange={(e) => qtychange(e.target.value,el._id)}>
                   <option value={el.quntity}>{el.quntity}</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                   </Select>
                   </Box>

                   <Box>25 jan to 25 jan</Box>
                    <Box>Total: {el.product.price * el.quntity}</Box>
                   

                </Flex>
                )
            }

          </Box>
         <Box display="flex" border="1px solid black" p={5} mt={5} flexDirection={{lg:"row",md:"column",sm:"column"}} justifyContent="space-between">
           <Box>
           Have a promo code? Apply 
           </Box>

           <Box >
            <Flex  gap={10}>
              <Heading as="h3" size="md">You Pay:</Heading>

              <Text color="black" fontSize="lg">Rs. {cart.reduce((c,el)=>c+(el.product.price*el.quntity),0)}</Text>

            </Flex>

            <Button width="100%" color="white" backgroundColor="#E40046" mt={5}>PROCEED TO PAYMENT</Button>

           </Box>

         </Box>

        </Box>
    </div>
  )
}

export default Review