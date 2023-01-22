import React from 'react'
import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import OrderCart from './OrderCart';
// import "./OrderHistory.css"
function OrderHistory() {
    const data = [
      {
       
        name: "Katso - Orange Cotton Blend Regular Fit Men's T-Shirt",
        price: 349,
        offPrice: 1349,
        image:
          "https://n1.sdlcdn.com/imgs/k/h/g/Katso-Yellow-Cotton-Blend-Regular-SDL549385103-2-cbd2d.jpg",
        rating: 4.3,
        size: ["XL", "S", "M", "L"],
        category: "t-shirt",
      },
      {
      
        name: "Veirdo - Black Cotton Regular Fit Men's T-Shirt ( Pack of 1 )",
        price: 419,
        offPrice: 1199,
        image:
          "https://n1.sdlcdn.com/imgs/k/e/8/Veirdo-100-Cotton-Regular-Fit-SDL951571928-2-9631e.jpg",
        rating: 4.5,
        size: ["XL", "S", "M", "L"],
        category: "t-shirt",
      },
    ];
    return (
      <>
        <Box
          w="70%"
          m="auto"
          mt="10vh"
          p={4}
         style={{ boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
        >
          <Box mb={3}>
            <Text fontSize="23px" ml="20px">
              MY ORDERS
            </Text>
          </Box>
          <hr border="1px solid grey" />
       
            {
                data.length>0?
                   <SimpleGrid  columns={[1, 1, 2, 3, 3]} gap="5%" mt="60px">
                {data.length > 0 &&
                 data.map((item, index) => {
                    return (
                      <Box
                     
                      p={6}
                        key={index}
                        style={{
                          boxShadow:
                            " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                        }}
                        className="naj"
                      >
                        <OrderCart key={index} order={item} />
                      </Box>
                    );
                  })}
              </SimpleGrid>:<Text fontSize="25px"as="b" justifyItems="center">NO ORDERS AVAILABLE</Text>
            }
           
            
            <Box></Box>
        
        </Box>
      </>
    );
}

export default OrderHistory
