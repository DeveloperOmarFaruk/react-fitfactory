import React from "react";
import "./MultiComponents.css";
import $ from "jquery";

const Overview = () => {
  $(document).ready(function () {
    $(".about-vid-wrap .thumbnail-img").click(function () {
      var id = $(this).parent().attr("id");
      var idVideo = $(this).attr("data-video");

      playVideo(id, idVideo);
    });

    $(".about-vid-wrap .btn-play").click(function () {
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
              <h4>Gym Overview</h4>
              <h2>READY FOR SOME SWEATING</h2>
            </div>

            <div className="common-header-right-div-text">
              <p>
                At FitFactory, In addition to equipment, gyms often offer a
                variety of group fitness classes led by certified instructors.
                These classes encompass a wide range of activities such as yoga,
                Pilates, spinning, Zumba, HIIT (High-Intensity Interval
                Training), and more. Group classes provide an opportunity for
                members to engage in structured workouts, enjoy the camaraderie
                of exercising with others, and benefit from the expertise and
                motivation of skilled instructors.
              </p>

              <p>
                A gymnasium serves as a hub for physical activity, health
                promotion, and community engagement. It provides individuals
                with the resources, guidance, and motivation they need to lead
                active, healthy lifestyles, empowering them to take control of
                their fitness journey and thrive both physically and mentally.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="about-vid-wrap" id="vid-1">
              <img
                className="thumbnail-img"
                src="https://a.catand.us/fitfactory/wp-content/uploads/sites/17/elementor/thumbs/fitness-bodybuilder-works-out-pushing-up-excercise-WB5BW9E-1-pf2k9jjdfdg72fkxh0n67o8yepihv41k7wsrt0yw7c.jpg"
                data-video="https://www.youtube.com/embed/6jrhrNcEYpA?si=4J9W5ZV2Ck3LB0hB"
                alt="images"
              />

              <iframe id="embed-vid-1" className="vid-first"></iframe>
              <p className="btn-close">
                <i className="fa fa-times"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
