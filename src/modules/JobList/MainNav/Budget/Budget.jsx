import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./styles.module.scss";
import DropDownFooter from "../DropDownFooter";

function Budget() {
  const [options, setOptions] = useState([
    { id: 1, value: "Value", range: "Under US$60", checked: false },
    { id: 2, value: "Mid-range", range: "US$60 - US$125", checked: false },
    { id: 3, value: "High-end", range: "US$125 & Above", checked: false },
    { id: 4, value: "Custom", range: "", checked: false },
  ]);

  const handleOptionChange = (event) => {
    const { id } = event.target;
    const newOptions = options.map((option) =>
      option.id === parseInt(id)
        ? { ...option, checked: true }
        : { ...option, checked: false }
    );
    setOptions(newOptions);
  };

  return (
    <>
      <div className={styles.budgetDropdown}>
        <div className={styles.budgetContainer}>
          <Form className={styles.budgetPoll} onChange={handleOptionChange}>
            {options.map((option) => (
              <div key={option.id}>
                <Form.Check
                  className={styles.budgetOption}
                  type="radio"
                  id={option.id}
                  label={`${option.value} ${option.range}`}
                  name="formHorizontalRadios"
                  checked={option.checked}
                />
              </div>
            ))}
          </Form>
          <div className={styles.maxMin}>
            <div className={styles.min}>
              <span>MIN.</span>
              <input
                className="form-control"
                type="number"
                placeholder="Any          $"
                min={0}
              />
            </div>

            <div className={styles.max}>
              <span>MAX.</span>
              <input
                className="form-control"
                type="number"
                placeholder="Any          $"
                min={0}
              />
            </div>
          </div>
        </div>
      </div>
      <DropDownFooter />
    </>
  );
}

export default Budget;
