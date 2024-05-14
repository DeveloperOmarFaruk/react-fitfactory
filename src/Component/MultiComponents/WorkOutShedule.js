import React from "react";
import "./MultiComponents.css";
import WorkoutImage from "../../Images/couple-doing-push-ups-with-kettlebells.jpg";
const WorkOutShedule = () => {
  return (
    <>
      <div className="section">
        <div className="row row-edit">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>Join Us</h4>
              <h2>WORKOUT SCHEDULES</h2>
            </div>

            <div className="common-header-right-image-div">
              <img src={WorkoutImage} alt="workout_image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="workout-shedule-list-div">
              <ul>
                <li>
                  <span>Monday</span>
                </li>

                <li>
                  <span>06:00 AM - 12:00 PM</span>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Tuesday</span>
                </li>

                <li>
                  <span>06:00 AM - 12:00 PM</span>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Wednesday</span>
                </li>

                <li>
                  <span>06:00 AM - 12:00 PM</span>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Thursday</span>
                </li>

                <li>
                  <span>06:00 AM - 12:00 PM</span>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Friday</span>
                </li>

                <li>
                  <span>06:00 AM - 12:00 PM</span>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Saturday</span>
                </li>

                <li>
                  <span>06:00 AM - 12:00 PM</span>
                </li>
              </ul>

              <ul>
                <li>
                  <span>Sunday</span>
                </li>

                <li>
                  <span>Take Rest</span>
                </li>
              </ul>
            </div>

            <div className="common-button-design mt-4">
              <button>Free Trail</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkOutShedule;
