import styles from "./mens.card.module.css";


const MensCard = ({avatar}) => {

  return (
    <div className={styles.container}>
    <div><img src={avatar} alt="" /></div>
    <h1>hellow</h1>
    </div>
  );
};
export default MensCard;
