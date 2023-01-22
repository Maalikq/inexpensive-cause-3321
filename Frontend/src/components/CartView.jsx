import {RiCloseFill} from 'react-icons/ri';
import {BsHeart} from 'react-icons/bs';

import styles from './CartView.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

export default function CartView({product,qtychange}){

    const toast = useToast()
    const handelremove=(id)=>{
        console.log(localStorage.getItem("token"))
        console.log(product)
     
        axios.patch(`https://snapdealbackend.onrender.com/carts/delete`,{productId:id},{headers:{token:localStorage.getItem("token")}})
        .then(r=>{
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
   
       
  return (
    <div className={styles.th}>
      <div style={{display:"flex"}}>
          <div style={{marginRight:"20px"}}>
              <img src={product.product.image} width="60px" alt='pich'/>
          </div>
          <div>
              <div>
                  <p>{product.product.name}</p>
                  <p>Colour: Default | Size: {product.product.size[1]}</p>
              </div>

              <div style={{display:"flex",}}>
                  <div  className={styles.action}><RiCloseFill onClick={()=>handelremove(product._id)} style={{marginRight:"0.5rem"}} size="1.3rem"/>REMOVE</div> | 
                  <div className={styles.action}><BsHeart style={{marginRight:"0.5rem"}}/>MOVE TO SHORTLIST</div>
              </div>
          </div>
          
      </div>
      <div>Rs. {product.product.price}</div>
      <div>
          <select onChange={(e) => qtychange(e.target.value,product._id)}>
          <option value={product.quntity}>{product.quntity}</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
          </select>
      </div>
      <div>Check availability and delivery charges for your pincode</div>
      <div>Rs. {product.product.price * product.quntity}</div>
  </div>
  )
}