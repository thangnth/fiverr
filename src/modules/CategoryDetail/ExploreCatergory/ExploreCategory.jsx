import React, { useEffect, useState } from "react";
import { getCATDetail } from "apis/jobAPI";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { alertError } from "helpers/sweetAlert2";

function ExploreCategory() {
  const { MaLoaiCongViec, tenLoaiCongViec } = useParams();

  const [jobCategoryDetail, setJobCategoryDetail] = useState(null);

  const handleCATDetail = async (MaLoaiCongViec) => {
    try {
      const data = await getCATDetail(MaLoaiCongViec);
      setJobCategoryDetail(data?.content[0]);
    } catch (error) {
      alertError(error.response.data.content);
    }
  };

  useEffect(() => {
    handleCATDetail(MaLoaiCongViec);
  }, [MaLoaiCongViec]);

  return (
    <div className={styles.container}>
      <h2>Explore {tenLoaiCongViec}</h2>
      <div className={`row ${styles.category}`}>
        {jobCategoryDetail?.dsNhomChiTietLoai.map((nhom) => {
          return (
            <div
              key={nhom.id}
              className={`${styles.nhom} col-12 col-sm-6 col-md-4 col-lg-3`}
            >
              <img src={nhom.hinhAnh} alt={nhom.tenNhom} />
              <h3>{nhom.tenNhom}</h3>
              {nhom?.dsChiTietLoai?.map((loai) => {
                return (
                  <div key={loai.id} className={styles.loai}>
                    <a className={styles.tenChiTiet} role="button" href="#">
                      {loai.tenChiTiet}
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreCategory;
