import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Volunteer_item from "../pages/main/component/Volunteer_item";

const MySlider = () => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <div className="container">
      <style>{cssstyle}</style>
      <Slider {...settings}>
        <div className="item">
          <Volunteer_item />
        </div>
        <div className="item">
          <Volunteer_item />
        </div>
        <div className="item">
          <Volunteer_item />
        </div>
        <div className="item">
          <Volunteer_item />
        </div>
        <div className="item">
          <Volunteer_item />
        </div>
        <div className="item">
          <Volunteer_item />
        </div>
        <div className="item">
          <Volunteer_item />
        </div>
        <div className="item">
          <Volunteer_item />
        </div>
        <div className="item">
          <Volunteer_item />
        </div>
        <div className="item">
          <Volunteer_item />
        </div>
      </Slider>
    </div>
  );
};

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 0px 40px 40px 40px;
  width: 80%;
}
.slick-next:before, .slick-prev:before {
  color: black;
}
.item{
    overflow: hidden;
}
`;

export default MySlider;
