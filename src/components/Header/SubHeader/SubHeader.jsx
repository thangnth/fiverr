import React, { useRef, useState } from "react";
import styles from "./style.module.scss";
import { Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SubHeader({ jobCAT }) {
  const navigate = useNavigate();

  const [activeCAT, setActiveCAT] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (CATId) => {
    setActiveCAT(CATId);
    setDropdownVisible(true);
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    // reset activeCategory khi hover out
    timeoutRef.current = setTimeout(() => {
      setActiveCAT(null);
      setDropdownVisible(false);
    }, 500);
  };

  return (
    <>
      <Nav
        id="subHeader"
        className={`nav-justified ${styles.subHeader}`}
        defaultActiveKey="/home"
      >
        {jobCAT?.map((CAT) => {
          return (
            <NavDropdown
              key={CAT.id}
              className={`${styles.navLink}`}
              title={CAT.tenLoaiCongViec}
              show={dropdownVisible && activeCAT === CAT.id}
              onMouseEnter={() => handleMouseEnter(CAT.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                navigate(`/${CAT.tenLoaiCongViec}/${CAT.id}`);
              }}
            >
              <div className={styles.container}>
                {CAT?.dsNhomChiTietLoai.length ? (
                  CAT.dsNhomChiTietLoai.map((nhom) => {
                    return (
                      <div key={nhom.id} className={styles.nhom}>
                        <span>{nhom.tenNhom}</span>
                        <div className={styles.loai}>
                          {nhom.dsChiTietLoai.map((loai) => {
                            return (
                              <a key={loai.id} href="#">
                                {loai.tenChiTiet}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className={styles.none}>Updating...</p>
                )}
              </div>
            </NavDropdown>
          );
        })}
      </Nav>
    </>
  );
}

export default SubHeader;
