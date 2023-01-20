import styles from "./shoes.card.module.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai"
const MensCard = ({ image, name, price, offPrice, rating }) => {
  let offPercentage=Math.ceil(100-(offPrice/price)*100) ;
  let startRating = Array.from({length:5},(ele,index)=>{
    let number= index+0.5 ;
    return (
      <>
        {rating >= index + 1 ? (
          <FaStar color="#FFC315" />
        ) : rating >= number ? (
          <FaStarHalfAlt color="#FFC315" />
        ) : (
          <AiOutlineStar color="#FFC315" />
        )}
      </>
    );
  })
  return (
    <div className={styles.Cardcontainer}>
      <div className={styles.pImage}>
        <img src={image} alt="image" />
      </div>
      <p className={styles.mensPname}>{name}</p>
      <p className={styles.priceall}>
        <span className={styles.mensPprice}>Rs. {price}</span>
        <span className={styles.offPricemens}>Rs. {offPrice} </span><button className={styles.offbtn}>{offPercentage}% off</button>
      </p>
      <div className={styles.ratingflex}>{startRating}</div>
    </div>
  );
};
export default MensCard;
