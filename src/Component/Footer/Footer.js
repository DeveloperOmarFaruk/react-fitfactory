import React from "react";
import "./Footer.css";
import "../MultiComponents/MultiComponents.css";
import logo from "../../Images/fitfactory_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer-container-div-bg-image">
        <div className="section">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 p-4">
              <div className="footer-container-div-logo">
                <img src={logo} alt="logo_image" />
                <p>
                  Gymnasium services often include personalized training
                  sessions tailored to individual fitness goals. Trainers guide
                  clients through exercises, provide motivation, and ensure
                  proper technique for optimal results.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 p-4">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 footer-links-div">
                  <h4>Quick Links</h4>
                  <Link to="/" className="footer-links">
                    <p>
                      {" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </p>
                    <p>Classes Details</p>
                  </Link>
                  <Link to="/" className="footer-links">
                    <p>
                      {" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </p>
                    <p>Trainer Profiles</p>
                  </Link>
                  <Link to="/" className="footer-links">
                    <p>
                      {" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </p>{" "}
                    <p>F.A.Q</p>
                  </Link>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 footer-links-div">
                  <h4>Public Sources</h4>
                  <Link to="/" className="footer-links">
                    <p>
                      {" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </p>
                    <p>Accessibility</p>
                  </Link>
                  <Link to="/" className="footer-links">
                    <p>
                      {" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </p>
                    <p>Privacy Policy</p>
                  </Link>
                  <Link to="/" className="footer-links">
                    <p>
                      {" "}
                      <i className="fa-solid fa-caret-right"></i>
                    </p>
                    <p>Site Search</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4 p-4">
              <div className="common-header-right-div-title">
                <h4>Find Us</h4>
                <h2>READY FOR WORKOUT</h2>
              </div>

              <div className="footer-adress-container">
                <div className="footer-adress-div">
                  <p>
                    <i className="fa-solid fa-phone"></i>
                  </p>
                  <p>Phone - +1 910-626-85255</p>
                </div>

                <div className="footer-adress-div">
                  <p>
                    <i className="fa-regular fa-envelope"></i>
                  </p>
                  <p>Email - info@fitfactory.com</p>
                </div>

                <div className="footer-adress-div">
                  <p>
                    <i className="fa-solid fa-location-dot"></i>
                  </p>
                  <p>Address - 123 Fifth Avenue, New York, NY 10160</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy-write-div">
        <p>
          Copyright <span>©</span> 2024 FitFactory Developed by{" "}
          <span>Developer.OmarFaruk</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
