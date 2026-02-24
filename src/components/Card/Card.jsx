import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ data, isSong = false }) {
  return (
    <div className={styles.card}>
      <img src={data.image} alt={data.title} />

      <div className={styles.banner}>
        <p>
          {isSong ? `${data.likes} Likes` : `${data.follows} Follows`}
        </p>
      </div>

      <p>{data.title}</p>
    </div>
  );
}

export default Card;