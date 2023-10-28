import React, { useRef, useState } from "react";
import styles from "./SubHeader.module.scss";
import { Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SubHeader({ jobCategory }) {
  const navigate = useNavigate();

  // state activeCategory để lưu hạng mục đang active
  const [activeCategory, setActiveCategory] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (categoryId) => {
    // set activeCategory bằng categoryId khi hover vào một hạng mục
    setActiveCategory(categoryId);
    setDropdownVisible(true);
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    // reset activeCategory khi hover out
    timeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
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
        {jobCategory?.map((category) => {
          return (
            <NavDropdown
              key={category.id}
              className={`${styles.navLink}`}
              title={category.tenLoaiCongViec}
              // Thêm show={activeCategory === category.id} để hiển thị dropdown của hạng mục được hover vào
              show={dropdownVisible && activeCategory === category.id}
              onMouseEnter={() => handleMouseEnter(category.id)}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                navigate(`/${category.tenLoaiCongViec}/${category.id}`);
              }}
            >
              <div className={styles.container}>
                {category?.dsNhomChiTietLoai.length ? (
                  category.dsNhomChiTietLoai.map((nhom) => {
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
