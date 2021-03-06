import MyFooter from "../../components/MyFooter";
import "./css/MyPage.css";
import MyHeader from "../../components/MyHeader";
import MyPageMenu from "./MyPageMenu";
import MyPageMenuTest from "../../components/MyPageMenu";

const MyPage = () => {
  return (
    <div className="Mypage">
      <MyHeader />
      <div className="mypageWrapper">
        <MyPageMenuTest />
        <div className="mypageContentWrapper">
          <b>마이페이지</b>
        </div>
      </div>

      <MyFooter />
    </div>
  );
};

export default MyPage;

/*
<div className="Mypage">
      <MyHeader />
      <div className="mypage_wrapper">
        <span>
          <b>마이페이지</b>
        </span>
        <MyPageMenu />
      </div>

      <MyFooter />
    </div>
*/
