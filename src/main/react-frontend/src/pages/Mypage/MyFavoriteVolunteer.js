import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import "./css/MyFavoriteVolunteer.css";
import MyPageMenu from "./MyPageMenu";
import MyPagination from "../../components/MyPagination";
import MySearch from "../../components/MySearch";

const MyFavoriteVolunteer = () => {
    
    return (
        <div className="MyFavoriteVolunteer">
            <h1>봉사활동 - 찜한 봉사</h1>
            <MyHeader />
            <div className="mypage_myfavoritemyvolunteer">
            <MySearch />

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