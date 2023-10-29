import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Switch } from "antd";
import styles from "./styles.module.scss";
import "./styles.scss"

function SwitchNav() {
  const [isCheckedService, setIsCheckedService] = useState(false);
  const [isCheckedLocal, setIsCheckedLocal] = useState(false);
  const [isCheckedOnline, setIsCheckedOnline] = useState(false);

  const handleChangeService = (checked) => {
    setIsCheckedService(checked);
  };

  const handleChangeLocal = (checked) => {
    setIsCheckedLocal(checked);
  };

  const handleChangeOnline = (checked) => {
    setIsCheckedOnline(checked);
  };

  return (
    <>
      <Nav className={styles.container}>
        <Nav.Item className={styles.navItem}>
          <Switch checked={isCheckedService} onChange={handleChangeService} />
          <span>Pro services</span>
        </Nav.Item>

        <Nav.Item className={styles.navItem}>
          <Switch checked={isCheckedLocal} onChange={handleChangeLocal} />
          <span>Local sellers</span>
        </Nav.Item>

        <Nav.Item className={styles.navItem}>
          <Switch checked={isCheckedOnline} onChange={handleChangeOnline} />
          <span>Online sellers</span>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default SwitchNav;
