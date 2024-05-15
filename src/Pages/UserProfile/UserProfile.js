import React from "react";
import "./UserProfile.css";
import "../../Component/MultiComponents/MultiComponents.css";
import Bodybuilder from "../../Images/portrait-of-bearded-shirtless-bodybuilder-10.png";
import useAuth from "../../Hooks/useAuth";

const UserProfile = () => {
  const { userInfo, formData } = useAuth();

  return (
    <>
      <div className="user-profile-container">
        <div className="user-profile-banner-div">
          <div className="section">
            <div className="row row-edit">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="user-profile-header-col-image">
                  <img src={Bodybuilder} alt="Bodybuilder__Image" />
                  <div className="user-profile-header-col-image-centered">
                    <h1>Got</h1>
                    <h1>Profile</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
                <div className="user-profile-header-right-div-title">
                  <h4>Profile</h4>
                  <h2>User Profile</h2>
                </div>

                <div className="user-profile-header-right-div-text">
                  <p>
                    A gym user profile is a concise summary of an individual's
                    fitness-related information, preferences, and goals. It
                    typically includes details such as age.
                  </p>

                  <p>
                    This profile helps gym staff and trainers personalize
                    workout plans, recommend suitable classes or equipment,
                    track progress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="user-profile-container-div-gray">
        <div className="section">
          <div className="common-header-vartical-div-title">
            <div className="middle-vertical-line-div">
              <div className="middle-vertical-line"></div>
            </div>
            <h4>Profile</h4>
            <h2>User Profile</h2>
          </div>

          {userInfo.email ? (
            <div className="user-profile-card">
              <img src={userInfo.photoURL} alt="user_profile_image" />
              <h5>{userInfo.displayName}</h5>
              <p>{userInfo.email}</p>
            </div>
          ) : (
            <div className="user-profile-card">
              <p>{formData.email}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
