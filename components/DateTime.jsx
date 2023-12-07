import { getWeekDay, getTime, getAMPM } from "../pages/helpers";
import styles from "../styles/home.module.css";

export const DateTime = ({ weatherData }) => {
  return (
    <div className={styles.DTwrapper}>
      <h2>
        {`${getWeekDay(weatherData)}, ${getTime(
          weatherData.dt,
          weatherData.timezone
        )} ${getAMPM(weatherData.dt, weatherData.timezone)}`}
      </h2>
    </div>
  );
};