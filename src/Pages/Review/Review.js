import React from "react";
import "./Review.css";
import Bodybuilder from "../../Images/handsome-brutal-bodybuilder-posing-with-dumbells.png";
import OurAwards from "../../Component/MultiComponents/OurAwards";
import ReviewStories from "../../Component/MultiComponents/ReviewStories";

const Review = () => {
  return (
    <>
      <div className="review-container">
        <div className="review-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="review-header-col-image">
                  <img src={Bodybuilder} alt="Bodybuilder__Image" />
                  <div className="review-header-col-image-centered">
                    <h1>Happy</h1>
                    <h1>Clients</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="review-header-right-div-title">
                  <h4>Testimonials</h4>
                  <h2>WHAT CLIENTS SAY</h2>
                </div>

                <div className="review-header-right-div-text">
                  <p>
                    Fit Factory review provide a structured and motivating way
                    to achieve fitness goals, whether it's weight loss, muscle
                    toning, stress relief, or overall health improvement. They
                    offer variety.
                  </p>

                  <p>
                    Our instructor-led workouts in a group setting, targeting
                    various fitness goals such as cardio, strength, flexibility,
                    and mind-body connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="review-container-div-gray">
        <ReviewStories />
      </div>

      <div className="review-container-div-image">
        <OurAwards />
      </div>
    </>
  );
};

export default Review;
