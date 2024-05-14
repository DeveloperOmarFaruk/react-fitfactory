import React from "react";
import "./MultiComponents.css";
import useFunction from "../../Hooks/useFunction";

const ClassesFeatures = () => {
  const { featureData } = useFunction();
  return (
    <>
      <div className="section">
        <div className="common-header-vartical-div-title">
          <div className="middle-vertical-line-div">
            <div className="middle-vertical-line"></div>
          </div>
          <h4>Class Highlight</h4>
          <h2>FEATURES</h2>
        </div>

        <div className="row mt-4">
          {featureData.map((item) => (
            <div
              className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4"
              key={item.id}
            >
              <div className="row why-choose-us-div">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                  <i className={item.icon_class}></i>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClassesFeatures;
