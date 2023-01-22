import * as React from "react";
import styles from "./payment.module.css";


import { TiTick } from "react-icons/ti";
import { RiCloseFill } from "react-icons/ri";

import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import {Box, Heading, useDisclosure} from "@chakra-ui/react";
import {  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,} from "@chakra-ui/react";

import CartView from "./CartView";
// import { CartProvider } from "../../Context/CartContextProvider";
import axios from "axios";
// import Snackbar from "@mui/material/Snackbar";
import { useToast } from '@chakra-ui/react'

import {IconButton} from "@chakra-ui/react";

import {CloseButton} from "@chakra-ui/react";

// import { removeDetails } from "../../Redux/Allproduct/action";
// import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { deleteCartProduct } from "../../Server/Apis";
// import { delete_api } from "../../Redux/Cacrt/cart.api";
// import { UserProvider } from "../../Context/UserContextProvider";

const style = {
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // width: "100%",
  // height: "100%",
  // bgcolor: "background.paper",
  // boxShadow: 24,
  // borderRadius: "5px",
};

const Notification = styled.div`
  background-color: rgb(25, 188, 156);
  padding: 1rem;
  display: ${(prop) => (prop.show ? "flex" : "none")};
  height: 80px;
  width: 100%;
`;




const Cart = ({isOpen,onOpen,onClose}) => {

  
  const [popup, setPopup] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [cart, setCart] = React.useState([]);
  const [totalRs, setTotalRs] = React.useState(0);
  // const { isOpen, onOpen, onClose } = useDisclosure()

  const [qty, setqty] = useState(1);
  
  const navigate = useNavigate();
  
  // const handleOpen = () => {setOpen(true);
  //   onOpen();
  // };
  const handleClose = () => {setOpen(false)
  };
  


  // let cartProduct={
  //   title:"hrx item name",
  //   images:[
  //         "https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg"
  //   ],
  //   discounted_price:"584",


  // }

  
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
  
  const handleremove=(id)=>{

    axios.delete("https://snapdealbackend.onrender.com/carts/delete",
     
    { productId:id},
   
    {
     
    headers:{
      "token":token
    },}


  ).then(()=>console.log("hogaya"))
  .catch((err)=>console.log(err));
    
  

  }
  

  const checkout=()=>{
    onClose();
       navigate("/checkout");
       
  }
  
  
  return (
    <div>

<div className={styles.main}>
      
        {/* <div className={styles.cont}>
          <Notification show={popup} className={styles.notif}>
            <div>
              <TiTick />
            </div>
            <div>
              <h4 className={styles.h4}>
                {" "}
                {cartProduct.title} added to your cart.
              </h4>
            </div>
            <div onClick={() => setPopup(false)}>
              <RiCloseFill />
            </div>
          </Notification>

          <div className={styles.cart}>
          
            <div>
              <img src={cartProduct.images[0]} alt="cart" width="70%" />
            </div>
            <div >
              <p className={styles.heading}>{cartProduct.title}</p>
              <p>Rs. {cartProduct.discounted_price}</p>
            </div>
           
            

            <div>
              <p className={styles.heading}>
                Your Order{" "}
                <span className={styles.items}>{cart.length} Items</span>
              </p>
              <h2 className={styles.value}>
                You Pay : <span style={{ color: "black" }}>Rs. {totalRs}</span>
              </h2>
              <p className={styles.view}>
                (Including delivery and other charges. View Cart for details)
              </p>
            </div>

            <div>
              <div
                
              >
                PROCEED TO CHECKOUT
              </div>
              <div onClick={handleOpen}>VIEW CART</div>
            </div>
          </div>
        </div> */}

        <Modal
           isOpen={isOpen}
           onClose={onClose}
          size={{"sm":"4xl", "md":"4xl", "lg":"6xl"}}
          
        >
        <ModalOverlay />
        <ModalContent >
          <div style={style}>
            <div className={styles.cartTitle}>
              <div>
                <h4>
                  Shooping Cart{" "}
                  <span style={{ fontSize: "1rem", color: "rgb(132,132,132)" }}>
                     {cart.length} Item
                  </span>
                </h4>
              </div>
              <div>
                <RiCloseFill onClick={onClose} />
              </div>
            </div>

            <div className={styles.table}>
              <div className={styles.th}>
                <div>Item Details</div>
                <div>Price</div>
                <div>Quantity</div>
                <div style={{ display: "flex" }}>
                  <div>Delivery with Charges</div>
                  <input
                    placeholder="Pincode"
                    style={{
                      width: "70px",
                      margin: "0 2px",
                      border: "1px solid rgb(132,132,132)",
                    }}
                  />
                  <button
                    style={{
                      background: "black",
                      color: "white",
                      padding:"5px",
                      fontSize: "0.9rem",
                      width:"80px",
                      borderRadius:"50px"
                    }}
                  >
                    CHECK
                  </button>
                </div>
                <div>Subtotal</div>
              </div>

                { cart.length==0?<Heading>Your Cart is Empty</Heading>:
                cart.map((item, ind) => (
                <CartView
                  product={item}
                  qtychange={qtychange}
                  handleremove={()=>handleremove(item.product._id)}
                  key={ind}
                  

                />
               

              ))}
            </div>

            <div className={styles.footer}>
              <div>
                <p>Delivery and payment options can be selected later</p>
                <p> Safe and Secure Payments</p>
                <p>100% Payment Protection, Easy Returns Policy</p>
              </div>
              <div>
                <div style={{ display: "flex" }}>
                  <div>Sub Total: </div>
                  <div style={{ marginLeft: "auto" }}>Rs. {cart.reduce((c,el)=>c+(el.product.price*el.quntity),0)}</div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>Delivery Charges: </div>
                  <div
                    style={{ marginLeft: "auto", color: "rgb(21, 228, 107)" }}
                  >
                    FREE
                  </div>
                </div>
              </div>
              <div
              onClick={checkout}
               style={{ fontSize:"15px",fontWeight:"bold" }}
              >
                PROCEED TO PAY Rs. {cart.reduce((c,el)=>c+(el.product.price*el.quntity),0)}
              </div>
            </div>
          </div>
          </ModalContent>
        </Modal>
      </div>



    </div>
  )
}

export default Cart