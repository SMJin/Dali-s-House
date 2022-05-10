import MyFooter from "../../components/MyFooter";
import "./css/MyPage.css";
import MyHeader from "../../components/MyHeader";
import MyPageMenu from "./MyPageMenu";

const MyPage = () => {

return (
    <div className = "Mypage">
        <h1>마이페이지</h1>
        <MyHeader />
        <div className="mypage_wrapper">
        <span><b>마이페이지</b></span>
        <MyPageMenu />


        
        </div>

        <MyFooter />

    </div>
  );
};

export default MyPage;