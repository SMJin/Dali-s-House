import React, { useState, useEffect } from "react";

import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import MyPagination from "../../components/MyPagination";
import MySearch from "../../components/MySearch";
import { MyFavoriteVolunteer_DataList } from "./component/MyFavoriteVolunteer_DataList";
import MyFavoriteVolunteerList from "./MyFavoriteVolunteerList";
import "./css/MyFavoriteVolunteer.css";
import MyPageMenu from "./MyPageMenu";

const MyFavoriteVolunteer = ({ sponsorList }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(MyFavoriteVolunteer_DataList);
  }, []);

  return (
    <>
      <div className="MyFavoriteVolunteer">
        <MyHeader />
        <MySearch />
        <span>찜한 봉사</span>

        <MyPageMenu />

        <div className="MyFavoriteVolunteer_box">
          <MyFavoriteVolunteerList dataList={dataList} />
        </div>
        <MyPagination />
      </div>
      <MyFooter />
    </>
  );
};

MyFavoriteVolunteer.defaultProps = {
  MyFavoriteVolunteerList: [],
};

export default MyFavoriteVolunteer;
