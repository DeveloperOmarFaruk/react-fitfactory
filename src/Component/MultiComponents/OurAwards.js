import React from "react";
import "./MultiComponents.css";
import useFunction from "../../Hooks/useFunction";
import Slider from "react-slick";

const OurAwards = () => {
  const { awardData } = useFunction();

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
          <h4>Comprtition</h4>
          <h2>OUR AWARDS</h2>
        </div>

        <div className="award-card">
          <Slider {...settings}>
            {awardData.map((item) => (
              <div className="award-card-image text-center" key={item.id}>
                <img src={item.image} alt="review_image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default OurAwards;
