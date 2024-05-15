import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import logo from "../../Images/fitfactory_logo.png";
import useAuth from "../../Hooks/useAuth";
import useFunction from "../../Hooks/useFunction";

const Navbar = () => {
  const { userInfo, handleSignOut, formData } = useAuth();
  const {
    handleHomePage,
    handleAboutPage,
    handleClassesPage,
    handleReviewPage,
    handlePricingPage,
    handleTrainersPage,
    handleContactPage,
    handleProfilePage,
    handleLogInPage,
  } = useFunction();

  $(window).scroll(function () {
    if ($(document).scrollTop() < 1) {
      $(".header").removeClass("fixed");
      $(".header").removeClass("active");
    } else if ($(document).scrollTop() > 40) {
      $(".header").removeClass("fixed");
      $(".header").addClass("active");
    } else {
      $(".header").addClass("fixed");
    }
  });

  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div className="logo" onClick={handleHomePage}>
              <img src={logo} alt="logo" />
            </div>

            <input type="checkbox" id="click" />
            <label for="click" className="menu-btn">
              <i className="fas fa-bars"></i>
            </label>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className="nav-links"
                  activeClass="active"
                  onClick={handleHomePage}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about-us"
                  className="nav-links"
                  onClick={handleAboutPage}
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <div className="dropdown">
                  <NavLink className="nav-links" to="#">
                    Pages
                    <i className="fa-solid fa-angle-down down-arrow"></i>
                  </NavLink>
                  <div className="dropdown-content">
                    <NavLink to="/classes" onClick={handleClassesPage}>
                      Classes
                    </NavLink>
                    <NavLink to="/trainers" onClick={handleTrainersPage}>
                      Trainers
                    </NavLink>
                    <NavLink to="/review" onClick={handleReviewPage}>
                      Review
                    </NavLink>
                    <NavLink to="/pricing" onClick={handlePricingPage}>
                      Pricing
                    </NavLink>
                  </div>
                </div>
              </li>

              <li>
                <NavLink
                  to="/contact-us"
                  className="nav-links"
                  onClick={handleContactPage}
                >
                  Contact Us
                </NavLink>
              </li>

              {userInfo.email || formData.email ? (
                <>
                  <li>
                    <p className="nav-links" onClick={handleSignOut}>
                      logout
                    </p>
                  </li>

                  <li>
                    <NavLink
                      to="/user-profile"
                      className="nav-links"
                      onClick={handleProfilePage}
                    >
                      <i className="fa-solid fa-user"></i>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className="nav-links"
                      onClick={handleLogInPage}
                    >
                      Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
