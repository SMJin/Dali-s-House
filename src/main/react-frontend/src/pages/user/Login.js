import "./css/Login.css";

import { useNavigate } from "react-router-dom";
import React from "react";
import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";

const Login = () => {
  const navigate = useNavigate();

  const goJoin = () => {
    navigate(`/join`);
  };

  const goLogin = () => {
    alert("로그인이 되었습니다!");
  };

  const goFindID = () => {
    navigate(`/find/id`);
  };

  const goFindPW = () => {
    navigate(`/find/password`);
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <MyHeader />
      <div className="login">
        <h2>로그인</h2>
        <div>
          <input className="inputID" placeholder="아이디를 입력하세요" />
        </div>
        <div>
          <input
            className="inputPW"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div>
          <button className="findIDButton" onClick={goFindID}>
            아이디 찾기
          </button>
          |
          <button className="findPWButton" onClick={goFindPW}>
            비밀번호 찾기
          </button>
        </div>
        <div>
          <button className="loginButton" onClick={goLogin}>
            로그인
          </button>
          <button className="joinButton" onClick={goJoin}>
            회원가입
          </button>
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

export default Login;
