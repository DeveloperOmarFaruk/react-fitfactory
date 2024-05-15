import React from "react";
import "./MultiComponents.css";

const Loading = () => {
  return (
    <>
      <div className="loading-container">
        <div className="section">
          <div className="d-flex justify-content-center">
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
