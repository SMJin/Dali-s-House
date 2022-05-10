import MyPageHeader from "./MyPageHeader";
import MyPageMenu from "./MyPageMenu";

const MyPage = () => {
  return (
    <div className="Mypage">
      <div className="mypage_header">
        <h1>마이페이지</h1>
        <MyPageHeader />
        <hr />
      </div>

      <div className="my_volunteer">
        <br />

        <SearchBox className="searchbox" />
        <MyPageMenu />
      </div>
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
