import './App.css';
import ProductCard from './AllProductPage/mens/product/mens.card';
import SinglePage from './components/SinglePage';
import { Box, Button, Stack, useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
// import AllRoutes from './AllProductPage/AllRoutes';
import OrderHistory from './components/OrderHistory';
function App() {


  return (
    <div className="App">
   
     <OrderHistory/>
    </div>
  );
}

export default App;
