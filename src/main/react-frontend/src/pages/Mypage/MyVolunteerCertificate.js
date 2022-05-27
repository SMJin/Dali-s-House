import React from "react";
import CertificateList from "./CertificateList";
import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import "./css/MyVolunteerCertificate.css";
import MyPageMenuTest from "../../components/MyPageMenu";
import MyPagination from "../../components/MyPagination";
import MySearch from "../../components/MySearch";

const MyVolunteerCertificate = (props) => {
  return (
    <div className="MyVolunteerCertificate">
      <MyHeader />
      <div className="mypageWrapper">
        <MyPageMenuTest clicked={"volunteer"} />
        <div className="mypageContentWrapper">
          <b>봉사 인증서 발급</b>
          <div className="mypageSubTitleWrapper">
            <div className="checkbox">
              <input className="checkboxInput" type={"checkbox"} />
              <label>인증서 발급 가능</label>
            </div>
            <MySearch />
          </div>
          <CertificateList />
          <MyPagination />
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

export default MyVolunteerCertificate;

/*
<div className="MyVolunteerCertificate">
      <MyHeader />
      <span>
        <b>봉사인증서 발급</b>
      </span>
      <div className="checkbox">
        <input type={"checkbox"} />
        <label>인증서 발급 가능</label>
      </div>

      <MySearch />
      <MyPageMenu />

      <CertificateList />
    </div>
*/
