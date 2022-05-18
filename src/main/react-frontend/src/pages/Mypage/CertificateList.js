import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { certList } from './CertDataList';
import MyFooter from "../../components/MyFooter";
import MyPagination from "../../components/MyPagination";
import "./css/CertificateList.css";


const CertificateList = props => {
    const [ dataList, setDataList] = useState([]);

    useEffect(() => {
        setDataList(certList);
    }, [ ])


return (
    <>
    <div className='CertList_wrapper'>

    { dataList ? dataList.map((item, index) =>{
        return (
            <>
            <div className = "CertList_list_wrapper" key={index}>
                <div className='list_lssuance_text'>{item.lssuance}</div>
                <div>
                    <Link className='list_title_text' to={`/CertificateDetail/${item.id}`}>{item.title}</Link>
                    <div className='list_date_text' >{item.date}{item.time}</div>
                </div>
            </div>
            </>
        )
    }) : ''
}
<footer>
        <MyPagination/>
    <MyFooter />
    </footer>

</div>

    </>
    )
}

export default CertificateList;