import React from "react";
import "./Error.css";
import "../Login/Login.css";
import Bodybuilder from "../../Images/female-bodybuilder-training-at-the-gym40.png";

const Error = () => {
  return (
    <>
      <div className="error-404-container">
        <div className="error-404-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="error-404-header-col-image">
                  <img src={Bodybuilder} alt="Bodybuilder__Image" />
                  <div className="error-404-header-col-image-centered">
                    <h1>code</h1>
                    <h1>404</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="error-404-header-right-div-title">
                  <h4>404</h4>
                  <h2>PAGE NOT FOUND</h2>
                </div>

                <div className="error-404-header-right-div-text">
                  <p>
                    A 404 page not found message is a response code that
                    indicates the server couldn't find the requested webpage. A
                    short description might explain that the page the user is
                    trying to access doesn't exist or has been moved, and it
                    could include a friendly message encouraging the user to
                    return to the homepage or navigate elsewhere on the site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="error-404-container-div-gray">
        <div className="section">
          <div className="row row-edit mt-4">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
              <div className="common-header-right-div-title">
                <h4>Hmmm...</h4>
                <h2>THAT PAGE DOES NOT EXIST</h2>
              </div>

              <h5
                style={{
                  paddingLeft: "20px",
                  color: "white",
                  fontWeight: "300",
                }}
              >
                Why not return to the home page and continue browsing?
              </h5>
              <div className="common-button-design mt-4">
                <button>Back Home</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
              <div className="common-header-right-div-title">
                <h4>Our Newsletter</h4>
                <h2>SUBSCRIBE NOW</h2>
              </div>

              <div className="error-404-subscribe-div">
                <input type="email" placeholder="Your Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
