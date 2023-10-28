import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";
import "./styles.module.scss"
import { useLocation } from "react-router-dom";
import useWindowResize  from "hooks/useWindowResize";
import { alertError } from "helpers/sweetAlert2";
import { getJobCategogy } from "apis/jobAPI";

function Header() {
  const [y, setY] = useState(0);
  const [jobCAT, setJobCAT] = useState();

  const size = useWindowResize();
  const location = useLocation();
  const pathname = location.pathname;

  const condition = size.width >= 992 && (y >= 150 || pathname !== "/");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setY(scrollY);
  };

  const handleJobCAT = async () => {
    try {
      const data = await getJobCategogy();
      setJobCAT(data?.content);
    } catch (error) {
      alertError(error.response.data.content);
    }
  };

  useEffect(() => {
    handleJobCAT();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MainHeader jobCategory={jobCAT} />
      {condition && <SubHeader jobCategory={jobCategory} />}
    </>
  );
}

export default Header;
