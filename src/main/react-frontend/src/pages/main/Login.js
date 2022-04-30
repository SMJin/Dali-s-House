import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import "./css/Login.css";

const Login = () => {
  return (
    <div>
      <h1>로그인 페이지</h1>
      <MyHeader />
      <div className="login"></div>
      <MyFooter />
    </div>
  );
};

export default Login;
