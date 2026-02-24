import styles from "./Navigation.module.css";
import rightIcon from "../../assets/right.svg";

function RightNavigation() {
  return (
    <button className={`right-arrow ${styles.right}`}>
      <img src={rightIcon} alt="right" />
    </button>
  );
}

export default RightNavigation;