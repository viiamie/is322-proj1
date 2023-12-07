import styles from "../styles/home.module.css";

export const Header = ({ children }) => {
  return <div className={styles.headerwrapper}>{children}</div>;
};