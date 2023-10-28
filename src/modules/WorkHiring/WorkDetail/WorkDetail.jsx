import React, { useEffect, useState } from "react";
import { Collapse, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Rate } from "antd";
import {Avatar} from "react-avatar";
import dayjs from "dayjs";
import {
  alertError2,
  alertRequireLogin,
  alertSuccess2,
} from "helpers/sweetAlert2"
import { apiPostComment, apiSellerComment } from "apis/commentAPI";
import WorkFee from "../WorkFee";
import useWindowResize from "hooks/useWindowResize";
import styles from "./ServiceDetail.module.scss";

function WorkDetail({ info, user, MaCongViec }) {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  const [comments, setComments] = useState();

  // This variable plays as a dependency in re-rendering component
  const [comment, setComment] = useState("");
  const size = useWindowResize();

  //Chuỗi regex để validation
  const COMMENT = /(\S+\s){9,}\S+/;

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const avatarSize = 35;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  const getSellerComment = async () => {
    try {
      const data = await apiSellerComment(MaCongViec);
      setComments(data.content);
    } catch (error) {
      alertError2("Failed to get comments");
    }
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    setComment(value);
  };

  // Định nghĩa các xác thực cho thuộc tính
  const schema = yup.object({
    noiDung: yup
      .string()
      .required("*Comment is required!")
      .matches(COMMENT, "*Comment must have at least 10 words!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      noiDung: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    if (!user.user) {
      localStorage.setItem("page", window.location.href); // Lưu đường dẫn, nội dung và đánh giá ở trang trước khi chuyển sang trang login
      localStorage.setItem("noiDung", values.noiDung);
      localStorage.setItem("saoBinhLuan", rating);
      const result = await alertRequireLogin();
      if (result.isConfirmed) {
        navigate("/login");
      }
    }
    if (user.user) {
      localStorage.removeItem("page"); // Xóa đường dẫn trang trước đó yêu cầu đăng nhập
      const currentTime = new Date().toLocaleString();
      const payload = {
        id: 1003,
        maCongViec: +MaCongViec,
        maNguoiBinhLuan: +user?.user?.user?.id,
        ngayBinhLuan: currentTime,
        noiDung: values.noiDung || localStorage.getItem("noiDung"),
        saoBinhLuan: rating || localStorage.getItem("saoBinhLuan"),
      };
      try {
        const data = await apiPostComment(payload);
        if (data.statusCode === 200 || data.statusCode === 201) {
          alertSuccess2("Your comment has been posted successfully!");
          setComment("");
          setRating(0);
          reset({
            noiDung: "",
          });
          localStorage.removeItem("noiDung");
          localStorage.removeItem("saoBinhLuan");
        }
      } catch (error) {
        alertError2("Failed to post your comment");
      }
    }
  };

  const onError = (errors) => {
    alertError2(errors.noiDung.message);
  };

  // hàm chọn số sao đánh giá ở phần bình luận
  const handleRatingChange = (rating) => {
    setRating(rating);
  };

  useEffect(() => {
    getSellerComment();
  }, [MaCongViec, comment]);

  return (
    <div id="ServiceDetail" className={styles.container}>
      <div className={styles.serviceDetail}>
        {info?.map((item) => {
          return (
            <div key={item.id}>
              <Nav className="d-flex align-items-center">
                <Nav.Link>
                  <span>{item.tenLoaiCongViec}</span>
                </Nav.Link>
                <i className="fa-solid fa-chevron-right"></i>

                <Nav.Link>
                  <span>{item.tenNhomChiTietLoai}</span>
                </Nav.Link>
                <i className="fa-solid fa-chevron-right"></i>

                <Nav.Link>
                  <span>{item.tenChiTietLoai}</span>
                </Nav.Link>
              </Nav>
              <h3>{item.congViec.tenCongViec}</h3>
              <div className={styles.sellerInfo}>
                <div className={styles.sellerBrief}>
                  <img src={item.avatar} alt={item.tenNguoiTao} />
                  <span className={styles.name}>{item.tenNguoiTao}</span>
                  <span className={styles.topRated}>Top seller</span>
                  <span>|</span>
                  <span>{renderStars(item.congViec.saoCongViec)}</span>
                  <span>|</span>
                  <span>{item.congViec.danhGia}</span>
                </div>
                <div className={styles.sellerExperience}>
                  <img src={item.congViec.hinhAnh} alt="" />
                </div>
              </div>
              {size.width <= 992 && (
                <WorkFee info={info} user={user} MaCongViec={MaCongViec} />
              )}
              <div className={styles.offer}>
                <b>About This Gig</b>
                <p>Top Rated Seller With all positive reviews</p>
                <p>{item.congViec.moTa}</p>
                <b>Things I offer</b>
                <b style={{ display: "block" }}>Web Development:</b>
                <ul>
                  <li>HTML</li>
                  <li>CSS / SCSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>And more</li>
                </ul>
                <b>Web Apps (Newest Versions):</b>
                <ul>
                  <li>React JS developer</li>
                  <li>Angular</li>
                  <li>Vue JS</li>
                </ul>
                <b>Backend (Server Programming):</b>
                <ul>
                  <li>NodeJS</li>
                  <li>PHP</li>
                  <li>Laravel developer</li>
                  <li>Python</li>
                </ul>
                <p className={styles.benefit}>
                  <strong>
                    <u>Why Choose Me?</u>
                  </strong>
                </p>
                <ul>
                  <li>Extensive Experience in Web Development</li>
                  <li>Premium Customer Support</li>
                  <li>Client Satisfaction</li>
                  <li>Around The Clock Availability</li>
                </ul>
              </div>
              <div className={styles.aboutSeller}>
                <b>About The Seller</b>
                <div className={styles.extendSeller}>
                  <img src={item.avatar} alt={item.tenNguoiTao} />
                  <div className={styles.contactSeller}>
                    <b>{item.tenNguoiTao}</b>
                    <em>Web Developer</em>
                    <p>{renderStars(item.congViec.saoCongViec)}</p>
                    <button className="btn btn-primary">Contact Me</button>
                  </div>
                </div>
              </div>
              <div className={styles.FAQ}>
                <h4>FAQ</h4>
                <NavLink onClick={() => setOpen1(!open1)} aria-expanded={open1}>
                  How do revisions work?
                  <span
                    className={
                      open1 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
                    }
                  ></span>
                </NavLink>
                <Collapse in={open1}>
                  <div id="example-collapse-text">
                    If you like to change anything in the integration to make
                    the final result exactly as you envision it, revisions are
                    your friend. Simply put, with revisions, you will be able to
                    request adjustments. Best chance you will already get
                    exactly what you need straight away.
                  </div>
                </Collapse>

                <NavLink onClick={() => setOpen2(!open2)} aria-expanded={open2}>
                  What makes you a Fiverr Pro seller?
                  <span
                    className={
                      open2 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
                    }
                  ></span>
                </NavLink>
                <Collapse in={open2}>
                  <div id="example-collapse-text">
                    Fiverr Pro sellers are meticulously evaluated for elite
                    performance, only 4% out of Fiverr Pro applications (which
                    are relatively few) are accepted. The following is true: My
                    work is at the highest standard, Premium service, satisfied
                    clients, peak level communication skills, Available 24/7.
                  </div>
                </Collapse>

                <NavLink
                  className={styles.thirdFAQ}
                  onClick={() => setOpen3(!open3)}
                  aria-expanded={open3}
                >
                  Can I purchase a robust development, even if it's not in
                  available packages?
                  <span
                    className={
                      open3 ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
                    }
                  ></span>
                </NavLink>
                <Collapse in={open3}>
                  <div id="example-collapse-text">
                    Absolutely yes. I am here to create your digital vision,
                    please let me know what you need, and I will create a custom
                    offer for you, tailored to your needs.
                  </div>
                </Collapse>
              </div>
              <div id="RatingBreakdown" className={styles.ratingBreakdown}>
                <div className={styles.reviewers}>
                  <h4>Reviewers</h4>
                  <span className="me-2">
                    {item.congViec.danhGia} reviews for this Gig
                  </span>
                  {renderStars(5)}
                  <span className={styles.soSao}>5</span>
                </div>
                <div className={`${styles.rating} row`}>
                  <div className="col-12 col-sm-6">
                    <table className="">
                      <tbody>
                        <tr>
                          <td>
                            <button className={styles.topNotch}>5 Stars</button>
                          </td>
                          <td className={styles.ratingBarContainer}>
                            <div className={styles.ratingBarGroup}>
                              <div className={styles.ratingBar1}></div>
                            </div>
                          </td>
                          <td className={styles.topNotch}>
                            ({item.congViec.danhGia})
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <button>4 Stars</button>
                          </td>
                          <td className={styles.ratingBarContainer}>
                            <div className={styles.ratingBarGroup}>
                              <div className={styles.ratingBar2}>
                                <span></span>
                              </div>
                            </div>
                          </td>
                          <td>(0)</td>
                        </tr>
                        <tr>
                          <td>
                            <button>3 Stars</button>
                          </td>
                          <td className={styles.ratingBarContainer}>
                            <div className={styles.ratingBarGroup}>
                              <div className={styles.ratingBar2}>
                                <span></span>
                              </div>
                            </div>
                          </td>
                          <td>(0)</td>
                        </tr>
                        <tr>
                          <td>
                            <button>2 Stars</button>
                          </td>
                          <td className={styles.ratingBarContainer}>
                            <div className={styles.ratingBarGroup}>
                              <div className={styles.ratingBar2}>
                                <span></span>
                              </div>
                            </div>
                          </td>
                          <td>(0)</td>
                        </tr>
                        <tr>
                          <td>
                            <button>1 Stars</button>
                          </td>
                          <td className={styles.ratingBarContainer}>
                            <div className={styles.ratingBarGroup}>
                              <div className={styles.ratingBar2}>
                                <span></span>
                              </div>
                            </div>
                          </td>
                          <td>(0)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className={styles.breakdown}>
                      <h6>Rating Breakdown</h6>
                      <div className={styles.ratingCategory}>
                        <span>Seller communication level</span>
                        <div className={styles.starGroup}>
                          <i className="fa-solid fa-star"></i>
                          <span>5</span>
                        </div>
                      </div>
                      <div className={styles.ratingCategory}>
                        <span>Recommend to a friend</span>
                        <div className={styles.starGroup}>
                          <i className="fa-solid fa-star"></i>
                          <span>5</span>
                        </div>
                      </div>
                      <div className={styles.ratingCategory}>
                        <span>Seller communication level</span>
                        <div className={styles.starGroup}>
                          <i className="fa-solid fa-star"></i>
                          <span>4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="SellerComment" className={styles.sellerComment}>
                {comments?.map((item, index) => {
                  return (
                    <div key={index} className={styles.commentGroup}>
                      {item.avatar ? (
                        <div className={styles.commentorAvatar}>
                          <img src={item.avatar} alt={item.tenNguoiBinhLuan} />
                        </div>
                      ) : (
                        <div className={styles.commentorAvatar}>
                          <button className="btn btn-success">
                            <span>
                              {item.tenNguoiBinhLuan.charAt(0).toUpperCase()}
                            </span>
                          </button>
                        </div>
                      )}
                      <div className={styles.comment}>
                        <h6 className="d-inline">{item.tenNguoiBinhLuan}</h6>
                        <span className="mx-2">|</span>
                        <span>
                          {dayjs(item.ngayBinhLuan).format("DD/MM/YYYY h:mm")}
                        </span>
                        <p className={styles.saoBinhLuan}>
                          {renderStars(item.saoBinhLuan)} {item.saoBinhLuan}
                        </p>
                        <p>{item.noiDung}</p>
                        <b className={styles.helpful}>Helpful?</b>
                        <div className={styles.reactGroup}>
                          <span
                            className="fa-solid fa-thumbs-up"
                            role="button"
                          ></span>
                          <span
                            className="fa-solid fa-thumbs-down"
                            role="button"
                          ></span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div id="PostComment" className={styles.postComment}>
                <div className={styles.postGroup}>
                  <div className={styles.avatarCommentor}>
                    {user?.user?.user ? (
                      <img
                        src={user?.user?.user?.avatar}
                        alt={user?.user?.user?.name}
                      />
                    ) : (
                      <img
                        src="https://m.media-amazon.com/images/I/71zTE0u2iXL._AC_UX679_.jpg"
                        alt="anonymous"
                      />
                    )}
                  </div>
                  <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        id="feedbackCustomer"
                        cols="80"
                        rows="7"
                        placeholder="Leave your feedback to help our seller enhance their services"
                        value={comment || localStorage.getItem("noiDung")}
                        {...register("noiDung")}
                        onChange={handleChange} //not really need to update the value of this input
                      ></textarea>
                      {errors.noiDung && (
                        <p className="mt-1 text-danger">
                          {errors.noiDung.message}
                        </p>
                      )}
                    </div>

                    <div className={styles.addComment}>
                      <div className="form-group">
                        <label className="me-2" htmlFor="">
                          Rate:
                        </label>
                        <Rate
                          value={rating || localStorage.getItem("saoBinhLuan")}
                          onChange={handleRatingChange}
                        />
                      </div>

                      <p>
                        You've rated:
                        {rating || localStorage.getItem("saoBinhLuan")} (stars)
                      </p>
                      <button className="btn btn-primary">Add Comment</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkDetail;
