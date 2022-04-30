import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import "./css/Join.css";

const Join = () => {
  return (
    <div>
      <h1>회원가입 페이지</h1>
      <MyHeader />
      <div className="join">
        <h2>회원가입</h2>
      </div>
      <MyFooter />
    </div>
  );
};

export default Join;
