import SearchBox from "../adoption/SearchBox";
import "./css/MyNav.css"

const MyNav = ({pageName, region1, region2, region3}) => {
    return (
        <div className="MyNav">
            <div className="MyNav_leftText">
                <span><b>{pageName}</b></span>
                <select className='select_region' name="select_region">
                    <option value="all">{region1}</option>
                    <option value="all">{region2}</option>
                    <option value="all">{region3}</option>
                </select>
            </div>
            <SearchBox />

        </div>
    );
}

export default MyNav;