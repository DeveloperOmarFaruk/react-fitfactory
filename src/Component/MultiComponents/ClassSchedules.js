import React from "react";
import "./MultiComponents.css";
import WorkoutImage from "../../Images/couple-doing-push-ups-with-kettlebells.jpg";
import useFunction from "../../Hooks/useFunction";

const ClassSchedules = (props) => {
  const { filterDetailsData } = props;
  const { handleContactPage } = useFunction();

  return (
    <>
      <div className="section">
        <div className="row row-edit">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>Class Schedules</h4>
              <h2>TRAINING SESSION</h2>
            </div>

            <div className="common-header-right-image-div">
              <img src={WorkoutImage} alt="workout_image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            {filterDetailsData.map((item) => (
              <div className="workout-shedule-list-div" key={item.id}>
                {item.shedule.map((data) => (
                  <ul key={data.id}>
                    <li>
                      <span>{data.day}</span>
                    </li>

                    <li>
                      <span>{data.time}</span>
                    </li>
                  </ul>
                ))}
              </div>
            ))}

            <div className="common-button-design mt-4">
              <button onClick={handleContactPage}>Free Trail</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassSchedules;
