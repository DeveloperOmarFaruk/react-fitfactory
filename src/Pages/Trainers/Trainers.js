import React from "react";
import "./Trainers.css";
import Bodybuilder from "../../Images/female-bodybuilder-training-at-the-gym.png";
import AwsomeFeatures from "../../Component/MultiComponents/AwsomeFeatures";
import ExpartTrainers from "../../Component/MultiComponents/ExpartTrainers";

const Trainers = () => {
  return (
    <>
      <div className="trainers-container">
        <div className="trainers-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="trainers-header-col-image">
                  <img src={Bodybuilder} alt="Bodybuilder__Image" />
                  <div className="trainers-header-col-image-centered">
                    <h1>elite</h1>
                    <h1>trainers</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="trainers-header-right-div-title">
                  <h4>Expert Team</h4>
                  <h2>OUR trainers</h2>
                </div>

                <div className="trainers-header-right-div-text">
                  <p>
                    Fit Factory trainers provide a structured and motivating way
                    to achieve fitness goals, whether it's weight loss, muscle
                    toning, stress relief, or overall health improvement. They
                    offer variety, social interaction, and the guidance of
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

      <div className="trainers-container-div-gray">
        <AwsomeFeatures />
      </div>

      <div className="trainer-container-div-image">
        <ExpartTrainers />
      </div>
    </>
  );
};

export default Trainers;
