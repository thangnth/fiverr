import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Nav } from "react-bootstrap";
import DropDownFooter from "../DropDownFooter";
import levelData from "./levelData.json";
import speakData from "./speakData.json";
import liveInData from "./liveInData.json";

function SellerDetail() {
  const levels = levelData;
  const speaks = speakData;
  const liveIn = liveInData;

  const [showMore, setShowMore] = useState(false);
  const displayedLevels = showMore ? levels : levels.slice(0, 4);
  const displayedSpeaks = showMore ? speaks : speaks.slice(0, 4);
  const displayedLiveIn = showMore ? liveIn : liveIn.slice(0, 4);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.serviceDropdown}>
      <div className={styles.serviceContainer}>
        <div className={styles.level}>
          <b>Seller level</b>
          <div className={`${styles.checkBoxList} row`}>
            {displayedLevels.map((box, index) => {
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
          {levels.length > 4 && (
            <Nav.Link className="showMore" onClick={handleShowMore}>
              {showMore ? "Show less" : "Show more"}
            </Nav.Link>
          )}
        </div>
        <hr />

        <div className={styles.speaks}>
          <b>Seller speaks</b>
          <div className={`${styles.checkBoxList} row`}>
            {displayedSpeaks.map((box, index) => {
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
          {speaks.length > 4 && (
            <Nav.Link className="showMore" onClick={handleShowMore}>
              {showMore ? "Show less" : "Show more"}
            </Nav.Link>
          )}
        </div>
        <hr />

        <div className={styles.livesIn}>
          <b>Seller lives in</b>
          <div className={`${styles.checkBoxList} row`}>
            {displayedLiveIn.map((box, index) => {
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
          {liveIn.length > 4 && (
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

export default SellerDetail;
