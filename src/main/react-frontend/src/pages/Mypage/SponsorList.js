import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { sponList } from "./SponDataList";
import MyFooter from "../../components/MyFooter";
import MyPagination from "../../components/MyPagination";
import "./css/SponsorList.css";
import MySearch from "../../components/MySearch";

const SponsorList = (props) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(sponList);
  }, []);

  return (
    <div className="SponsorList_wrapper">
      <div className="mypageContentLengthWrapper">
        <span className="mypageContentLength">
          {dataList.length}개의 게시물이 있습니다.
        </span>
        <MySearch />
      </div>
      {dataList
        ? dataList.map((item, index) => {
            return (
              <div className="SponsorList_list_wrapper" key={index}>
                <div className="sponlist_code_text">{item.code}</div>
                <div className="sponlist_title_text">{item.title}</div>
                <div className="sponlist_place_text">{item.place}</div>
                <div className="sponlist_place_textWrapper">
                  <div className="sponlist_place_delivery_textWrapper">
                    <div className="sponlist_delivery_text">
                      {item.delivery}
                    </div>
                    <div className="sponlist_date_text">{item.date}</div>
                  </div>
                  <div className="sponlist_total_amount_text">
                    {item.total_amount}
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default SponsorList;
