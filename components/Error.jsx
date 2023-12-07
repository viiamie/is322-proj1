import styles from "../styles/home.module.css";

export const Error = ({ errorMessage, children }) => {
  return (
    <div className={styles.errorwrapper}>
      <h1 className={styles.errormessage}>{errorMessage}</h1>
      {children}
    </div>
  );
};