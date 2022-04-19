import SearchBox from "../adoption/SearchBox";
import "./css/MyNav.css"

const MyNav = ({pageName, region1, region2, region3}) => {
    return (
        <div className="MyNav">
            <div className="MyNav_left">
                <span className='MyNav_left_pageName'><b>{pageName}</b></span>
                <select className='MyNav_left_selectRegion' name="MyNav_left_selectRegion">
                    <option value="all">{region1}</option>
                    <option value="all">{region2}</option>
                    <option value="all">{region3}</option>
                </select>
            </div>
            <div className='MyNav_right'>
                <SearchBox />
            </div>

        </div>
    );
}

export default MyNav;