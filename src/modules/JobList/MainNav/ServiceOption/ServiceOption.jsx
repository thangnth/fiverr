import React, { useState } from "react";
import styles from "./styles.module.scss";
import platforms from "./platformData.json";
import tools from "./platformData.json";
import industries from "./platformData.json";
import services from "./platformData.json";
import DropDownFooter from "../DropDownFooter";
import { Nav } from "react-bootstrap";

function ServiceOption() {
  const [showMore, setShowMore] = useState(false);
  const displayedPlatforms = showMore ? platforms : platforms.slice(0, 4);
  const displayedTools = showMore ? tools : tools.slice(0, 4);
  const displayedIndustries = showMore ? industries : industries.slice(0, 4);
  const displayedServices = showMore ? services : services.slice(0, 4);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.serviceDropdown}>
      <div className={styles.serviceContainer}>
        <div className={styles.platFormType}>
          <b>Platform type</b>
          <div className={`${styles.checkBoxList} row`}>
            {displayedPlatforms.map((box, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.optionBox} form-group col-6`}
                >
                  <input
                    type="checkbox"
                    name={box.name}
                    defaultValue={box.value}
                    data-testid="checkbox-filter-instagram"
                  />

                  <label className="checkbox col-6" type="checkbox">
                    {box.name}
                  </label>
                  <span className={styles.number}>({box.number})</span>
                </div>
              );
            })}
          </div>
          {platforms.length > 4 && (
            <Nav.Link className="showMore" onClick={handleShowMore}>
              {showMore ? "Show less" : "Show more"}
            </Nav.Link>
          )}
        </div>
        <hr />

        <div className={styles.tools}>
          <b>Management tools</b>
          <div className={`${styles.checkBoxList} row`}>
            {displayedTools.map((box, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.optionBox} form-group col-6`}
                >
                  <input
                    type="checkbox"
                    name={box.name}
                    defaultValue={box.value}
                    data-testid="checkbox-filter-instagram"
                  />

                  <label className="checkbox col-6" type="checkbox">
                    {box.name}
                  </label>
                  <span className={styles.number}>({box.number})</span>
                </div>
              );
            })}
          </div>
          {tools.length > 4 && (
            <Nav.Link className="showMore" onClick={handleShowMore}>
              {showMore ? "Show less" : "Show more"}
            </Nav.Link>
          )}
        </div>
        <hr />

        <div className={styles.industries}>
          <b>Industry</b>
          <div className={`${styles.checkBoxList} row`}>
            {displayedIndustries.map((box, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.optionBox} form-group col-6`}
                >
                  <input
                    type="checkbox"
                    name={box.name}
                    defaultValue={box.value}
                    data-testid="checkbox-filter-instagram"
                  />

                  <label className="checkbox col-6" type="checkbox">
                    {box.name}
                  </label>
                  <span className={styles.number}>({box.number})</span>
                </div>
              );
            })}
          </div>
          {industries.length > 4 && (
            <Nav.Link className="showMore" onClick={handleShowMore}>
              {showMore ? "Show less" : "Show more"}
            </Nav.Link>
          )}
        </div>
        <hr />

        <div className={styles.services}>
          <b>Services includes</b>
          <div className={`${styles.checkBoxList} row`}>
            {displayedServices.map((box, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.optionBox} form-group col-6`}
                >
                  <input
                    type="checkbox"
                    name={box.name}
                    defaultValue={box.value}
                    data-testid="checkbox-filter-instagram"
                  />

                  <label className="checkbox col-6" type="checkbox">
                    {box.name}
                  </label>
                  <span className={styles.number}>({box.number})</span>
                </div>
              );
            })}
          </div>
          {services.length > 4 && (
            <Nav.Link className="showMore" onClick={handleShowMore}>
              {showMore ? "Show less" : "Show more"}
            </Nav.Link>
          )}
        </div>
      </div>
      <DropDownFooter />
    </div>
  );
}

export default ServiceOption;
