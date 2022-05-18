import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom"; 
import MyButton from '../../components/MyButton';
import { getCertificateById } from './CertDataList';

import "./css/CertificateDetail.css";
import MyHeader from "../../components/MyHeader";
import MyPageMenu from "./MyPageMenu";
import MyFooter from "../../components/MyFooter";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const CertificateDetail = () => {
    const [data, setData] = useState({});

    const { id } = useParams();


    useEffect(() => {
        setData(getCertificateById(id));
    }, [ ]);

    const navigate = useNavigate();

    return(

        <div className="CertificateDetail">
        <h2>인증서 상세 페이지</h2>
        <MyHeader />
        <div className="Certificate_box">
            <div className="Certificate_box_wrapper">
            {
                data ? (
                    <>
                    <div className='Certificate_box_wrapper_top'>
                    <MyButton text={"X"} onClick={()=>navigate(-1) }/>
                    <span><b>인증서 확인</b></span>
                    </div>

                    <div className='Certificate_box_wrapper_middle_top'>
                        <div className='list_title_text'>
                        <label>{data.title}</label>
                        </div>
                        <div className='list_date_text'>
                        <label>{data.date}{data.time}</label>
                    
                        </div>
                        
                        </div>

                        <div className='Certificate_box_wrapper_middle_box'>
                            <div className='Certificate_box_wrapper_middle_box_title'>
                                자원봉사 확인서
                            </div>

                            <div className='Certificate_box_wrapper_middle_box_user'>
                                <div className='Certificate_box_wrapper_middle_box_user_left'>
                                    <b>성명 </b> 유달리 
                                    </div>
                                    <div className='Certificate_box_wrapper_middle_box_user_right'>
                                        <b>생년월일</b> 1997.06.05
                            </div>
                    </div>
                    
                    <div className='Certificate_box_wrapper_middle_box_content'>

                        <div className='Certificate_box_wrapper_middle_box_content_dete'>
                    <b>활동 기간</b><label>{data.date}</label><br/>
                    </div>
                    <div className='Certificate_box_wrapper_middle_box_content_time'>
                    <b>봉사 시간</b><label>{data.time}</label><br/>
                    </div>
                    <div className='Certificate_box_wrapper_middle_box_content_count'>
                    <b>활동 횟수</b><label>{data.count}</label><br/>
                    </div>
                    <div className='Certificate_box_wrapper_middle_box_content_content'>
                    <b>활동 내용</b><label>{data.content}</label><br/>
                    </div>
                    </div> 
                    
                    <div className='Certificate_box_wrapper_bottom_box'>
                    <div className='Certificate_box_wrapper_bottom_box_text_top'>
                    위 사람은 사회복지법인 한국유기견돌봄에서 실시한 유기견묘 봉사 캠페인에 참여하여
                    생명의 소중함을 알리기 위한 봉사활동을 성실히 수행하였음을 확인합니다.
                    </div>

                    <div className='Certificate_box_wrapper_bottom_box_text_middle'>
                    사회복지법인 한국유기견돌봄 이사장 
                    </div>

                    <div className='Certificate_box_wrapper_bottom_box_text_bottom'>
                    본 증명서는 인터넷으로 발급되었으며, 자원봉사 포탈시스템(www.1365.go.kr)의 확인서<br/>
                    조회 메뉴를 통해 문서발급 번호 입력으로 내용의 위변조 여부를 확인해 주십시오.<br/>
                    다만 문서 확인 번호를 통한 확인은 발급일로부터 90일까지 가능합니다.
                    </div>
                    </div>
                </div>
                
                <div className='Certificate_box_wrapper_bottom_box_button'>
                <div className='Certificate_box_wrapper_bottom_box_button_pdf'>
                <MyButton onClick={()=> alert("PDF파일 저장 완료")} text={"Pdf 저장하기"} /></div>

                <div className='Certificate_box_wrapper_bottom_box_button_img'>
                <MyButton onClick={()=> alert("이미지 파일 저장 완료")} text={"이미지 저장하기"} /></div>

                <div className='Certificate_box_wrapper_bottom_box_button_email'>
                <MyButton onClick={()=> alert("이메일 공유 완료")} text={"이메일 공유하기"} /></div>
                
                <div className='Certificate_box_wrapper_bottom_box_button_kakao'>
                <MyButton onClick={()=> alert("카카오톡 공유 완료")} text={"카카오톡 공유하기"} /></div>
                </div>
                        
                </>
                ) : '해당 게시글을 찾을 수 없습니다. '
            }
            </div>
            </div>
        </div>

    )
}

export default CertificateDetail;