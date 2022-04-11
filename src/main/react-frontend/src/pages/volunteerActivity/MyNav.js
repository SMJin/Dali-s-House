import SearchBox from "../adoption/SearchBox";
import "./css/MyNav.css"

const MyNav = () => {
    return (
        <div className="MyNav">
            <div className="MyNav_leftText">
                <span><b>봉사활동</b></span>
                <select className='select_region' name="select_region">
                    <option value="all">전국</option>
                    <option value="all">전국</option>
                    <option value="all">전국</option>
                </select>
            </div>
            <SearchBox />

        </div>
    );
}

export default MyNav;