import styles from "./shoes.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Stack } from '@chakra-ui/react'
//import { getProductData } from "../redux/action";
import MensCard from "./shoes.card";
import ScrollToTop from "react-scroll-to-top";
import {BsArrowUpCircleFill} from "react-icons/bs"
import { Link } from "react-router-dom";


const MensProducts = () => {
  const [products ,setProducts] = useState([]) ;
  const [sortOption, setSortOption] = useState("");
  // const dispatch = useDispatch();
  // const data = useSelector((store) => store);

//   let products = data.MensReducer.data;
// console.log(products)
   useEffect(() => {
     axios
       .get("https://snapdealbackend.onrender.com/products/shoes")
       .then((res) => setProducts(res.data));
   }, []);
  
  const handleSelect = (event) => {
    setSortOption(event.target.value);
    let sortedData = [...products];
    
    ;
    if (sortOption === "price-asc") {
      sortedData = products.sort((a, b) => a.offPrice - b.offPrice);
    } else if (sortOption === "price-desc") {
      sortedData = products.sort((a, b) => b.offPrice - a.offPrice);
    } else if (sortOption === "rating-asc") {
      sortedData = products.sort((a, b) => a.rating - b.rating);
    } 
    
  };
 
  return (
    <div>
      <div className={styles.trendingSearch}>
        <ul className={styles.mensTredingul}>
          <li>Treading Searches</li>
          <li>Shoes for men</li>
          <li>Sport Shoes for mens</li>
          <li>Saree</li>
          <li>tShirt</li>
          <li>Wall sticker</li>
          <li>Kurti set</li>
          <li>Kitchen products</li>
        </ul>
      </div>
      <div className={styles.sortdiv}>
        <select onChange={handleSelect}>
          <option value="">Sort by:</option>
          <option value="price-desc">Price Low to High</option>
          <option value="price-asc">Price High to Low </option>
          <option value="disc-asc">Discount</option>
          <option value="rating-asc">Rating</option>
        </select>
        
      </div>
      <div className={styles.container}>
        {products?.map((item) => (
          <div key={item._id} className={styles.allDataGrid}>
           <Link to={`/products/${item._id}`}> <MensCard {...item} /></Link>
          </div>
        ))}
      </div>
      <ScrollToTop
        smooth
        width="15"
        component={<BsArrowUpCircleFill color="#5A5A5A" size={40} />}
        color="grey"
      />
    </div>
  );
};
export default MensProducts;
