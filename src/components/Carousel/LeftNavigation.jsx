import styles from "./Navigation.module.css";
import leftIcon from "../../assets/left.svg";

function LeftNavigation() {
  return (
    <button className={`left-arrow ${styles.left}`}>
      <img src={leftIcon} alt="left" />
    </button>
  );
}

export default LeftNavigation;