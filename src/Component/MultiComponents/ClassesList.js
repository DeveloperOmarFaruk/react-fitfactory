import React from "react";
import "./MultiComponents.css";
import useFunction from "../../Hooks/useFunction";
import { useNavigate } from "react-router";

const ClassesList = () => {
  const { classesData } = useFunction();
  const navigate = useNavigate();

  const handleDetails = (e) => {
    navigate(`/classes-details/${e}`);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="section">
        <div className="common-header-vartical-div-title">
          <div className="middle-vertical-line-div">
            <div className="middle-vertical-line"></div>
          </div>
          <h4>Classes List</h4>
          <h2>CHOOSE YOURS</h2>
        </div>

        <div className="row">
          {classesData.map((item) => (
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mt-4"
              key={item.id}
            >
              <div className="class-list-card">
                <img src={item.img} alt="class_list_image" />
                <h4>{item.title}</h4>
                <p>{item.description}</p>

                <div className="common-button-design text-center">
                  <button
                    onClick={() => {
                      handleDetails(item.id);
                    }}
                  >
                    Choose
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClassesList;
