import React from "react";
import "./MultiComponents.css";
import useFunction from "../../Hooks/useFunction";

const ProSelected = () => {
  const { filterData, handleClassesPage } = useFunction();

  return (
    <>
      <div className="section">
        <div className="common-header-vartical-div-title">
          <div className="middle-vertical-line-div">
            <div className="middle-vertical-line"></div>
          </div>
          <h4>Pro Selected</h4>
          <h2>OUR CLASSES</h2>
        </div>

        <div className="row">
          {filterData.map((item) => (
            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" key={item.id}>
              <div className="pro-selected-card">
                <img src={item.img} alt="class_image" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="common-button-design text-center">
          <button onClick={handleClassesPage}>More Classes</button>
        </div>
      </div>
    </>
  );
};

export default ProSelected;
