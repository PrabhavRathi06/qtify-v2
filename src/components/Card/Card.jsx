import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({ data }) {
  return (
    <div className={styles.card}>

      {/* IMAGE */}
      <img
        src={data.image}
        alt={data.title}
        className={styles.image}
      />

      {/* WHITE BOTTOM SECTION */}
      <div className={styles.bottom}>
        <Chip
          label={`${data.follows} Follows`}
          size="small"
          className={styles.chip}
        />
      </div>

      {/* TITLE */}
      <p className={styles.title}>{data.title}</p>

    </div>
  );
}

export default Card;