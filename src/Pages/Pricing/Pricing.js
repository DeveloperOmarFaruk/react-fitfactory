import React from "react";
import "./Pricing.css";
import Bodybuilder from "../../Images/muscular-bodybuilder-guy-doing-exercises-with-dumb.png";
import Achivment from "../../Component/MultiComponents/Achivment";
import ChoosePlanDaynamic from "../../Component/MultiComponents/ChoosePlanDaynamic";

const Pricing = () => {
  return (
    <>
      <div className="pricing-container">
        <div className="pricing-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="pricing-header-col-image">
                  <img src={Bodybuilder} alt="Bodybuilder__Image" />
                  <div className="pricing-header-col-image-centered">
                    <h1>Ready For</h1>
                    <h1>Sweating</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="pricing-header-right-div-title">
                  <h4>Join Now</h4>
                  <h2>PRICING & PLANS</h2>
                </div>

                <div className="pricing-header-right-div-text">
                  <p>
                    Fit Factory pricing provide a structured and motivating way
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

      <div className="pricing-container-div-gray">
        <ChoosePlanDaynamic />
      </div>

      <div className="pricing-container-div-image">
        <Achivment />
      </div>
    </>
  );
};

export default Pricing;
