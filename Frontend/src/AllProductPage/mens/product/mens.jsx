import styles from "./mens.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductData } from "../redux/action";
import MensCard from "./mens.card";

const MensProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store);

  let products = data.MensReducer.data;

  useEffect(() => {
    dispatch(getProductData);
  }, []);

  return (
    <div className={styles.container}>
      {products?.map((item) => (
        <div key={item.id} className={styles.allDataGrid}>
          <MensCard {...item} />
        </div>
      ))}
    </div>
  );
};
export default MensProducts;
