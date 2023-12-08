import Image from "next/image";
import styles from "./suggestions.module.css";

export const SuggestionsCard = ({ card }) => {
  return (
    <div className={styles.cardwrapper}>
      <div className={styles.cardcontent}>
        <div className={styles.imageContainer}>
          <Image width={75} height={75} src={card.image} alt={card.label} />
        </div>
        <div>
          <p>{card.label}</p>
        </div>
      </div>
    </div>
  );
};
