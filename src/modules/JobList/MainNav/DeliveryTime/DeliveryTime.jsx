import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./DeliveryTime.module.scss";
import DropDownFooter from "../DropDownFooter/DropDownFooter";

function DeliveryTime() {
  const [options, setOptions] = useState([
    { id: 1, value: "Express 24H", range: "", checked: false },
    { id: 2, value: "Up to 3 days", range: "", checked: false },
    { id: 3, value: "Up to 7 days", range: "", checked: false },
    { id: 4, value: "Anytime", range: "", checked: false },
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
      <div className={styles.deliveryDropdown}>
        <div className={styles.deliveryContainer}>
          <Form className={styles.deliveryPoll} onChange={handleOptionChange}>
            {options.map((option) => (
              <div key={option.id}>
                <Form.Check
                  className={styles.deliveryOption}
                  type="radio"
                  id={option.id}
                  label={`${option.value} ${option.range}`}
                  name="formHorizontalRadios"
                  checked={option.checked}
                />
              </div>
            ))}
          </Form>
        </div>
      </div>
      <DropDownFooter />
    </>
  );
}

export default DeliveryTime;
