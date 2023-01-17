import styles from "./mens.module.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductData } from "../Redux/actions";
import MensCard from "./mens.card";


const Products = () => {
  
  const dispatch = useDispatch();
  const data = useSelector((store) => store);


let products = data.MensReducer.data;

  useEffect(() => {
    dispatch(getProductData);
  }, []);

  return (
    <div className={styles.container}>
     
     
        {products?.map((item) => (
          <MensCard key={item.id} {...item} />
        ))}
     
      
    </div>
  );
};
export default Products;
