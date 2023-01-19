import styles from "./tShirt.card.module.css";

const TshirtCard= ({ image, name, price, offPrice, rating }) => {
  let offPercentage = Math.ceil(100 - (offPrice / price) * 100);

  return (
    <div className={styles.Cardcontainer}>
      <div className={styles.pImage}>
        <img src={image} alt="image" />
      </div>
      <p className={styles.mensPname}>{name}</p>
      <p className={styles.priceall}>
        <span className={styles.mensPprice}>Rs. {price}</span>
        <span className={styles.offPricemens}>Rs. {offPrice} </span>
        <button className={styles.offbtn}>{offPercentage}% off</button>
      </p>
      <div>{rating}</div>
    </div>
  );
};
export default TshirtCard;
