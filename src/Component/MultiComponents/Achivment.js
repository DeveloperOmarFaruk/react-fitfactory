import React from "react";
import "./MultiComponents.css";
import CountUp from "react-countup";
import useFunction from "../../Hooks/useFunction";

const Achivment = () => {
  const { achivmentData } = useFunction();

  return (
    <>
      <div className="section">
        <div className="row row-edit">
          {achivmentData.map((item) => (
            <div
              className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mt-4"
              key={item.id}
            >
              <div className="achivment-card">
                <i className={item.icon_class}></i>
                <h2>
                  <CountUp delay={3} duration={8} start={0} end={item.number} />
                </h2>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achivment;
