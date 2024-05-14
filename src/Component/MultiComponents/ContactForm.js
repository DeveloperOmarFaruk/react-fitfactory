import React from "react";
import "./MultiComponents.css";
import "../../Component/Footer/Footer.css";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <>
      <div className="section">
        <div className="row row-edit">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div>
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

            <div className="contact-form-social-div">
              <div className="common-header-right-div-title">
                <h4>Find Us</h4>
                <h2>ON THE SOCIALS</h2>
              </div>

              <div className="footer-adress-container">
                <div className="contact-form-icon-div">
                  <Link to="/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa-brands fa-skype"></i>
                  </Link>
                  <Link to="/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>

                  <Link to="/">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="contact-form-div">
              <form>
                <input type="text" placeholder="Your Name" />
                <br />
                <input type="email" placeholder="Your Email" />
                <br />
                <textarea
                  type="text"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>

                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
