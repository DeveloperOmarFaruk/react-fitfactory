import React from "react";
import "./MultiComponents.css";
import useFunction from "../../Hooks/useFunction";

const ChoosePlan = () => {
  const { priceDataMonthly, handleContactPage } = useFunction();

  return (
    <>
      <div className="section">
        <div className="common-header-vartical-div-title">
          <div className="middle-vertical-line-div">
            <div className="middle-vertical-line"></div>
          </div>
          <h4>Start The Process</h4>
          <h2>CHOOSE YOUR PLAN</h2>
        </div>

        <div className="row mt-4 mb-4">
          {priceDataMonthly.map((item) => (
            <div
              className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-4"
              key={item.id}
            >
              <div className="choose-plan-card">
                <h3>{item.title}</h3>
                <h6>Coach and Exercise</h6>
                <h1>${item.price}</h1>
                <h6>per {item.category}</h6>
                <h6
                  style={{ margin: "2.5rem auto 0rem auto", padding: "0rem" }}
                >
                  Training Session Includes
                </h6>
                <span
                  style={{ margin: "0rem auto 2rem auto", padding: "0rem" }}
                >
                  ------------------------
                </span>
                <p className="mt-4">60 Minute Sessions </p>
                <p>{item.training}</p>
                <p>Get 1-on-1 training</p>

                <div className="common-button-design text-center mt-4">
                  <button onClick={handleContactPage}>Choose</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChoosePlan;
