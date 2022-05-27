import React from "react";
import SponsorList from "./SponsorList";
import { withRouter } from "react-router-dom";
import MyHeader from "../../components/MyHeader";
import MyPageMenu from "./MyPageMenu";
import MyFooter from "../../components/MyFooter";
import MySearch from "../../components/MySearch";
import MyPageMenuTest from "../../components/MyPageMenu";
import MyPagination from "../../components/MyPagination";
// import "./css/MyPageSponsor.css";

const MyPageSponsor = () => {
  return (
    <div className="MyPageSponsor">
      <MyHeader />
      <div className="mypageWrapper">
        <MyPageMenuTest clicked={"spon"} />
        <div className="mypageContentWrapper">
          <b>후원 내역</b>

          <SponsorList />
          <MyPagination />
        </div>
      </div>

      <MyFooter />
    </div>
  );
};

export default MyPageSponsor;

/*
<div className="MyPageSponsor">
      <MyHeader />

      <MySearch />
      <span>후원 내역</span>

      <MyPageMenu />

      <SponsorList />
    </div>
*/
