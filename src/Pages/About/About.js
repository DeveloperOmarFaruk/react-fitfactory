import React from "react";
import "./About.css";
import WomenBodybuilder from "../../Images/young-woman-posing-and-showing-muscles-in-gym-about.png";
import Overview from "../../Component/MultiComponents/Overview";
import MemberStories from "../../Component/MultiComponents/MemberStories";
import OurAwards from "../../Component/MultiComponents/OurAwards";

const About = () => {
  return (
    <>
      <div className="about-us-container">
        <div className="about-us-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="about-us-header-col-image">
                  <img src={WomenBodybuilder} alt="Bodybuilder__Image" />
                  <div className="about-us-header-col-image-centered">
                    <h1>Who</h1>
                    <h1>We Are</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="about-us-header-right-div-title">
                  <h4>About Us</h4>
                  <h2>FIT FACTORY</h2>
                </div>

                <div className="about-us-header-right-div-text">
                  <p>
                    Fit Factory is a space dedicated to physical fitness and
                    exercise, equipped with various machines, weights, and
                    amenities to support workouts. It offers a range of services
                    such as equipment usage, classes, personal training, and
                    sometimes additional facilities like pools or courts for
                    sports activities. Gyms aim to promote health, strength, and
                    overall well-being through regular exercise routines
                    tailored to individual needs and preferences.
                  </p>

                  <p>
                    Beyond equipment and classes, gyms often feature additional
                    amenities aimed at enhancing the overall fitness experience.
                    These may include locker rooms with showers and changing
                    areas, sauna or steam rooms for relaxation and post-workout
                    recovery, and sometimes even swimming pools, basketball
                    courts, or indoor tracks for additional exercise options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-container-div-gray">
        <Overview />
      </div>

      <div className="about-container-div-image">
        <MemberStories />
      </div>

      <div className="about-container-div-gray">
        <OurAwards />
      </div>
    </>
  );
};

export default About;
