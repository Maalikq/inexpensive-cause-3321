import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import OrderCart from './OrderCart';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import "./OrderHistory.css"
function OrderHistory() {
 
  // const nav=useNavigate()
   const [data,setData]=useState({})
  useEffect(()=>
  {
     axios.get("https://snapdealbackend.onrender.com/orders",{headers:{token:localStorage.getItem("token")}}).then(r=>
     {
      //  if(typeof r.data=="string")
      //  {
      //     nav("/")
      //  }
      //  else
      //  {
      //   setData(r.data);
      //  }
      setData(r.data)
     })
  },[])

  

    return (
      <>
       <Box
          w="70%"
          m="auto"
          mt="10vh"
          p={4}
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
       
            <SimpleGrid
              columns={[1, 1, 1, 2, 2]}
              mb={[16,14,12,9,5,3]}
             gap="40%"
            >
              <Text fontSize="23px" >
                MY ORDERS
              </Text>
              <Box>
                <Text>Name: {data.id?.name}</Text>
                <Text>EmailID: {data.id?.email}</Text>
              </Box>
            </SimpleGrid>
        
          <hr border="1px solid grey" />

          {data.products?.length > 0 ? (
            <SimpleGrid columns={[1, 1, 2, 3, 3]} gap="5%" mt="60px">
              {data?.products &&
                data?.products.map((item, index) => {
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
            </SimpleGrid>
          ) : (
            <Text fontSize="25px" as="b" justifyItems="center">
              NO ORDERS AVAILABLE
            </Text>
          )}

          <Box mb="400px"></Box>
        </Box>
      </>
    );
}

export default OrderHistory
