import Image from "next/image";
import styles from "./suggestions.module.css";

export const suggestionsCard = ({ title, iconSrc, metric, unit }) => {
  return (
    <div className={styles.cardwrapper}>
      <p>{title}</p>
      <div className={styles.cardcontent}>
        <Image width="100px" height="100px" src={iconSrc} alt="weatherIcon" />
        <div>
          <h1>{metric}</h1>
          <p>{unit}</p>
        </div>
      </div>
    </div>
  );
};