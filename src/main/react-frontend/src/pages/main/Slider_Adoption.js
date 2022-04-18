import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Adoption_item from "./component/Adoption_item";

const Slider_Adoption = () => {
  const settings = {
    // focusOnSelect: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <div className="container">
      <style>{cssstyle}</style>
      <Slider {...settings}>
        <div className="item">
          <Adoption_item
            name={"달리1"}
            age={"8개월"}
            sex={"남아"}
            neutering={true}
            identification={true}
          />
        </div>
        <div className="item">
          <Adoption_item
            name={"달리2"}
            age={"8개월"}
            sex={"남아"}
            neutering={true}
            identification={true}
          />
        </div>
        <div className="item">
          <Adoption_item
            name={"달리3"}
            age={"8개월"}
            sex={"남아"}
            neutering={true}
            identification={true}
          />
        </div>
        <div className="item">
          <Adoption_item
            name={"달리4"}
            age={"8개월"}
            sex={"남아"}
            neutering={true}
            identification={true}
          />
        </div>
        <div className="item">
          <Adoption_item
            name={"달리5"}
            age={"8개월"}
            sex={"남아"}
            neutering={true}
            identification={true}
          />
        </div>
        <div className="item">
          <Adoption_item
            name={"달리6"}
            age={"8개월"}
            sex={"남아"}
            neutering={true}
            identification={true}
          />
        </div>
        <div className="item">
          <Adoption_item
            name={"달리7"}
            age={"8개월"}
            sex={"남아"}
            neutering={true}
            identification={true}
          />
        </div>
        <div className="item">
          <Adoption_item
            name={"달리8"}
            age={"8개월"}
            sex={"남아"}
            neutering={true}
            identification={true}
          />
        </div>
        <div className="item">
          <Adoption_item
            name={"달리9"}
            age={"8개월"}
            sex={"남아"}
            neutering={true}
            identification={true}
          />
        </div>
        <div className="item">
          <Adoption_item
            name={"달리10"}
            age={"8개월"}
            sex={"남아"}
            neutering={true}
            identification={true}
          />
        </div>
      </Slider>
    </div>
  );
};

const cssstyle = `
.container {
  margin: 0 auto;
  padding: 5px 40px 30px 40px;
  width: 80%;
}
.slick-next:before, .slick-prev:before {
  color: #f34949;
}
.item{
    overflow: hidden;
}
`;

export default Slider_Adoption;
