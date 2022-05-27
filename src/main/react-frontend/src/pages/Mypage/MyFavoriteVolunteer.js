import React, { useState, useEffect } from "react";

import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import MyPagination from "../../components/MyPagination";
import MySearch from "../../components/MySearch";
import { MyFavoriteVolunteer_DataList } from "./component/MyFavoriteVolunteer_DataList";
import MyFavoriteVolunteerList from "./MyFavoriteVolunteerList";
import MyPageMenuTest from "../../components/MyPageMenu";

const MyFavoriteVolunteer = ({ sponsorList }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(MyFavoriteVolunteer_DataList);
  }, []);

  return (
    <div className="MyFavoriteVolunteer">
      <MyHeader />
      <div className="mypageWrapper">
        <MyPageMenuTest clicked={"volunteer"} />
        <div className="mypageContentWrapper">
          <b>찜한 봉사</b>
          <div className="mypageContentLengthWrapper">
            <span className="mypageContentLength">
              {MyFavoriteVolunteer_DataList.length}개의 게시물이 있습니다.
            </span>
            <MySearch />
          </div>
          <div className="MyFavoriteVolunteer_box">
            <MyFavoriteVolunteerList dataList={dataList} />
          </div>
          <MyPagination />
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

MyFavoriteVolunteer.defaultProps = {
  MyFavoriteVolunteerList: [],
};

export default MyFavoriteVolunteer;

/*
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
*/
