import React from "react";
import "./MultiComponents.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carousel1 from "../../Images/carousel1.jpg";
import carousel2 from "../../Images/carousel2.jpg";
import carousel3 from "../../Images/carousel3.jpg";

const StrongTeam = () => {
  return (
    <>
      <div className="section">
        <div className="row row-edit">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>Our Strongest Team</h4>
              <h2>MEET EXPERT TRAINERS</h2>
            </div>

            <div className="common-header-right-div-text">
              <p>
                Discover the strength within with the Strongest Team at Fit
                Factory. Our expert trainers represent the pinnacle of fitness
                expertise, boasting a collective wealth of knowledge and
                experience to elevate your workout experience. Each trainer on
                our team is meticulously selected, holding prestigious
                certifications and demonstrating a deep commitment to helping
                clients surpass their fitness aspirations.
              </p>

              <p>
                Experience the difference of training with the Strongest Team,
                where dedication, professionalism, and passion converge to
                empower you to reach new heights of strength and vitality. Join
                us and unleash your full potential in a welcoming and supportive
                environment where excellence thrives.
              </p>
            </div>

            <div className="common-button-design">
              <button>More Trainers</button>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="strong-team-slider-div">
              <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                emulateTouch
                dynamicHeight={false}
                swipeScrollTolerance={50}
                centerSlidePercentage={30}
                showIndicators
              >
                <div className="strong-team-slider-image-div">
                  <img
                    src={carousel1}
                    alt="carsouel_image"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div className="strong-team-slider-image-div">
                  <img
                    src={carousel2}
                    alt="carsouel_image"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
                <div className="strong-team-slider-image-div">
                  <img
                    src={carousel3}
                    alt="carsouel_image"
                    style={{ borderRadius: "20px" }}
                  />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StrongTeam;
