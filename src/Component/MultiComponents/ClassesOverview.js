import React from "react";
import "./MultiComponents.css";
import $ from "jquery";

const ClassesOverview = (props) => {
  // JQuery for Video Open
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

  const { filterDetailsData } = props;

  return (
    <>
      <div className="section">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="common-header-right-div-title">
              <h4>Class Overview</h4>

              {filterDetailsData.map((item) => (
                <h2 key={item.id}>{item.title}</h2>
              ))}
            </div>

            <div className="common-header-right-div-text">
              {filterDetailsData.map((item) => (
                <p key={item.id}>{item.overview1}</p>
              ))}

              {filterDetailsData.map((item) => (
                <p key={item.id}>{item.overview2}</p>
              ))}
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4">
            <div className="about-vid-wrap" id="vid-1">
              {filterDetailsData.map((item) => (
                <img
                  key={item.id}
                  className="thumbnail-img"
                  src={item.img}
                  data-video={item.video_path}
                  alt="images"
                />
              ))}

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

export default ClassesOverview;
