import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
      <span>Total Users</span>
      <span>10.273</span>
      <span>10.273</span>
        
      </div>
    </div>
  );
};

export default Card;

