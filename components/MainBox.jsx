import styles from "./main.module.css";

export const MainBox = ({ children }) => {
  return <div className={styles.boxwrapper}>{children}</div>;
};