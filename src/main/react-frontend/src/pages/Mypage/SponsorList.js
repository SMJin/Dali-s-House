import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { sponList } from './SponDataList';
import MyFooter from "../../components/MyFooter";
import MyPagination from "../../components/MyPagination";
import "./css/SponsorList.css";


const SponsorList = props => {
    const [ dataList, setDataList] = useState([]);

    useEffect(() => {
        setDataList(sponList);
    }, [ ])


return (
    <>
    <div className='SponsorList_wrapper'>

    { dataList ? dataList.map((item, index) =>{
        return (
            <>
            <div className = "SponsorList_list_wrapper" key={index}>
                <div className='sponlist_code_text'>{item.code}</div>
                <div className='sponlist_title_text'>{item.title}</div>
                <div className='sponlist_place_text'>{item.place}</div>
                <div className='sponlist_delivery_text'>{item.delivery}</div>
                <div className='sponlist_date_text'>{item.date}</div>
                <div className='sponlist_total_amount_text' >{item.total_amount}</div>

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

export default SponsorList;