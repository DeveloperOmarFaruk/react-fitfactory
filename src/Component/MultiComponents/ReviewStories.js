import React from "react";
import "./MultiComponents.css";
import useFunction from "../../Hooks/useFunction";

const ReviewStories = () => {
  const { reviewData } = useFunction();
  return (
    <>
      <div className="section">
        <div className="common-header-vartical-div-title">
          <div className="middle-vertical-line-div">
            <div className="middle-vertical-line"></div>
          </div>
          <h4>Member Stories</h4>
          <h2>TESTIMONIALS</h2>
        </div>

        <div className="row row-edit mt-4">
          {reviewData.map((item) => (
            <div
              className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mt-4"
              key={item.id}
            >
              <div className="review-stories-card">
                <div className="row  row-edit  mt-4 mb-4">
                  <div className="col-3">
                    <img src={item.image} alt="review_card_image" />
                  </div>
                  <div className="col-6">
                    <h6>{item.name}</h6>
                    <p>{item.time}</p>
                  </div>
                  <div className="col-3">
                    <i className="fa-solid fa-quote-right"></i>
                  </div>
                </div>

                <div className="review-stories-card-description">
                  <p>{item.comments}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReviewStories;
