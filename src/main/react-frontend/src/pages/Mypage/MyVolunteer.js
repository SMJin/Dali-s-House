import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import MyVolunteerList from "./MyVolunteerList";
import "./css/MyVolunteer.css";
import MyPageMenu from "./MyPageMenu";
import MyPagination from "../../components/MyPagination";
import MySearch from "../../components/MySearch";



const MyVolunteer = () => {
    

return (
    <div className = "MyVolunteer">
        <h1>봉사활동 - 나의 봉사</h1><br/>
        <MyHeader />
        <div className="mypage_myvolunteer">
        <span><b>나의 봉사</b></span>
        <MySearch />
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