import React, { useState, useEffect } from "react";

import "./css/MagazinePost.css";
import MyFooter from "../../../components/MyFooter";
import MyHeader from "../../../components/MyHeader";
import { useNavigate, useParams } from "react-router-dom";
import { MagazineDataList } from "./component/MagazineDataList";

const MagazinePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>매거진 페이지</h1>
      <MyHeader />
      <div className="MagazinePost">
        <div className="MagazinePostHeaderWrapper">
          <h3>달리 매거진</h3>
          <button
            className="MagazinePostHeaderButton"
            onClick={() => {
              navigate(-1, { replace: true });
            }}
          >
            × 닫기
          </button>
        </div>
        <div className="MagazinePostImageWrapper">
          <img
            class="MagazinePostImage"
            src={
              process.env.PUBLIC_URL +
              `/assets/magazine/magazine_${MagazineDataList[id - 1].id % 4}.png`
            }
          />
        </div>
        <div className="MagazinePostTextWrapper">
          {MagazineDataList[id - 1].content1}
        </div>
        <div className="MagazinePostSubTitleWrapper">
          {MagazineDataList[id - 1].subtitle}
        </div>
        <div className="MagazinePostSubImageWrapper">
          <img
            class="MagazinePostSubImage"
            src={
              process.env.PUBLIC_URL +
              `/assets/magazine/subImage/magazine_0_1.png`
            }
          />
          <img
            class="MagazinePostSubImage"
            src={
              process.env.PUBLIC_URL +
              `/assets/magazine/subImage/magazine_0_2.png`
            }
          />
        </div>
        <div className="MagazinePostTextWrapper">
          {MagazineDataList[id - 1].content2}
        </div>
      </div>
      <MyFooter />
    </div>
  );
};
export default MagazinePost;
