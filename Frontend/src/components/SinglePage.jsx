import { Box, Button, Flex, Image, SimpleGrid, Text, useDisclosure, useToast } from "@chakra-ui/react"
import "./SinglePage.css"
import {AiOutlineHeart} from "react-icons/ai"
import ReactImageMagnify from "react-image-magnify";
import { StarIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const SinglePage=()=>{
  const toast=useToast();
  const {id}=useParams();
  const [data,setData]=useState({});
  useEffect(()=>{

    axios.get(
      `https://snapdealbackend.onrender.com/products/${id}`
    ).then((r)=>setData(r.data))
  },[id])

  console.log(data)
      //  const { isOpen, onOpen, onClose } = useDisclosure();
     
        const addProduct = (data) => {
<<<<<
          axios
            .post("https://snapdealbackend.onrender.com/carts/addToCart", {product:{product:id,quntity:1}},
            {headers:{token:localStorage.getItem("token")}
          })
            .then((r) => {
              if(r.data.msg)
            {
                toast({
                    title: 'Cart',
                    description: r.data.msg,
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
            }
            else
            {
                toast({
                    title: 'Cart',

          
          axios.post("https://snapdealbackend.onrender.com/carts/addToCart",{product:{product:id,quntity:1}},{headers:{token:localStorage.getItem("token")}})
            .then((r) => {
               if(r.data.msg)
               {
                toast({
                  title: 'Product',
                  description: r.data.msg,
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
                

               }
               else
               {
                toast({
                    title: 'Product',

                    description: r.data,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                  })

            }
        })
               }
            })

            .catch((e) =>
            {
               toast({
                 title: "Something went wrong",
                 description: e,
                 status: "error",
                 duration: 9000,
                 isClosable: true,
               });
            }
            );
        };
  
  const off= (((Math.floor(data.price-data.offPrice)*100))/data.price);
  console.log(off)
  
 

    return (
      <>
        <Flex
          
          w="90%"
          gap={3}
          justifyContent="center"
          bg="white"
          p="20px"
          m="auto"
        >
          <Box w="40%" id="imageMagnifyer" zIndex={1}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: data.image,
                },
                largeImage: {
                  src: data.image,
                  width: 1000,
                  height: 1300,
                },
              }}
            />
          </Box>
          <Box w="60%" borderLeft="1px solid grey">
            <Box ml={7}>
              <Flex>
                <Text fontSize="22px" w="80%" mb={0}>
                  {data?.name}
                </Text>

                {/* <Box><AiOutlineHeart/></Box> */}
              </Flex>
              <Flex gap={1.5} alignItems="center">
                <StarIcon color="yellow" />
                <StarIcon color="yellow" />
                <StarIcon color="yellow" />
                <StarIcon color="yellow" />
                <AiOutlineHeart />
                <Text>({data?.rating})</Text>
              </Flex>
              <hr
                style={{
                  border: "1px solid grey",
                  marginTop: "5px",
                  marginBottom: "8px",
                }}
              />
              <Flex gap={2}>
                <Text>MRP</Text>
                <p style={{ textDecoration: "line-through" }}>
                  RS:{data?.price}
                </p>
                <Text>(Inclusive of all taxes)</Text>
              </Flex>

              <Flex gap={3}>
                <Flex gap={3}>
                  <Text style={{ fontSize: "22px", color: "red" }}>
                    Rs.{data?.offPrice}
                  </Text>
                  <Text p="1px 4px" border="1px solid ">
                    {off}% OFF
                  </Text>
                </Flex>
              </Flex>
              <Text ml="300px">(2) Offers | Applicable on cart</Text>
              <SimpleGrid
                style={{ border: "1px doted blue" }}
                w="50%"
                ml="300px"
                border="1px dashed blue"
                p={4}
              >
                <Flex gap={3}>
                  <Image
                    src="https://i1.sdlcdn.com/img/newOffersIcon.png"
                    w={7}
                    h={7}
                    mt="4px"
                  />
                  <Text>
                    15% Instant Discount Using AU Small Finance Bank Debit &
                    Credit Cards T&C
                  </Text>
                </Flex>

                <hr style={{ border: "0.1px solid grey", margin: "10px 0" }} />
                <Flex gap={3}>
                  <Image
                    src="https://i1.sdlcdn.com/img/newOffersIcon.png"
                    w={7}
                    h={7}
                    mt="4px"
                  />
                  <Text>
                    15% Instant Discount Using AU Small Finance Bank Debit &
                    Credit Cards T&C
                  </Text>
                </Flex>
              </SimpleGrid>

              <Flex gap={4} mt="40px">
                <Button
                  size="lg"
                  colorScheme="pink"
                  onClick={() => {
                    addProduct();
                  }}
                >
                  ADD TO CART
                </Button>
                <Button size="lg" colorScheme="pink">
                  BUY NOW
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </>
    );
}

export default SinglePage;