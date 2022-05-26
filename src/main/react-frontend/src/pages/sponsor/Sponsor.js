import React, { useState, useEffect } from "react";

import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import MyPagination from "../../components/MyPagination";
import MySearch from "../../components/MySearch";
import { SponsorDataList } from "./component/SponsorDataList";
import "./css/Sponsor.css";
import SponList from "./SponList";

const Sponsor = ({ sponsorList }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(SponsorDataList);
  }, []);

  return (
    <div>
      <MyHeader />
      <div className="Sponsor">
        <div className="title">
          <h3>후원 리스트</h3>
          <MySearch />
        </div>
        <div className="Sponsor_box">
          <h6>{dataList.length} 개의 게시물이 있습니다.</h6>
          <SponList dataList={dataList} />
        </div>
        {/* <MyPagination /> */}
      </div>
      <MyFooter />
    </div>
  );
};

Sponsor.defaultProps = {
  sponsorList: [],
};

export default Sponsor;
