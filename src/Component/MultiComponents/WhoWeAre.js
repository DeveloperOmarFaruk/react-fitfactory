import React from "react";
import "./MultiComponents.css";
import $ from "jquery";

const WhoWeAre = () => {
  $(document).ready(function () {
    $(".vid-wrap .thumbnail-img").click(function () {
      var id = $(this).parent().attr("id");
      var idVideo = $(this).attr("data-video");

      playVideo(id, idVideo);
    });

    $(".vid-wrap .btn-play").click(function () {
      var id = $(this).parent().attr("id");
      var idVideo = $(this).prev().attr("data-video");
      playVideo(id, idVideo);
    });

    $(".btn-close").click(function (e) {
      $(this).hide();
      $(this).parent().find("iframe").hide().attr("src", "");
      $(this).parent().find("img").show();
      e.preventDefault();
    });
  });

  function playVideo(id, idVideo) {
    var id = $("#" + id);
    id.find("img").hide();
    id.find("iframe").show().attr("src", idVideo);
    id.find(".btn-close").show();
  }

  return (
    <>
      <div className="section">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>Overview Intro</h4>
              <h2>OUR STORY</h2>
            </div>

            <div className="vid-wrap" id="vid-1">
              <img
                className="thumbnail-img"
                src="https://a.catand.us/fitfactory/wp-content/uploads/sites/17/elementor/thumbs/fit-couple-lifting-barbells-in-the-gym-ZACL9S6-pf2edecoyh1gqpqd8tfeypgrv157mcugpw8njtimiw.jpg"
                data-video="https://www.youtube.com/embed/6jrhrNcEYpA?si=4J9W5ZV2Ck3LB0hB"
                alt="images"
              />

              <iframe id="embed-vid-1" className="vid-first"></iframe>
              <p className="btn-close">
                <i className="fa fa-times"></i>
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>About Us</h4>
              <h2>WHO WE ARE</h2>
            </div>

            <div className="common-header-right-div-text">
              <p>
                At FitFactory, we believe that fitness is not just about
                physical strength, but also about mental well-being and personal
                growth. Our mission is to empower individuals of all fitness
                levels to reach their goals and lead healthier, happier lives.
              </p>

              <p>
                Beyond fitness, we're a community of like-minded individuals who
                inspire and support each other on our fitness journeys. From
                group classes to social events, we provide opportunities for our
                members to connect, share experiences, and celebrate
                achievements together.
              </p>
            </div>

            <div className="common-button-design">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
