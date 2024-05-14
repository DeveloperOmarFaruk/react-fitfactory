import React from "react";
import "./Login.css";
import Bodybuilder from "../../Images/portrait-of-attractive-naked-bodybuilder.png";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { handleGoogleSignIn, setEmail, setPassword, handleLogIn } = useAuth();

  return (
    <>
      <div className="login-container">
        <div className="banner-div">
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
                    Duis fermentum libero quis commodo blandit. Etiam urna
                    ligula, volutpat non eros non, suscipit lacinia orci. Donec
                    eu facilisis lorem, eget laoreet mi. Vivamus laoreet, urna
                    eget laoreet ultrices, dolor risus ornare nisl, ut lacinia
                    ipsum odio id mi.
                  </p>

                  <p>
                    Pellentesque eget eros at tortor luctus porttitor. Donec
                    scelerisque dolor nec eros aliquam, sed faucibus augue
                    dapibus.
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
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
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

                <button onClick={handleLogIn} className=" login-btn mt-4 mb-4">
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
                  <button
                    className=" login-btn mt-4"
                    onClick={handleGoogleSignIn}
                  >
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