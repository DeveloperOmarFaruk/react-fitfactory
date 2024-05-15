import React from "react";
import "./Classes.css";
import Bodybuilder from "../../Images/portrait-of-attractive-naked-bodybuilder.png";
import ClassesList from "../../Component/MultiComponents/ClassesList";
import Achivment from "../../Component/MultiComponents/Achivment";
import WorkOutShedule from "../../Component/MultiComponents/WorkOutShedule";

const Classes = () => {
  return (
    <>
      <div className="classes-container">
        <div className="classes-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="classes-header-col-image">
                  <img src={Bodybuilder} alt="Bodybuilder__Image" />
                  <div className="classes-header-col-image-centered">
                    <h1>Hard Rock</h1>
                    <h1>Shape Up</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="classes-header-right-div-title">
                  <h4>Pro Selected</h4>
                  <h2>OUR CLASSES</h2>
                </div>

                <div className="classes-header-right-div-text">
                  <p>
                    Fit Factory classes provide a structured and motivating way
                    to achieve fitness goals, whether it's weight loss, muscle
                    toning, stress relief, or overall health improvement. They
                    offer variety, social interaction.
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

      <div className="classes-container-div-gray">
        <ClassesList />
      </div>

      <div className="classes-container-div-image">
        <Achivment />
      </div>

      <div className="classes-container-div-gray">
        <WorkOutShedule />
      </div>
    </>
  );
};

export default Classes;
