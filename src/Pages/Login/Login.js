import React, { useState } from "react";
import "./Login.css";
import Bodybuilder from "../../Images/portrait-of-attractive-naked-bodybuilder.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const {
    handleGoogleSignIn,
    email,
    password,
    formData,
    setEmail,
    setPassword,
    handleLogIn,
    setUserInfo,
    setError,
    setLoading,
    setFormData,
  } = useAuth();

  const [aleart, setAleart] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const windowScroll = () => {
    window.scrollTo(0, 0);
    navigate(location?.state ? location.state : "/home");
  };

  const handleSignIn = () => {
    setLoading(true);
    handleGoogleSignIn()
      .then((result) => {
        setUserInfo(result.user);
        windowScroll();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleFormLogIn = (e) => {
    e.preventDefault();

    handleLogIn()
      .then((userCredential) => {
        const user = userCredential.user;
        setFormData(user);
        windowScroll();
      })
      .catch((error) => {
        setError(error.message);
      });

    if (formData.email !== email || formData.password !== password) {
      return setAleart("Your email or password is wrong!");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="login-header-col-image">
                  <img src={Bodybuilder} alt="Bodybuilder__Image" />
                  <div className="login-header-col-image-centered">
                    <h1>Gate the</h1>
                    <h1>Shape</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="login-header-right-div-title">
                  <h4>Login</h4>
                  <h2>GET IN TOUCH</h2>
                </div>

                <div className="login-header-right-div-text">
                  <p>
                    Welcome to our gymnasium's user login platform, designed to
                    enhance your fitness journey! Our intuitive login system
                    provides members with seamless access to personalized
                    workout plans, class schedules, and exclusive member
                    resources.
                  </p>

                  <p>
                    Access your fitness journey with ease! Our gym's user login
                    lets you track progress, book classes, and connect with our
                    community securely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-form-container">
        <div className="section">
          <div className="row row-edit">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
              <h1 className="text-white mt-4 mb-4">Please Login</h1>
              <div>
                <div className="mb-3">
                  <label className="form-label text-white mb-3">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white mb-3">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="mb-3 text-danger">
                  {aleart ? <p>{aleart}</p> : <p></p>}
                </div>

                <button
                  onClick={handleFormLogIn}
                  className=" login-btn mt-4 mb-4"
                >
                  LogIn
                </button>
                <br />

                <Link
                  to="/register"
                  className="mt-4 text-white"
                  style={{
                    fontWeight: "100",
                    textDecoration: "none",
                    letterSpacing: "1px",
                  }}
                >
                  Are you register?
                </Link>
                <div className="text-white text-center mt-4">
                  -------------------- 0r ---------------------
                </div>

                <div className="text-center">
                  <button className=" login-btn mt-4" onClick={handleSignIn}>
                    {" "}
                    <i className="fa-brands fa-google-plus-g"></i> Google Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
