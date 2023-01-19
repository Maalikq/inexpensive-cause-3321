import styles from "./Sarees.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
//import { getProductData } from "../redux/action";
import SareesCard from "./Sarees.card";
import { Button } from "@chakra-ui/react";

const Sarees = () => {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  // const dispatch = useDispatch();
  // const data = useSelector((store) => store);

  //   let products = data.MensReducer.data;
  // console.log(products)
  useEffect(() => {
    axios
      .get("https://snapdealbackend.onrender.com/products/sarees")
      .then((res) => setProducts(res.data));
  }, []);
  const handleSort = () => {
    let sortedData = [...products];
    console.log(sortedData);
    if (sortOption === "price-asc") {
      sortedData = products.sort((a, b) => a.offPrice - b.offPrice);
    } else if (sortOption === "price-desc") {
      sortedData = products.sort((a, b) => b.offPrice - a.offPrice);
    } else if (sortOption === "rating-asc") {
      sortedData = products.sort((a, b) => a.rating - b.rating);
    }

    setProducts(sortedData);
  };
  const handleSelect = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div>
      <div className={styles.sortdiv}>
        <select onChange={handleSelect}>
          <option value="">Sort by:</option>
          <option value="price-desc">Price Low to High</option>
          <option value="price-asc">Price High to Low </option>
          <option value="disc-asc">Discount</option>
          <option value="rating-asc">Rating</option>
        </select>
        <Button
          variant="outline"
          width="100px"
          height="20px"
          colorScheme="teal"
          className={styles.sortbtn}
          onClick={handleSort}
        >
          Sort
        </Button>
      </div>
      <div className={styles.container}>
        {products?.map((item) => (
          <div key={item._id} className={styles.allDataGrid}>
            <SareesCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sarees;
