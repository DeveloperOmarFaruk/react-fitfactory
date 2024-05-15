import React from "react";
import "./MultiComponents.css";
import WomenBodybuilder from "../../Images/young-woman-flexing-muscles-with-kettlebell-in-gym-2.png";
import useFunction from "../../Hooks/useFunction";
import Slider from "react-slick";

const WhatClintsSay = () => {
  const { reviewData } = useFunction();

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="section">
        <div className="row row-edit">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-col-image">
              <img src={WomenBodybuilder} alt="Bodybuilder__Image" />
              <div className="common-header-col-image-centered">
                <h1>Hard Work</h1>
                <h1>Pays Off</h1>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>Testimonials</h4>
              <h2>WHAT CLIENTS SAY</h2>
            </div>

            <div className="client-say-review-card">
              <Slider {...settings} className="row row-edit mb-4">
                {reviewData.map((item) => (
                  <div
                    className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4 client-say-review-card-col"
                    key={item.id}
                  >
                    <div
                      className="client-say-review-card-header"
                      style={{ textAlign: "left" }}
                    >
                      <i className="fa-solid fa-quote-left"></i>
                      <p>{item.comments}</p>
                    </div>

                    <div className="client-say-review-card-footer">
                      <img
                        src={item.image}
                        alt="review_image"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <h6>{item.name}</h6>
                      <p>{item.time}</p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatClintsSay;
