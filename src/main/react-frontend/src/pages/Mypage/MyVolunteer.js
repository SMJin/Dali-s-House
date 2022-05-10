import MyPageHeader from "./MyPageHeader";
import MyFooter from "../../components/MyFooter";
import SearchBox from "./SearchBox";
import MyVolunteerList from "./MyVolunteerList";
import "./css/MyVolunteer.css";
import MyPageMenu from "./MyPageMenu";
import MyPagination from "../../components/MyPagination";



const MyVolunteer = () => {
    

return (
    <div>
        <h1>봉사활동 - 나의 봉사</h1><br/>
        <MyPageHeader />
        <div className="mypage_myvolunteer">
        

        <SearchBox className="mypage_searchbox" />
            <span className="mypage_myvolunteer_left"><b>나의 봉사</b></span>
        <div className = "mypage_myvolunteer_list">
        
        <MyPageMenu />

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