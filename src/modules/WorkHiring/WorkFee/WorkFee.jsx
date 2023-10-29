import React, { useState } from "react";
import {
  alertError2,
  alertRequireLogin,
  alertSuccess2,
} from "helpers/sweetAlert2";
import { useNavigate } from "react-router-dom";
import { postWork } from "apis/workHiringAPI";
import { Nav } from "react-bootstrap";
import styles from "./styles.module.scss";


function WorkFee ({ info, user, MaCongViec }) {
  const navigate = useNavigate();
  const [isActiveTab, setIsActiveTab] = useState("Standard");

  const handleTab1 = () => {
    setIsActiveTab("Basic");
  };
  const handleTab2 = () => {
    setIsActiveTab("Standard");
  };
  const handleTab3 = () => {
    setIsActiveTab("Premium");
  };

  const handleContinue = async () => {
    if (!user.user) {
      localStorage.setItem("page", window.location.href); 
      const result = await alertRequireLogin();
      if (result.isConfirmed) {
        navigate("/login");
        if (result.isConfirmed) {
          navigate("/login");
        }
      }
    } else {
      localStorage.removeItem("page"); 
      const currentTime = new Date().toLocaleString();
      const payload = {
        id: 0,
        maCongViec: MaCongViec,
        maNguoiThue: user?.user?.user?.id,
        ngayThue: currentTime,
        hoanThanh: true,
      };
      try {
        const data = await postWork(payload);
        if (data) {
          alertSuccess2("Job hired successfully!");
        }
      } catch (error) {
        alertError2("Failed to hire job");
      }
    }
  };

  return (
    <div id="jobCharge" className={styles.serviceCost}>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link
            className={isActiveTab === "Basic" && "active"}
            eventKey="link-1"
            onClick={handleTab1}
          >
            Basic
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={isActiveTab === "Standard" && "active"}
            eventKey="link-2"
            onClick={handleTab2}
          >
            Standard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={isActiveTab === "Premium" && "active"}
            eventKey="link-3"
            onClick={handleTab3}
          >
            Premium
          </Nav.Link>
        </Nav.Item>
        {info?.map((item) => {
          return (
            <div key={item.id} className={styles.packageContent}>
              <div className={styles.standard}>
                <b>{isActiveTab}</b>
                {isActiveTab === "Basic" && <b>{1 * item.congViec.giaTien}$</b>}
                {isActiveTab === "Standard" && (
                  <b>{1.5 * item.congViec.giaTien}$</b>
                )}
                {isActiveTab === "Premium" && (
                  <b>{2 * item.congViec.giaTien}$</b>
                )}
              </div>
              <p>Create a simple web application for business</p>
              <div className={styles.addtionalInfo}>
                <div className="delivery-wrappern">
                  <span
                    className="glAQDp5 delivery-icon"
                    aria-hidden="true"
                    style={{ width: "16px", height: "16px" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                      <path d="M9 4H7v5h5V7H9V4z"></path>
                    </svg>
                  </span>
                  <b className="delivery">30 Days Delivery</b>
                </div>
                <div className="revisions-wrapper">
                  <span
                    className="glAQDp5 revisions-icon"
                    aria-hidden="true"
                    style={{ width: "16px", height: "16px" }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                      <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                    </svg>
                  </span>
                  <b className="revisions">Unlimited Revisions</b>
                </div>
              </div>
              <b>What's included?</b>
              <p className={styles.description}>{item.congViec.moTaNgan}</p>
              <div className={styles.continue}>
                <button
                  className="btn btn-success d-flex justify-content-center"
                  onClick={handleContinue}
                >
                  Continue (${isActiveTab === "Basic" && item.congViec.giaTien}
                  {isActiveTab === "Standard" && 1.5 * item.congViec.giaTien}
                  {isActiveTab === "Premium" && 2 * item.congViec.giaTien})
                </button>
                <a href="#">Compare packages</a>
              </div>
            </div>
          );
        })}
      </Nav>
    </div>
  );
}

export default WorkFee;
