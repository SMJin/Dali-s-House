import "./css/Login.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";

const Login = () => {
  useEffect(() => {
    axios({
      url: "/api/user/login",
      method: "POST",
      data: {
        userId: id,
        password: password,
      },
    });
  }, []);

  const navigate = useNavigate();

  // const confirm = JSON.parse(localStorage.getItem("user"));

  // useEffect(() => {
  //   if (confirm != null) {
  //     for (let i = 0; i < confirm.length; i++) {
  //       if (confirm[i].id == id && confirm[i].password == password) {
  //         setisValid(true);
  //         break;
  //       } else setisValid(false);
  //     }
  //   }
  // });

  const goJoin = () => {
    navigate(`/join`);
  };

  const goLogin = () => {
    alert("로그인이 되었습니다!");
    navigate(`/`);
  };

  const goFindID = () => {
    navigate(`/find/id`);
  };

  const goFindPW = () => {
    navigate(`/find/password`);
  };

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeId = (e) => {
    const regex = /^[a-z|A-Z|0-9\b]{0,10}$/;

    if (regex.test(e.target.value)) {
      setId(e.target.value);
    }
  };

  const onChangePW = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <MyHeader />
      <div className="login">
        <h2>로그인</h2>
        <div>
          <input
            className="inputID"
            placeholder="아이디를 입력하세요"
            type="text"
            value={id}
            maxLength="10"
            onChange={onChangeId}
          />
        </div>
        <div>
          <input
            className="inputPW"
            type="password"
            placeholder="비밀번호를 입력하세요"
            maxLength="15"
            value={password}
            onChange={onChangePW}
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
          <input
            className="loginButton"
            type="button"
            value="로그인"
            id="login_button"
            disabled={!(id.length && password.length)}
            onClick={goLogin}
          />
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
