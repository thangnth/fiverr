import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Modal } from "react-bootstrap";
import styles from "./styles.module.scss";
import "./styles.scss";

function SellingPoint() {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <div className={styles.spSection}>
      <div className={`${styles.spWrapper} container`}>
        <div className="row align-items-center">
          <div className={`col-12 col-lg-6 ${styles.spLeft}`}>
            <h2 className={styles.h2Title}>
              A whole world of freelance talent at your fingertips
            </h2>
            <ul>
              <li>
                <h6>
                  <span>
                    <i className="fa-regular fa-circle-check fa-lg" />
                  </span>
                  The best for every budget
                </h6>
                <p>
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </li>
              <li>
                <h6>
                  <span>
                    <i className="fa-regular fa-circle-check fa-lg" />
                  </span>
                  Quality work done quickly
                </h6>
                <p>
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
              </li>
              <li>
                <h6>
                  <span>
                    <i className="fa-regular fa-circle-check fa-lg" />
                  </span>
                  Protected payments, everytime
                </h6>
                <p>
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </li>
              <li>
                <h6>
                  <span>
                    <i className="fa-regular fa-circle-check fa-lg" />
                  </span>
                  24/7 support
                </h6>
                <p>
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </li>
            </ul>
          </div>
          <div className={`col-12 col-lg-6 ${styles.spRight}`}>
            <div
              className={styles.imgWrapper}
              onClick={() => setPlayVideo(true)}
            >
              <img
                alt="Video teaser image"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
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
          url="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
        />
      </Modal>
    </div>
  );
}

export default SellingPoint;
