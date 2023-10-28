import React from "react";
import styles from "./Loading.module.scss";

function Loading() {
  return (
    <div className={styles.spinner}>
      <span className={styles.loadingText}>Loading...</span>
      <div className={styles.halfSpinner}></div>
    </div>
  );
}
