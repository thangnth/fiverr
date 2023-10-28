import React, { useEffect } from "react";
import styles from "./BannerCategory.module.scss";
import { useParams } from "react-router-dom";
import category from "./BannerCategoryData.json";

function BannerCategory() {
  const { MaLoaiCongViec, tenLoaiCongViec } = useParams();
  useEffect(() => {}, [MaLoaiCongViec, tenLoaiCongViec]);

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerBackground}>
          <img
            src={category[MaLoaiCongViec - 1] || category[6]}
            alt={tenLoaiCongViec}
          />
          <div className={styles.bannerContent}>
            <h1 className={styles.title}>{tenLoaiCongViec}</h1>
            <p>Designs to make you stand out.</p>
            <button>
              <span
                className="d-flex align-items-center me-2"
                aria-hidden="true"
              >
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentFill"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM5.742 11.778 11.655 8.3a.348.348 0 0 0 0-.6L5.742 4.222a.348.348 0 0 0-.525.3v6.956a.348.348 0 0 0 .525.3Z"
                    fill="white"
                  />
                </svg>
              </span>
              How Fiverr Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCategory;
