import React, { useEffect, useState } from "react";
import "./MultiComponents.css";
import axios from "axios";

const ProSelected = () => {
  const [classData, setClassData] = useState([]);
  const [error, setError] = useState("");

  // Data Load
  const URL = `https://developeromarfaruk.github.io/react-fitfactory-api/fitfactoryData.json`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setClassData(res.data[0].classes);
      })
      .catch((error) => {
        setError(error);
      });
  }, [URL]);

  // Data Filter
  const filterData = classData.filter(
    (item) => item.id === 201 || item.id === 401 || item.id === 501
  );

  console.log(classData);

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
          <button>More Classes</button>
        </div>
      </div>
    </>
  );
};

export default ProSelected;
