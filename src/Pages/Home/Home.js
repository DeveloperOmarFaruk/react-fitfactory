import React from "react";
import "./Home.css";
import Bodybuilder from "../../Images/bearded-bodybuilder-dressed-in-a-tank-top.png";
import { Link } from "react-router-dom";
import WhoWeAre from "../../Component/MultiComponents/WhoWeAre";
import WhyChooseUs from "../../Component/MultiComponents/WhyChooseUs";
import ProSelected from "../../Component/MultiComponents/ProSelected";
import Achivment from "../../Component/MultiComponents/Achivment";
import StrongTeam from "../../Component/MultiComponents/StrongTeam";
import WhatClintsSay from "../../Component/MultiComponents/WhatClintsSay";
import ChoosePlan from "../../Component/MultiComponents/ChoosePlan";
const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                <div className="header-vartical-icon">
                  <div className="vertical-line"></div>
                  <div>
                    <Link to="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </div>
                  <div>
                    <Link to="#">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </div>
                  <div>
                    <Link to="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                  <div className="vertical-line"></div>
                </div>
              </div>
              <div className="col-lg-11 col-md-12 col-sm-12 col-xs-12 text-center">
                <div className="header-col-image">
                  <img src={Bodybuilder} alt="Bodybuilder__Image" />
                  <div className="header-col-image-centered">
                    <h1>Hard Rock Game</h1>
                    <h1>Time to Chnage</h1>
                    <button>Know More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-container-div-gray">
        <WhoWeAre />
      </div>

      <div className="home-container-div-image1">
        <WhyChooseUs />
      </div>

      <div className="home-container-div-gray">
        <ProSelected />
      </div>

      <div className="home-container-div-image2">
        <Achivment />
      </div>

      <div className="home-container-div-gray">
        <StrongTeam />
      </div>

      <div className="home-container-div-image3">
        <WhatClintsSay />
      </div>

      <div className="home-container-div-gray">
        <ChoosePlan />
      </div>
    </>
  );
};

export default Home;
