import React, { Component } from "react";

import Volunteer_item from "./component/Volunteer_item";
import { VolunteerList } from "./component/volunteerData";
import "./css/Slider_Volunteer.css";

const Slider_Volunteer = () => {
  const settings = {
    // focusOnSelect: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
  };
  return (
    <div className="slider_volunteer_container">
        <div className="slider_volunteer_list">
          {VolunteerList.map((it)=>(
          <Volunteer_item key={it.id} {...it} />
          ))}
        </div>
    </div>
  );
};

;

export default Slider_Volunteer;
