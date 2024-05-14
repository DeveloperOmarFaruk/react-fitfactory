import React from "react";
import "./ContactUs.css";
import Bodybuilder from "../../Images/rear-three-quarter-view-of-beautiful-bodybuilder.png";
import ContactForm from "../../Component/MultiComponents/ContactForm";
import ContactGoogleMap from "../../Component/MultiComponents/ContactGoogleMap";

const ContactUs = () => {
  return (
    <>
      <div className="contact-us-container">
        <div className="contact-us-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="contact-us-header-col-image">
                  <img src={Bodybuilder} alt="Bodybuilder__Image" />
                  <div className="contact-us-header-col-image-centered">
                    <h1>Get the</h1>
                    <h1>Shape</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="contact-us-header-right-div-title">
                  <h4>Contact</h4>
                  <h2>GET IN TOUCH</h2>
                </div>

                <div className="contact-us-header-right-div-text">
                  <p>
                    Fit Factory contact-us provide a structured and motivating
                    way to achieve fitness goals, whether it's weight loss,
                    muscle toning, stress relief, or overall health improvement.
                    They offer variety, social interaction, and the guidance of
                    trained instructors to help individuals stay committed and
                    get the most out of their workouts.
                  </p>

                  <p>
                    Our instructor-led workouts in a group setting, targeting
                    various fitness goals such as cardio, strength, flexibility,
                    and mind-body connection. From high-energy cardio sessions
                    to calming yoga practices, there's something for everyone,
                    fostering motivation, camaraderie, and improved overall
                    health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us-container-div-gray">
        <ContactForm />
      </div>

      <div>
        <ContactGoogleMap />
      </div>
    </>
  );
};

export default ContactUs;
