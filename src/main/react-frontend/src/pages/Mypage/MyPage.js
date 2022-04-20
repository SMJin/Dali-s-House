import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
// import MyTitle from "../../components/MyTitle";
import SearchBox from "./SearchBox";
import MyPageMenu from "./MyPageMenu";
import "./css/MyPage.css";


const MyPage = () => {
    


return (
    <div className = "Mypage">
        <h1>마이페이지</h1>
        <MyHeader />
        <div className="my_volunteer"><br />
        <SearchBox className="searchbox" />
        </div>
        <br></br>
        <p><MyPageMenu /></p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <MyFooter />
    </div>
    );
};

export default MyPage;