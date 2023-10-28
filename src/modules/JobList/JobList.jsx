import React, { useEffect, useState } from "react";
import styles from "./JobList.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "react-bootstrap";
import Pagination from "react-paginate";
import { apiJobList } from "../../apis/jobAPI";
import "./Pagination.scss";
import MainNav from "./MainNav/MainNav";
import SwitchNav from "./SwitchNav/SwitchNav";
import { alertError } from "../../helpers/sweeAlert2";

function JobList() {
  const { keyword } = useParams();
  const navigate = useNavigate();

  // state theo dõi phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [jobs, setJobs] = useState(null);
  const [isKeyWord, setIsKeyWord] = useState(null);

  const handlePageChange = (data) => {
    setCurrentPage(data.selected + 1); // Cập nhật trang hiện tại với setPage
  };

  const handleSearch = async (keyword) => {
    try {
      const data = await apiJobList(currentPage, keyword);
      setJobs(data.data);
    } catch (error) {
      alertError(error.response.data.content);
    }
  };

  useEffect(() => {
    handleSearch(keyword);
  }, [keyword, currentPage]);

  return (
    <div id="JobList" className={styles.container}>
      <span className={styles.result}>
        Results for <b>"{keyword}"</b>
      </span>

      <div id="topBar" className={styles.dropdown}>
        <MainNav />
        <SwitchNav />
      </div>

      <div className="row mt-3 d-flex justify-content-center">
        {jobs?.map((job) => {
          return (
            <div
              key={job.id}
              className="col-sm-6 col-md-4 col-xl-3 d-flex justify-content-center"
            >
              <Card className={styles.card} style={{ width: "310px" }}>
                <Card.Img
                  className={styles.hinhAnh}
                  variant="top"
                  src={job.hinhAnh}
                />
                <Card.Body className={styles.body}>
                  <Card.Text
                    className={styles.moTa}
                    role="button"
                    onClick={() => navigate(`${job.id}`)}
                  >
                    {job.tenCongViec}
                  </Card.Text>
                  <span>
                    <i className="fa-solid fa-star"></i>
                    {job.saoCongViec}.0
                    <span className={styles.danhGia}> ({job.danhGia})</span>
                  </span>
                </Card.Body>
                <Card.Footer>
                  <div className={styles.footer}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                    </svg>
                    <span>
                      STARTING AT:
                      <b className={styles.giaTien}> ${job.giaTien}</b>
                    </span>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          );
        })}
      </div>

      <Pagination
        id="Pagination"
        className="react-pagination mt-3"
        previousLabel="<"
        nextLabel=">"
        pageCount={5} // Số trang hiển thị
        pageRangeDisplayed={3} // Số trang hiển thị trong phân trang
        marginPagesDisplayed={2} // Số lượng trang được hiển thị ở hai bên mỗi phần phân trang
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default JobList;
