import React, { useState } from "react";
import styles from "./Banner.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.scss";
import { useNavigate } from "react-router-dom";
import useWindowResize from "../../../helpers/useWindowResize";

function Banner() {
  const navigate = useNavigate();
  const [values, setValues] = useState(null);
  const size = useWindowResize();

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    fade: true,
    adaptiveHeight: true,
  };

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/jobList/${values?.keyword}`);
    }
  };

  return (
    <div id="Banner" className={styles.background}>
      {size.width >= 992 && (
        <Slider className={styles.slider} {...settings}>
          <div className={styles.valentina}>
            <div className={styles.info}>
              <div className={styles.star}>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>

              <p>
                Valentina, <b>AI Artist</b>
              </p>
            </div>
          </div>

          <div className={styles.andrea}>
            <div className={styles.info}>
              <p>
                Andrea, <b>Fashion Designer</b>
              </p>
            </div>
          </div>

          <div className={styles.moon}>
            <div className={styles.info}>
              <div className={styles.star}>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <p>
                Moon, <b>Marketing Expert</b>
              </p>
            </div>
          </div>

          <div className={styles.rikita}>
            <div className={styles.info}>
              <p>
                Ritika, <b>Shoemaker & Designer</b>
              </p>
            </div>
          </div>

          <div className={styles.zach}>
            <div className={styles.info}>
              <div className={styles.star}>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <p>
                Zach, <b>Bar Owner</b>
              </p>
            </div>
          </div>

          <div className={styles.gabrielle}>
            <div className={styles.info}>
              <p>
                Gabrielle, <b>Video Editor</b>
              </p>
            </div>
          </div>
        </Slider>
      )}
      <div className={styles.container}>
        <div className={styles.services}>
          <h1 className="font-domaine">
            <span>
              Find the right <i>freelance service</i>, right away
            </span>
          </h1>
          <div className={`${styles.serviceSearch} row`}>
            <input
              className={`${styles.serviceInput} form-control d-lg-none d-block col-12`}
              type="search"
              placeholder="Search for any services..."
              name="keyword"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
            />
            <a
              className={`${styles.submitButton}  d-lg-none d-block col-12`}
              type="submit"
              onClick={() => {
                navigate(`/jobList/${values?.keyword}`);
              }}
            >
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z" />
              </svg>
            </a>
            {size.width >= 992 && (
              <form className="input-group">
                <input
                  className={`${styles.serviceInput} form-control d-block`}
                  type="search"
                  placeholder="Search for any services..."
                  name="keyword"
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                />
                <a
                  className={`${styles.submitButton} text-center`}
                  type="submit"
                  onClick={() => {
                    navigate(`/jobList/${values?.keyword}`);
                  }}
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                  >
                    <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z" />
                  </svg>
                </a>
              </form>
            )}
          </div>

          <div className={`${styles.popular} d-none d-lg-block`}>
            <span>Popular: </span>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
