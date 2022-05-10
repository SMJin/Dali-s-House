import MyPageHeader from "./MyPageHeader";
import MyFooter from "../../components/MyFooter";
import SearchBox from "./SearchBox";
import MyVolunteerList from "./MyVolunteerList";
import "./css/MyVolunteer.css";
import MyPageMenu from "./MyPageMenu";
import MyPagination from "../../components/MyPagination";



const MyVolunteer = () => {
    

return (
    <div className = "MyVolunteer">
        <h1>봉사활동 - 나의 봉사</h1><br/>
        <MyPageHeader />
        <div className="mypage_myvolunteer">
        <SearchBox className="mypage_searchbox" />
        <span><b>나의 봉사</b></span>

        <MyPageMenu />
    </div>
<div>
    <div className = "mypage_myvolunteer_list">

        <MyVolunteerList />
        <MyVolunteerList />
        <MyVolunteerList />
        <MyVolunteerList />
        <MyVolunteerList />
        <MyVolunteerList />
        
        </div>
        </div>
        <MyPagination />
        <MyFooter />
    </div>
    );
};


export default MyVolunteer;