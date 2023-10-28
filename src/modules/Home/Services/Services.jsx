import React from "react";
import styles from "./Services.module.scss";
import Slider from "react-slick";
import useWindowResize from "../../../helpers/useWindowResize";
import data from "./ServicesData.json";

function Services() {
  const size = useWindowResize();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: true,
    swipeToSlide: true,
  };
  return (
    <div id="Services" className={styles.background}>
      <div className={styles.container}>
        <h2>Popular services</h2>

        <Slider
          {...settings}
          className="d-flex justify-content-center d-none d-xl-block"
        >
          <div className="d-flex justify-content-center slider-package">
            {data.slice(0, 5).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {data.slice(5, 10).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {data.slice(6, 11).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
        </Slider>

        <Slider
          {...settings}
          className="d-flex justify-content-center 	d-none d-lg-block d-xl-none"
        >
          <div className="d-flex justify-content-center slider-package">
            {data.slice(0, 4).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {data.slice(4, 8).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {data.slice(8, 11).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
        </Slider>

        <Slider
          {...settings}
          className="d-flex justify-content-center d-none d-md-block d-lg-none"
        >
          <div className="d-flex justify-content-center slider-package">
            {data.slice(0, 3).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {data.slice(3, 6).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {data.slice(6, 9).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {data.slice(9, 11).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
        </Slider>

        <Slider
          {...settings}
          className="d-flex justify-content-center d-none d-sm-block d-md-none"
        >
          <div className="d-flex justify-content-center slider-package">
            {data.slice(0, 2).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {data.slice(2, 4).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {data.slice(4, 6).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {data.slice(6, 8).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {data.slice(8, 10).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-center slider-package">
            {data.slice(10, 11).map((item, index) => {
              return (
                <div key={item.id} className={styles.services}>
                  <a href={item.link}>
                    <h4>
                      <small>{item.action}</small>
                      {item.title}
                    </h4>
                  </a>
                  <img
                    alt={item.title}
                    src={item.image}
                    data-uw-rm-ima-original="ai artists"
                  />
                </div>
              );
            })}
          </div>
        </Slider>

        {size.width < 576 && (
          <Slider {...settings} className="d-flex justify-content-center">
            <div className="d-flex justify-content-center slider-package">
              {data.slice(0, 1).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {data.slice(1, 2).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {data.slice(2, 3).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {data.slice(3, 4).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {data.slice(4, 5).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {data.slice(5, 6).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {data.slice(6, 7).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {data.slice(7, 8).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {data.slice(8, 9).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {data.slice(9, 10).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center slider-package">
              {data.slice(10, 11).map((item, index) => {
                return (
                  <div key={item.id} className={styles.services}>
                    <a href={item.link}>
                      <h4>
                        <small>{item.action}</small>
                        {item.title}
                      </h4>
                    </a>
                    <img
                      alt={item.title}
                      src={item.image}
                      data-uw-rm-ima-original="ai artists"
                    />
                  </div>
                );
              })}
            </div>
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Services;
