import { getTime, getAMPM } from "../pages/helpers";
import { suggestionsCard } from "./SuggestionsCard";
import styles from "./suggestions.module.css";

export const suggestionsBox = ({ weatherData }) => {
  return (
    <div className={styles.boxwrapper}>
      <suggestionsCard
        title={"cold"}
        iconSrc={"/icons/humidity.png"}
      />
      <suggestionsCard
        title={"warm"}
        iconSrc={"/icons/wind.png"}
      />
      <suggestionsCard
        title={"hot"}
      />
      <suggestionsCard
        title={"raining"}
        iconSrc={"/icons/binocular.png"}
      />
      <suggestionsCard
        title={"snowing"}
        iconSrc={"/icons/sunrise.png"}
      />
      <suggestionsCard
        title={"in between"}
        iconSrc={"/icons/sunset.png"}
      />
    </div>
  );
};