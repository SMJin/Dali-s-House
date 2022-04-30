import "./css/FindPW.css";

import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";

const FindPW = () => {
  return (
    <div>
      <h1>비밀번호 찾기 페이지</h1>
      <MyHeader />
      <div className="findPW">
        <h2>비밀번호 찾기</h2>
      </div>
      <MyFooter />
    </div>
  );
};

export default FindPW;
