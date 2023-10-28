import React, { useEffect, useState } from "react";
import styles from  "./styles.module.scss"
import "../styles.module.scss"
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Dropdown,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import useWindowResize from "hooks/useWindowResize";
import { useDispatch, useSelector } from "react-redux";
import {
  alertError,
  alertSuccess,
  warningLogout,
} from "helpers/sweetAlert2";
import {logOut} from "slices/userSlice"

function MainHeader({ jobCAT }) {
  const { user } = useSelector((state) => state?.user);

  const [values, setValues] = useState(null);
  const [y, setY] = useState(0);

  const location = useLocation();
  const pathname = location.pathname;
  const size = useWindowResize();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate("/");
  };

  const handleLogout = () => {
    warningLogout()
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(logOut());
          localStorage.removeItem("user");
          sessionStorage.removeItem("user");
          alertSuccess("Logged out successfully");
        }
      })
      .catch((error) => {
        alertError(error.response.data.content);
      });
  };

  const condition =
    (pathname === "/" && size.width >= 576 && y > 10) ||
    (pathname === "/" && size.width < 576) ||
    pathname !== "/";

  const condition1 = pathname === "/" && size.width < 576;

  const condition2 =
    (pathname === "/" && size.width >= 576 && y >= 50) ||
    (pathname !== "/" && size.width >= 576);

  const condition3 = pathname !== "/" && size.width < 576;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setY(scrollY);
  };

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues({ ...values, [name]: value });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      navigate(`/jobList/${values?.keyword}`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="mainHeader"
      style={
        condition
          ? {
              backgroundColor: "#fff",
              color: "black",
            }
          : { backgroundColor: "transparent", color: "#fff !important" }
      }
      className={condition1 ? styles.header1 : styles.header}
    >
      <Navbar className={styles.headerContainer} expand="lg">
        <Container>
          <Navbar.Offcanvas
            className="d-lg-none"
            id="offcanvasNavbar-expand-lg"
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
          >
            <Offcanvas.Body>
              <Nav
                id="sideBar"
                className={`justify-content-end flex-grow-1 ${styles.sideBar}`}
              >
                {user ? (
                  <>
                    <Nav.Link href="/login" className="userAccount">
                      <button className="btn btn-success">
                        {user?.user?.avatar ? (
                          <img
                            src={user?.user?.avatar}
                            alt={user?.user?.name}
                          />
                        ) : (
                          <span>
                            {user?.user?.name.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </button>

                      <span className="userName">{user?.user?.name}</span>
                    </Nav.Link>
                    <Nav.Link href="/login">
                      <span className="fa-solid fa-user me-2"></span>Profile
                    </Nav.Link>
                    <Nav.Link onClick={handleLogout}>
                      <span className="fa-solid fa-right-from-bracket me-2"></span>
                      Logout
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link className="joinFiverr btn" href="/register">
                      Join Fiverr
                    </Nav.Link>
                    <Nav.Link href="/login">Sign in</Nav.Link>
                  </>
                )}

                <Nav.Link href="/">
                  <NavDropdown
                    title="Browse Categories"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    {jobCAT?.map((CAT) => {
                      return (
                        <NavDropdown.Item
                          key={CAT.id}
                          onClick={() =>
                            navigate(
                              `/${CAT.tenLoaiCongViec}/${CAT.id}`
                            )
                          }
                        >
                          {CAT?.tenLoaiCongViec}
                        </NavDropdown.Item>
                      );
                    })}
                  </NavDropdown>
                </Nav.Link>
                <Nav.Link href="#">Explore</Nav.Link>
                <Nav.Link className="fiverBusiness" href="#">
                  Fiverr Business
                </Nav.Link>
                <h6>General</h6>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#">English</Nav.Link>
                <Nav.Link href="#">US$ USD</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Toggle
            className={
              condition
                ? "toggleIcon1 fa-solid fa-bars d-sm-none"
                : "toggleIcon2 fa-solid fa-bars d-sm-none"
            }
            aria-controls="offcanvasNavbar-expand-lg"
          />
          <Navbar.Brand className="d-sm-none" role="button">
            <svg
              width={89}
              height={27}
              viewBox="0 0 89 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleClick}
            >
              <g fill={condition ? "#404145" : "#fff"}>
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z" />
              </g>
              <g fill="#1dbf73">
                <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z" />
              </g>
            </svg>
          </Navbar.Brand>
          {size.width >= 576 && (
            <div
              id="fiverrLogo"
              className="fiverrLogo d-flex align-items-center"
            >
              <Navbar.Toggle
                aria-controls="offcanvasNavbar-expand-lg"
                className={
                  condition
                    ? "toggleIcon1 fa-solid fa-bars"
                    : "toggleIcon2 fa-solid fa-bars"
                }
              />
              <Navbar.Brand role="button" onClick={handleClick}>
                <svg
                  width={89}
                  height={27}
                  viewBox="0 0 89 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleClick}
                >
                  <g fill={condition ? "#404145" : "#fff"}>
                    <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z" />
                  </g>
                  <g fill="#1dbf73">
                    <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z" />
                  </g>
                </svg>
              </Navbar.Brand>
            </div>
          )}
          <div className={condition2 ? "null" : "d-none"}>
            <div className={styles.searchPackage}>
              <form className="input-group">
                <input
                  type="search"
                  className="form-control long-placeholder"
                  autoComplete="off"
                  name="keyword"
                  onChange={handleChange}
                  onKeyPress={handleKeyPress}
                  placeholder={
                    size.width > 768
                      ? "What service are you looking for today?"
                      : "Find Services"
                  }
                />
                <a
                  className={styles.submitButton}
                  aria-label="search"
                  data-uw-rm-empty-ctrl
                  onClick={() => navigate(`/jobList/${values?.keyword}`)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                  >
                    <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z" />
                  </svg>
                </a>
              </form>
            </div>
          </div>
          <div
            id="fiverrNav"
            className={`${
              condition ? styles.nav : styles.nav1
            } navbar-expand-md d-flex flex-row`}
          >
            <Nav
              id="navbar"
              className={`justify-content-end align-items-center flex-grow-1`}
            >
              <Nav.Link
                href="#action1"
                className={`active ${styles.FiverrBusiness}`}
              >
                Fiverr Business
              </Nav.Link>
              <Nav.Link href="#">Explore</Nav.Link>
              <Nav.Link href="#">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill={condition ? "#404145" : "#fff"}
                >
                  <path
                    className="d-flex align-items-center justify-content-center"
                    d="M9 1C4.58875 1 1 4.58875 1 9C1 13.4113 4.58875 17 9 17C13.4113 17 17 13.4113 17 9C17 4.58875 13.4113 1 9 1ZM8.53125 4.92676C7.81812 4.89612 7.11218 4.7959 6.43811 4.63293C6.54578 4.37781 6.6626 4.13281 6.78857 3.90063C7.30542 2.94824 7.93994 2.27991 8.53125 2.03784V4.92676ZM8.53125 5.86499V8.53125H5.60339C5.64465 7.4906 5.82202 6.45752 6.11536 5.51782C6.8927 5.71362 7.70874 5.83215 8.53125 5.86499ZM8.53125 9.46875V12.135C7.70874 12.1678 6.8927 12.2864 6.11536 12.4822C5.82202 11.5425 5.64465 10.5094 5.60339 9.46875H8.53125ZM8.53125 13.0732V15.9622C7.93994 15.7201 7.30542 15.0518 6.78857 14.0994C6.6626 13.8672 6.54578 13.6222 6.43811 13.3671C7.11218 13.2041 7.81799 13.1039 8.53125 13.0732ZM9.46875 13.0732C10.1819 13.1039 10.8878 13.2041 11.5619 13.3671C11.4542 13.6222 11.3374 13.8672 11.2114 14.0994C10.6946 15.0518 10.0601 15.7201 9.46875 15.9622V13.0732ZM9.46875 12.135V9.46875H12.3966C12.3553 10.5094 12.178 11.5425 11.8846 12.4822C11.1073 12.2864 10.2913 12.1678 9.46875 12.135ZM9.46875 8.53125V5.86499C10.2913 5.83215 11.1073 5.71362 11.8846 5.51782C12.178 6.45752 12.3553 7.4906 12.3966 8.53125H9.46875ZM9.46875 4.92676V2.03784C10.0601 2.27991 10.6946 2.94824 11.2114 3.90063C11.3374 4.13281 11.4542 4.37781 11.5619 4.63293C10.8878 4.7959 10.1819 4.89612 9.46875 4.92676ZM12.0354 3.45349C11.8007 3.02087 11.5457 2.63953 11.2769 2.31421C12.2141 2.63428 13.0631 3.14636 13.7771 3.8031C13.3699 4.02124 12.931 4.21069 12.4694 4.36902C12.3384 4.0509 12.1936 3.74487 12.0354 3.45349ZM5.9646 3.45349C5.8064 3.74487 5.66162 4.0509 5.53064 4.36902C5.06897 4.21069 4.63013 4.02112 4.2229 3.8031C4.93689 3.14636 5.78589 2.63428 6.72314 2.31421C6.45435 2.63953 6.19946 3.02075 5.9646 3.45349ZM5.2135 5.25012C4.89355 6.27368 4.70544 7.38953 4.66492 8.53125H1.95349C2.05383 7.00769 2.63892 5.61438 3.5564 4.50525C4.06555 4.79724 4.62317 5.047 5.2135 5.25012ZM4.66492 9.46875C4.70544 10.6106 4.89355 11.7263 5.2135 12.7499C4.62317 12.953 4.06555 13.2028 3.5564 13.4948C2.63892 12.3856 2.05383 10.9923 1.95349 9.46875H4.66492ZM5.53064 13.631C5.66162 13.9491 5.8064 14.2551 5.9646 14.5465C6.19946 14.9791 6.45435 15.3605 6.72314 15.6858C5.78589 15.3657 4.93689 14.8536 4.22302 14.1969C4.63 13.9789 5.06897 13.7893 5.53064 13.631ZM12.0354 14.5465C12.1936 14.2551 12.3384 13.9491 12.4694 13.631C12.931 13.7893 13.3699 13.9789 13.7771 14.1969C13.0631 14.8536 12.2141 15.3657 11.2769 15.6858C11.5457 15.3605 11.8005 14.9792 12.0354 14.5465ZM12.7865 12.7499C13.1064 11.7263 13.2946 10.6105 13.3351 9.46875H16.0465C15.9462 10.9923 15.3611 12.3856 14.4436 13.4948C13.9344 13.2028 13.3768 12.953 12.7865 12.7499ZM13.3351 8.53125C13.2946 7.3894 13.1064 6.27368 12.7865 5.25012C13.3768 5.047 13.9344 4.79724 14.4436 4.50525C15.3611 5.61438 15.9462 7.00769 16.0465 8.53125H13.3351Z"
                  />
                </svg>
                English
              </Nav.Link>
              <Nav.Link href="#">Become a Seller</Nav.Link>
              {user ? (
                <Dropdown id="UserAccount" className={styles.account}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {user?.user?.avatar ? (
                      <img src={user?.user?.avatar} alt={user?.user?.name} />
                    ) : (
                      <span>{user?.user?.name.charAt(0).toUpperCase()}</span>
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.avatar}>
                    <Dropdown.Item href={`/users/${user?.user?.name}`}>
                      <span className="fa-solid fa-user me-2"></span>Profile
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item role="button" onClick={handleLogout}>
                      <span className="fa-solid fa-right-from-bracket me-2"></span>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <>
                  <Nav.Link className={styles.signIn} href="/login">
                    Sign in
                  </Nav.Link>
                  <Nav.Link
                    style={{ display: "inline" }}
                    className={styles.joinButton}
                    href="/register"
                  >
                    Join
                  </Nav.Link>
                </>
              )}
            </Nav>
          </div>
        </Container>
        {condition3 && (
          <div
            className={`${styles.searchPackage} d-flex justify-content-center text-center`}
          >
            <form className="input-group">
              <input
                type="search"
                className="form-control long-placeholder"
                placeholder={
                  size.width > 768
                    ? "What service are you looking for today?"
                    : "Find Services"
                }
                name="keyword"
                onChange={handleChange}
                onKeyPress={handleKeyPress}
              />
              <a
                className={styles.submitButton}
                aria-label="search"
                data-uw-rm-empty-ctrl
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                >
                  <path d="m15.89 14.653-3.793-3.794a.37.37 0 0 0-.266-.109h-.412A6.499 6.499 0 0 0 6.5 0C2.91 0 0 2.91 0 6.5a6.499 6.499 0 0 0 10.75 4.919v.412c0 .1.04.194.11.266l3.793 3.794a.375.375 0 0 0 .531 0l.707-.707a.375.375 0 0 0 0-.53ZM6.5 11.5c-2.763 0-5-2.238-5-5 0-2.763 2.237-5 5-5 2.762 0 5 2.237 5 5 0 2.762-2.238 5-5 5Z" />
                </svg>
              </a>
            </form>
          </div>
        )}
      </Navbar>
    </div>
  );
}

export default MainHeader;
