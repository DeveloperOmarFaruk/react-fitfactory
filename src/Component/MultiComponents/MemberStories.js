import React from "react";
import "./MultiComponents.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFunction from "../../Hooks/useFunction";

const MemberStories = () => {
  const { reviewData } = useFunction();

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
        <div className="common-header-vartical-div-title">
          <div className="middle-vertical-line-div">
            <div className="middle-vertical-line"></div>
          </div>
          <h4>Member Stories</h4>
          <h2>TESTIMONIALS</h2>
        </div>

        <div className="client-say-review-card">
          <Slider {...settings} className="row row-edit mb-4">
            {reviewData.map((item) => (
              <div
                className="col-lg-4 col-md-4 col-sm-12 col-xs-12 mt-4 client-say-review-card-col"
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
    </>
  );
};

export default MemberStories;
