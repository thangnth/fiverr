import React, { useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import styles from "./Login.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { login, setRememberMe } from "../../../slices/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

const PASSWORD_FORMAT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const schema = yup.object({
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      PASSWORD_FORMAT,
      "Password must have at least 8 characters including uppercase letters, lowercase letters and numbers"
    ),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const { user, isLoading, error, rememberMe } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (values) => {
    dispatch(login(values));
    reset();
  };

  const onError = (errors) => {
    console.log(errors);
  };

  if (localStorage.getItem("page") && user)
    return (window.location.href = localStorage.getItem("page"));

  if (!localStorage.getItem("page") && user) return <Navigate to="/" />;

  return (
    <MDBContainer className="mx-4 p-5 bg-white rounded-7">
      <MDBRow className="justify-content-between">
        <MDBCol col="10" lg="7" className="d-none d-lg-block align-self-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="phone"
          />
        </MDBCol>

        <MDBCol col="4" lg="5">
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <h2 className="mb-5 text-center">Login</h2>

            <div className="mb-3">
              <MDBInput
                label="Email address *"
                type="email"
                size="lg"
                {...register("email")}
              />
              {errors.email && (
                <p className="mt-1 text-danger">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-3">
              <div className="position-relative">
                <MDBInput
                  wrapperClass="col-10"
                  size="lg"
                  label="Password *"
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                />
                <div
                  className={`${styles.togglePassword} 
                                ${showPassword ? "visible" : ""}`}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="mt-1 text-danger">{errors.password.message}</p>
              )}
            </div>

            {error && <p className="text-danger">Wrong email/password</p>}

            <div className="d-sm-flex justify-content-between mb-3">
              <MDBCheckbox
                label="Remember me"
                id="flexCheckDefault"
                checked={rememberMe}
                onChange={(e) => dispatch(setRememberMe(e.target.checked))}
              />

              <p>
                Don't have an account?
                <a
                  onClick={() => navigate("/register")}
                  className="ms-2 text-success text-decoration-underline"
                >
                  Register here
                </a>
              </p>
            </div>

            <MDBBtn
              className={`${styles.loginBtn} mb-2 w-100`}
              size="lg"
              disabled={isLoading}
              color="success"
            >
              Log in
            </MDBBtn>
          </form>

          <div className={`${styles.divider} d-flex align-items-center my-4`}>
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn
            className={`mb-3 w-100 ${styles.socialBtn}`}
            size="lg"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com"
            target="_blank"
          >
            <MDBIcon fab icon="facebook-f" className="mx-2" />
            Continue with facebook
          </MDBBtn>

          <MDBBtn
            className={`w-100 ${styles.socialBtn}`}
            size="lg"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com"
            target="_blank"
          >
            <MDBIcon fab icon="twitter" className="mx-2" />
            Continue with twitter
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
