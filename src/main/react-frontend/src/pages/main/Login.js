import "./css/Login.css";

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import MyButton from "../../components/MyButton";

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

/*
const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log("click login");
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      axios
        .get("/user_inform/login")
        .then((res) => console.log(res))
        .catch();
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );
*/

/*
<div>
          <label htmlFor="input_id" />
          <input
            type="text"
            name="input_id"
            value={inputId}
            onChange={handleInputId}
            placeholder="아이디를 입력해주세요"
          />
        </div>
        <div>
          <label htmlFor="input_pw" />
          <input
            type="text"
            name="input_pw"
            value={inputPw}
            onChange={handleInputPw}
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div>
          <button type="button" onClick={onClickLogin}>
            로그인
          </button>
          <button type="button" onClick={goJoin}>
            회원가입
          </button>
        </div>
*/
