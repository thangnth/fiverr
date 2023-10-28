import React from "react";
import styles from "./Categories.module.scss";

function Categories() {
  return (
    <div className={`${styles.categoriesContent} container`}>
      <h2 className={styles.h2Title}>You need it, we've got it</h2>
      <ul className={styles.categoriesList}>
        <li>
          <a href="/categories/graphics-design?source=hplo_cat_sec&pos=1">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg"
              alt="Graphics & Design"
              className="img-fluid"
            />
            Graphics &amp; Design
          </a>
        </li>
        <li>
          <a href="/categories/online-marketing?source=hplo_cat_sec&pos=2">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg"
              alt="Digital Marketing"
              className="img-fluid"
            />
            Digital Marketing
          </a>
        </li>
        <li>
          <a href="/categories/writing-translation?source=hplo_cat_sec&pos=3">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/writing-translation.a787f2f.svg"
              alt="Writing & Translation"
              className="img-fluid"
            />
            Writing &amp; Translation
          </a>
        </li>
        <li>
          <a href="/categories/video-animation?source=hplo_cat_sec&pos=4">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg"
              alt="Video & Animation"
              className="img-fluid"
            />
            Video &amp; Animation
          </a>
        </li>
        <li>
          <a href="/categories/music-audio?source=hplo_cat_sec&pos=5">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg"
              alt="Music & Audio"
              className="img-fluid"
            />
            Music &amp; Audio
          </a>
        </li>
        <li>
          <a href="/categories/programming-tech?source=hplo_cat_sec&pos=6">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg"
              alt="Programming & Tech"
              className="img-fluid"
            />
            Programming &amp; Tech
          </a>
        </li>
        <li>
          <a href="/categories/business?source=hplo_cat_sec&pos=7">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg"
              alt="Business"
              className="img-fluid"
            />
            Business
          </a>
        </li>
        <li>
          <a href="/categories/lifestyle?source=hplo_cat_sec&pos=8">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg"
              alt="Lifestyle"
              className="img-fluid"
            />
            Lifestyle
          </a>
        </li>
        <li>
          <a href="/categories/data?source=hplo_cat_sec&pos=9">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg"
              alt="Data"
              className="img-fluid"
            />
            Data
          </a>
        </li>
        <li>
          <a href="/categories/photography?source=hplo_cat_sec&pos=10">
            <img
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/photography.0cf5a3f.svg"
              alt="Photography"
              className="img-fluid"
            />
            Photography
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
