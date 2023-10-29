import React from "react";
import { Nav } from "react-bootstrap";
import styles from "./styles.module.scss";

function DropDownFooter() {
  return (
    <div className={styles.dropdownFooter}>
      <Nav.Link>Clear All</Nav.Link>
      <button className="btn btn-dark">Apply</button>
    </div>
  );
}

export default DropDownFooter;
