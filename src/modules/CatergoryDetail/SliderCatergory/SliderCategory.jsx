import React, { useEffect } from "react";
import styles from "./SliderCategory.module.scss";
import { useParams } from "react-router-dom";
import popular from "./SliderCategoryData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCategoryCustom.scss";
import Slider from "react-slick";
import useWindowResize from "../../../helpers/useWindowResize";

function SliderCategory() {
  const { MaLoaiCongViec, tenLoaiCongViec } = useParams();

  const size = useWindowResize();
  const defaultSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
  };

  const mdSettings = { ...defaultSettings, slidesToShow: 4 };

  const smSettings = { ...defaultSettings, slidesToShow: 3, slidesToScroll: 3 };

  const xsSettings = { ...defaultSettings, slidesToShow: 1, slidesToScroll: 3 };

  useEffect(() => {}, [tenLoaiCongViec, MaLoaiCongViec]);

  return (
    <div id="SliderCategory" className={styles.container}>
      <h2>Most popular in {tenLoaiCongViec}</h2>
      {size.width >= 1200 && (
        <Slider className="d-flex justify-content-center" {...defaultSettings}>
          {popular?.map((item, index) => {
            return (
              <div key={index} className={styles.slideGroup}>
                <div className={styles.slide}>
                  <a
                    className="d-flex justify-content-between align-items-center"
                    href="#"
                  >
                    <img src={item.logo} alt={item.jobTitle} />
                    <span>{item.jobTitle}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
      {size.width > 768 && size.width < 1200 && (
        <Slider className="d-flex justify-content-center" {...mdSettings}>
          {popular?.map((item, index) => {
            return (
              <div key={index} className={styles.slideGroup}>
                <div className={styles.slide}>
                  <a
                    className="d-flex justify-content-between align-items-center"
                    href="#"
                  >
                    <img src={item.logo} alt={item.jobTitle} />
                    <span>{item.jobTitle}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
      {size.width > 576 && size.width < 768 && (
        <Slider className="d-flex justify-content-center" {...smSettings}>
          {popular?.map((item, index) => {
            return (
              <div key={index} className={styles.slideGroup}>
                <div className={styles.slide}>
                  <a
                    className="d-flex justify-content-between align-items-center"
                    href="#"
                  >
                    <img src={item.logo} alt={item.jobTitle} />
                    <span>{item.jobTitle}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </Slider>
      )}
      {size.width <= 576 && (
        <Slider {...xsSettings}>
          <div className="d-flex flex-column">
            {popular?.slice(0, 3).map((item, index) => {
              return (
                <div key={index} className={styles.slideGroup}>
                  <div className={styles.slide}>
                    <a
                      className="d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      <img src={item.logo} alt={item.jobTitle} />
                      <span>{item.jobTitle}</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="d-flex flex-column">
            {popular?.slice(3, 6).map((item, index) => {
              return (
                <div key={index} className={styles.slideGroup}>
                  <div className={styles.slide}>
                    <a
                      className="d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      <img src={item.logo} alt={item.jobTitle} />
                      <span>{item.jobTitle}</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="d-flex flex-column">
            {popular?.slice(6, 9).map((item, index) => {
              return (
                <div key={index} className={styles.slideGroup}>
                  <div className={styles.slide}>
                    <a
                      className="d-flex justify-content-between align-items-center"
                      href="#"
                    >
                      <img src={item.logo} alt={item.jobTitle} />
                      <span>{item.jobTitle}</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Slider>
      )}
    </div>
  );
}

export default SliderCategory;
