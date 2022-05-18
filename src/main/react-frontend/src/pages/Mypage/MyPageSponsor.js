import React from "react";
import SponsorList from "./SponsorList";
import { withRouter } from "react-router-dom";
import MyHeader from "../../components/MyHeader";
import MyPageMenu from "./MyPageMenu";
import MyFooter from "../../components/MyFooter";
import MySearch from "../../components/MySearch";
import "./css/MyPageSponsor.css";

const MyPageSponsor = props => {
    return (
        <div className="MyPageSponsor">
        <h2>후원 리스트 페이지</h2>
        <MyHeader />

        <MySearch/>
        <MyPageMenu/>

        <SponsorList />
        </div>
    )
}

export default  MyPageSponsor;