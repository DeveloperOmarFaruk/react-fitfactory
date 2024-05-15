import React from "react";
import "./ClassesDetails.css";
import WomenBodybuilder from "../../Images/young-woman-flexing-muscles-with-kettlebell-in-gym-10.png";
import ClassesOverview from "../../Component/MultiComponents/ClassesOverview";
import ClassesFeatures from "../../Component/MultiComponents/ClassesFeatures";
import ClassSchedules from "../../Component/MultiComponents/ClassSchedules";
import useFunction from "../../Hooks/useFunction";

const ClassesDetails = () => {
  const { filterDetailsData } = useFunction();

  return (
    <>
      <div className="classes-details-container">
        <div className="classes-details-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="classes-details-header-col-image">
                  <img src={WomenBodybuilder} alt="Bodybuilder__Image" />
                  <div className="classes-details-header-col-image-centered">
                    <h1>Class</h1>
                    <h1>Details</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="classes-details-header-right-div-title">
                  <h4>Featured Class</h4>

                  {filterDetailsData.map((item) => (
                    <h2 key={item.id}>{item.title}</h2>
                  ))}
                </div>

                <div className="classes-details-header-right-div-text">
                  {filterDetailsData.map((item) => (
                    <p key={item.id}>{item.description}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="classes-details-container-div-gray">
        <ClassesOverview filterDetailsData={filterDetailsData} />
      </div>

      <div className="classes-details-container-div-image">
        <ClassesFeatures />
      </div>

      <div className="classes-details-container-div-gray">
        <ClassSchedules filterDetailsData={filterDetailsData} />
      </div>
    </>
  );
};

export default ClassesDetails;
