import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
import styles from "./Testimonials.module.scss";
import "./CustomSlick.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomModal.scss";

function Testimonials() {
  const [playVideo, setPlayVideo] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <div id="Testimonials" className={`${styles.tesSection} container`}>
      <Slider {...settings}>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-12 col-lg-6 col-xl-5 ${styles.tesLeft}`}>
              <div
                className={styles.imgWrapper}
                onClick={() => setPlayVideo(true)}
              >
                <img
                  alt="teaser video"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg"
                  className="img-fluid h-100"
                />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xl-7 ${styles.tesRight}`}>
              <h5>
                Tim and Dan Joo, Co-Founders
                <span>
                  <img
                    alt="logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/haerfest-logo-x2.934ab63.png"
                    className="img-fluid"
                  />
                </span>
              </h5>
              <blockquote>
                <i>
                  "When you want to create a business bigger than yourself, you
                  need a lot of help. That's what Fiverr does."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-12 col-lg-6 col-xl-5 ${styles.tesLeft}`}>
              <div
                className={styles.imgWrapper}
                onClick={() => setPlayVideo(true)}
              >
                <img
                  alt="teaser video"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xl-7 ${styles.tesRight}`}>
              <h5>
                Caitlin Tormey, Chief Commercial Officer
                <span>
                  <img
                    alt="logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/naadam-logo-x2.a79031d.png"
                    className="img-fluid"
                  />
                </span>
              </h5>
              <blockquote>
                <i>
                  "We've used Fiverr for Shopify web development, graphic
                  design, and backend web development. Working with Fiverr makes
                  my job a little easier every day."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-12 col-lg-6 col-xl-5 ${styles.tesLeft}`}>
              <div
                className={styles.imgWrapper}
                onClick={() => setPlayVideo(true)}
              >
                <img
                  alt="teaser video"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xl-7 ${styles.tesRight}`}>
              <h5>
                Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                <span>
                  <img
                    alt="logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lavender-logo-x2.3fff9e7.png"
                    className="img-fluid"
                  />
                </span>
              </h5>
              <blockquote>
                <i>
                  "We used Fiverr for SEO, our logo, website, copy, animated
                  videos — literally everything. It was like working with a
                  human right next to you versus being across the world."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className={`col-12 col-lg-6 col-xl-5 ${styles.tesLeft}`}>
              <div
                className={styles.imgWrapper}
                onClick={() => setPlayVideo(true)}
              >
                <img
                  alt="teaser video"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className={`col-12 col-lg-6 col-xl-7 ${styles.tesRight}`}>
              <h5>
                Kay Kim, Co-Founder
                <span>
                  <img
                    alt="logo"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/rooted-logo-x2.7da3bc9.png"
                    className="img-fluid"
                  />
                </span>
              </h5>
              <blockquote>
                <i>
                  "It's extremely exciting that Fiverr has freelancers from all
                  over the world — it broadens the talent pool. One of the best
                  things about Fiverr is that while we're sleeping, someone's
                  working."
                </i>
              </blockquote>
            </div>
          </div>
        </div>
      </Slider>
      <Modal
        show={playVideo}
        onHide={() => setPlayVideo(false)}
        size="xl"
        centered
      >
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/bsncmkwya3nectkensun"
        />
      </Modal>
    </div>
  );
}

export default Testimonials;
