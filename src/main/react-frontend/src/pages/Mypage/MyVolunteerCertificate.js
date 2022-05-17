import React from "react";
import CertificateList from "./CertificateList";
import { withRouter } from "react-router-dom";
import MyHeader from "../../components/MyHeader";
import MyPageMenu from "./MyPageMenu";
import MyFooter from "../../components/MyFooter";
import MySearch from "../../components/MySearch";
import "./css/MyVolunteerCertificate.css";

const MyVolunteerCertificate = props => {
    return (
        <div className="MyVolunteerCertificate">
        <h2>인증서 리스트 페이지</h2>
        <MyHeader />
        <span><b>봉사인증서 발급</b></span>
        <div className="checkbox">
        <input type={"checkbox"} />
        <label>인증서 발급 가능</label>
            
        </div>

        <MySearch/>
        <MyPageMenu/>

        <CertificateList />
        </div>
    )
}

export default MyVolunteerCertificate;