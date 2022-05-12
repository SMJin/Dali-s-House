import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"; 
import MyButton from '../../components/MyButton';
import { getCertificateById } from './DataList';

import "./css/CertificateDetail.css";
import MyHeader from "../../components/MyHeader";
import MyPageMenu from "./MyPageMenu";
import MyFooter from "../../components/MyFooter";

const CertificateDetail = () => {
    const [data, setData] = useState({});

    const { id } = useParams();


    useEffect(() => {
        setData(getCertificateById(id));
    }, [ ]);


    return(
        <>
        <div className="MyVolunteerDetail">
        <h2>인증서 상세 페이지</h2>
        <MyHeader />
        <span><b>인증서 확인</b></span>

        <div className="Certificate_box">
            <div className="Certificate_box_wrapper">

            {
                data ? (
                    <>
                    <div>
                        <label>테스트 1</label>
                        <label>{data.id}</label>
                        </div>

                        <div>
                        <label>테스트 2</label>
                        <label>{data.title}</label>
                        </div>
                        
                        <div>
                        <label>테스트 1</label>
                        <label>{data.date}</label>
                        </div>
                        </>
                ) : '해당 게시글을 찾을 수 없습니다. '
            }
            </div>
            </div>
            <MyButton>Test</MyButton>
        </div>

    </>
    )
}

export default CertificateDetail;