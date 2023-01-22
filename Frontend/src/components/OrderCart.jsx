import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function OrderCart({order}) {
//    const {name,price,offPrice,image,rating,size,category} =order;
//    console.log(name)
// console.log()
  const off = ((order.product.price - order.product.offPrice) * 100) / order.product.price;
  let a=Math.round(off)
  console.log(off);
    return (
      <Box>
        <Box>
          <Image src={order.product.image} width="100%" />
        </Box>
        <Box w="100%" h="40px">
          {order.product.name}
        </Box>
        <Flex gap={4}>
          <Box style={{ textDecoration: "line-through" }}>
            Rs:{order.product.price}
          </Box>
          <Box>Rs:{order.product.offPrice}</Box>
          <Box border="1px solid " p="0 2px">
            {a}% OFF
          </Box>
        </Flex>
        <Box>
          {/* <Button colorScheme="red"> Remove</Button> */}
          <Text backgroundColor="green" w="40%">
            Quantity: {order.quntity}
          </Text>
          <Text as="b">
            Total Rs: {order.quntity * order.product.offPrice}
          </Text>
        </Box>
      </Box>
    );
}

export default OrderCart
