import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader/MainHeader";
import SubHeader from "./SubHeader/SubHeader";
import "./HeaderCustom.scss";
import { useLocation } from "react-router-dom";
import useWindowResize from "../../helpers/useWindowResize";
import { apiJobCategory } from "../../apis/jobAPI";
import { alertError } from "../../helpers/sweeAlert2";

function Header() {
  const [y, setY] = useState(0);
  const [jobCategory, setJobCategory] = useState();

  const size = useWindowResize();
  const location = useLocation();
  const pathname = location.pathname;

  const condition = size.width >= 992 && (y >= 150 || pathname !== "/");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setY(scrollY);
  };

  const getJobCategory = async () => {
    try {
      const data = await apiJobCategory();
      setJobCategory(data?.content);
    } catch (error) {
      alertError(error.response.data.content);
    }
  };

  useEffect(() => {
    getJobCategory();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <MainHeader jobCategory={jobCategory} />
      {condition && <SubHeader jobCategory={jobCategory} />}
    </>
  );
}

export default Header;
