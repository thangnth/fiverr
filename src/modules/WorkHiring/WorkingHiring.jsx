import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getJobDetail } from "apis/jobAPI";
import './styles.scss'
import WorkDetail from "./WorkDetail";
import WorkFee from "./WorkFee";
import { alertError2 } from "helpers/sweetAlert2";
import styles from "./styles.module.scss"
import useWindowResize from "hooks/useWindowResize";

function WorkHiring () {
  const { keyword, MaCongViec } = useParams();
  const user = useSelector((state) => state?.user);

  const [detail, setDetail] = useState();
  const size = useWindowResize();

  const handleDetail = async () => {
    try {
      const data = await getJobDetail(MaCongViec);
      setDetail(data?.content);
    } catch (error) {
      alertError2("Failed to get service details");
    }
  };

  useEffect(() => {
    handleDetail();
  }, [MaCongViec, keyword]);

  return (
    <div id="jobDetail" className={styles.container}>
      <WorkDetail info={detail} user={user} MaCongViec={MaCongViec} />
      {size.width > 992 && (
        <WorkFee info={detail} user={user} MaCongViec={MaCongViec} />
      )}
    </div>
  );
}
export default WorkHiring;
