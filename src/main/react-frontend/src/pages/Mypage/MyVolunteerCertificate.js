import React, {useState} from "react";
import "./css/MyVolunteerCertificate.css";
import MyHeader from "../../components/MyHeader";
import MyPageMenu from "./MyPageMenu";
import MyFooter from "../../components/MyFooter";
import MySearch from "../../components/MySearch";
import MyPagination from "../../components/MyPagination";



function MyVolunteerCertificate() {
    const certList = [
        {
        id:1,
        lssuance:"발급가능",
        title:"아름다운 우리 아이들의 미용 봉사",
        date:"2022.03.01 (화) 15:00 ~ 2022.03.01 (화) 18:00 총 3시간 "
        },
        {
        id:2,
        lssuance:"발급가능",
        title:"2월 정기 산책 봉사자를 모집합니다.",
        date:"2022.02.05 (토) 10:00 ~ 2022.02.26 (토) 12:00 총 8시간  "
        },{
        id:3,
        lssuance:"발급가능",
        title:"경기도 반려동물 입양센터(수원) 유기견 관리(홍보봉사) - 유기동물 프로필 작성",
        date:"2022.01.24 (화) 10:00 ~ 2022.01.24 (화) 10:00 18:00 총 8시간 "
        },{
        id:4,
        lssuance:"발급가능",
        title:"‘생명공감’ 보호소 봉사 - 견사 청소, 밥·물그릇 청소, 밥주기 ",
        date:"2021.12.19 (일) 13:00 ~ 2021.12.19 (일) 17:00 총 4시간 "
        },{
        id:5,
        lssuance:"발급가능",
        title:"대구 유기견 봉사 함께해요.",
        date:"2022.02.06 (일) 09:00 ~ 2022.02.06 (일) 12:00 총 3시간  "
        },{
        id:6,
        lssuance:"발급가능",
        title:"아직 엄마 품이 필요한 고양이들에게 도움을 주세요",
        date:"2022.02.06 (일) 09:00 ~ 2022.02.06 (일) 12:00 총 3시간  "
        },
    ];
 



        
return(
    <div className="MyVolunteerCertificate">
        <h2>인증서 리스트 페이지</h2>
        <MyHeader />
        <span><b>봉사인증서 발급</b></span>

       
        <MySearch/>
        <MyPageMenu/>
        <div className="MyVolunteerCertificate_wrapper">
        <div className="checkbox">
        <input type={"checkbox"} />
        <label>인증서 발급 가능</label>
            
        </div>
        <div className="CertList_wrapper">
    {certList.map(cert =>
    <div
    className="CertList_list_wrapper" key={cert.id}>
        <div className="list_lssuance_text">
            {cert.lssuance}
            </div>
            <div className="list_title_text">
                {cert.title}
            </div>
            <div className="list_date_text">{cert.date}
            </div>
            </div>
            )
        }
        </div>
    </div>
    <footer>
        <MyPagination/>
    <MyFooter />
    </footer>
    </div>
    
);

 }

export default MyVolunteerCertificate;