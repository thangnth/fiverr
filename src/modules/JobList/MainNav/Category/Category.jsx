import React from "react";
import data from "./data.json"
import { NavDropdown } from "react-bootstrap";
import styles from "./styles.module.scss";

function Category() {
  return data.map((item) => {
    return (
      <div key={item.id} className={styles.categoryDropdown}>
        <div className={styles.categoryContainer}>
          <NavDropdown.Item eventKey={item.eventKey} className="category">
            {item.jobTitle}
            {item.number && (
              <span className={styles.number}>({item.number})</span>
            )}
          </NavDropdown.Item>
        </div>
      </div>
    );
  });
}

export default Category;
