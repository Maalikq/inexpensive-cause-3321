import { Box, Button, Flex, Heading, Image, Select, Text } from '@chakra-ui/react'
import React from 'react'
import "./review.css"

const Review = () => {

    const data=[
         { id:1, 
          images:[ "https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg"],
          title:"hrx item name rteraf",
          sizes:"xl",
          discounted_price:"584",
        },
        {
            id:2,
          images:[ "https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg"],
          title:"hrx item name",
          sizes:"xl",
          discounted_price:"584",
        },
        {
            id:3,
          images:[ "https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg"],
          title:"hrx item name",
          sizes:"xl",
          discounted_price:"584",
        },
        {
            id:4,
          images:[ "https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg"],
          title:"hrx item name",
          sizes:"xl",
          discounted_price:"584",
        }
    
      ]

      
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
                data.map((el)=>
                <Flex key={el.id} justifyContent="space-between"  p={2} border="1px solid black">
                    <Box display="flex" width="25%" border="1px solid black">
                   <Image src={el.images[0]} alt='el.title' width={{lg:"40%",sm:"0%",md:"0%"}}/>
                   <Text>{el.title}</Text>

                   </Box>

                   <Box >
                   <Select >
                    <option value="1">1</option>
                    <option value="1">2</option>
                    <option value="1">3</option>
                   </Select>
                   </Box>

                   <Box>25 jan to 25 jan</Box>
                    <Box>Total: {el.discounted_price}</Box>
                   

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

              <Text color="black" fontSize="lg">Rs. {"daldena"}</Text>

            </Flex>

            <Button width="100%" color="white" backgroundColor="#E40046" mt={5}>PROCEED TO PAYMENT</Button>

           </Box>

         </Box>

        </Box>
    </div>
  )
}

export default Review