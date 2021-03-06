import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

import AdoptionThumbnail from "../adoption/AdoptionThumbnail";
import "./css/Slider_Adoption.css";

const Slider_Adoption = () => {
  const settings = {
    // focusOnSelect: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };

  const [adoptionThumbnailList, setAdoptionThumbnailList] = useState([]);

  useEffect(() => {
    axios({
      url: "/api/adoptionThumbnails/1/24",
      method: "GET",
    }).then((res) => {
      setAdoptionThumbnailList(res.data);
    });
  }, []);

  return (
    <div className="container">
      <style>{cssstyle_a}</style>
      <Slider {...settings}>
        {adoptionThumbnailList.slice(0, 10).map((item) => (
          <AdoptionThumbnail key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
};

const cssstyle_a = `
.container {
  margin: 0 auto;
  padding: 5px 0px 30px 0px;
  width: 100%;
}
.slick-next:before, .slick-prev:before {
  background-image:
  color: #f34949;
}
.item{
    overflow: hidden;
}
`;

export default Slider_Adoption;

/*
import Adoption_item from "./component/Adoption_item";
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
*/
