import React from "react";
import "./MultiComponents.css";
import useFunction from "../../Hooks/useFunction";
import Slider from "react-slick";

const ExpartTrainers = () => {
  const { trainersData } = useFunction();
  console.log(trainersData);

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
          slidesToShow: 1,
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
          <h4>Our Strongest Team</h4>
          <h2>MEET EXPERT TRAINERS</h2>
        </div>

        <div className="trainers-card">
          <Slider {...settings}>
            {trainersData.map((item) => (
              <div className="tainers-card-image" key={item.id}>
                <img src={item.image} alt="review_image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ExpartTrainers;
