import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function OrderCart({order}) {
//    const {name,price,offPrice,image,rating,size,category} =order;
//    console.log(name)
// console.log()
  const off = ((order.offPrice - order.price) * 100) / order.offPrice;
  let a=Math.round(off)
  console.log(off);
    return (
      <Box>
        <Box>
          <Image src={order.image} width="100%" />
        </Box>
        <Box w="100%">{order.name}</Box>
        <Flex gap={4}>
          <Box style={{ textDecoration: "line-through" }}>Rs:{order.price}</Box>
          <Box>Rs:{order.offPrice}</Box>
          <Box border="1px solid " p="0 2px">{a}% OFF</Box>
        </Flex>
        <Box>
          <Button colorScheme="red"> Remove</Button>
        </Box>
      </Box>
    );
}

export default OrderCart
