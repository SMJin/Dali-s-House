import MyPageHeader from "./MyPageHeader";
import MyFooter from "../../components/MyFooter";
import SearchBox from "./SearchBox";
import "./css/MyFavoriteVolunteer.css";
import MyPageMenu from "./MyPageMenu";
import MyPagination from "../../components/MyPagination";

const MyFavoriteVolunteer = () => {
    
    return (
        <div>
            <h1>봉사활동 - 찜한 봉사</h1>
            <MyPageHeader />
            <div className="mypage_myfavoritemyvolunteer">
            <SearchBox className="mypage_searchbox" />
            
                <span className="mypage_myfavoritevolunteer_left"><b>찜한 봉사</b></span>
                <MyPageMenu />
                <div className = "mypage_myfavoritemyvolunteer_list">
        
        <img
        class="MyVolunteerList_image"
        src={process.env.PUBLIC_URL + `./assets/myfavoritevolunteer.png`}
    />
        </div>
            </div>

            <MyPagination />
            <MyFooter />
        </div>
        );
    };
    
    

export default MyFavoriteVolunteer;