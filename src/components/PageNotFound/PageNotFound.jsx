import React from "react";
import styles from "./PageNotFound.module.scss";

function PageNotFound() {
  return (
    <div className="text-center" style={{ height: "100vh" }}>
      <img
        src="https://file.hstatic.net/200000348419/file/404_1_ff141bafa60e4ed3aef90c7ebdbf54e6.png"
        alt="not found"
        className="img-fluid w-50"
      />
      <h2>The page you’re looking for doesn’t exist.</h2>
      <a className={`btn btn-danger ${styles.toHomeBtn}`} href="/">
        Back to Home
      </a>
    </div>
  );
}

export default PageNotFound;
