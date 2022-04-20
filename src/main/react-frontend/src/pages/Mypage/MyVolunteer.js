import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import MyTitle from "../../components/MyTitle";
import SearchBox from "./SearchBox";
import MyVolunteerList from "./MyVolunteerList";
import "./css/MyVolunteer.css";
import MyPageMenu from "./MyPageMenu";



const MyVolunteer = () => {
    
return (
    <div className = "Mypage">
        <h1>봉사활동 - 나의 봉사</h1>
        <MyHeader />
        <div className="my_volunteer"><br />
        <SearchBox className="searchbox" />
        <MyTitle titleText={"나의 봉사"} /> 
        </div>
        <div className = "my_volunteer_list">
        <MyPageMenu />

        <MyVolunteerList />
        <MyVolunteerList />
        <MyVolunteerList />
        <MyVolunteerList />
        <MyVolunteerList />
        <MyVolunteerList />
        <MyVolunteerList />

        </div>

        <MyFooter />
    </div>
    );
};

export default MyVolunteer;