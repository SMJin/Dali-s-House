import "./css/FindPW.css";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";

const FindPW = () => {
  const navigate = useNavigate();

  const [way, setWay] = useState("휴대폰 번호");
  const [postposition, setPostposition] = useState("를");

  const goFindByPhoneNumber = () => {
    setWay("휴대폰 번호");
    setPostposition("를");
  };

  const goFindByEmail = () => {
    setWay("이메일");
    setPostposition("을");
  };

  const goFindPW = () => {
    alert("비밀번호 찾기");
  };

  const goFindID = () => {
    navigate(`/find/id`);
  };

  const [id, setId] = useState("");

  const checkId = (e) => {
    const regex = /^[a-z|A-Z|0-9\b]{0,10}$/;

    if (regex.test(e.target.value)) {
      setId(e.target.value);
    }
  };

  return (
    <div>
      <h1>비밀번호 찾기 페이지</h1>
      <MyHeader />
      <div className="findPW">
        <h2>비밀번호 찾기</h2>
        <div>
          <button
            className="byPhoneNumber"
            onClick={goFindByPhoneNumber}
            id={"number"}
          >
            휴대폰 인증
          </button>
          <button className="byEmail" onClick={goFindByEmail} id={"email"}>
            이메일 인증
          </button>
        </div>
        <div>
          <div className="findPwTitle">아이디</div>
          <input
            className="findPwInput"
            type="text"
            placeholder="아이디를 입력하세요"
            value={id}
            onChange={checkId}
          ></input>
        </div>
        <div>
          <div className="findIdTitle">{way}</div>
          <input
            className="findPwInput"
            type="text"
            placeholder={`${way}${postposition} 입력하세요`}
          ></input>
        </div>
        <button className="goFindPw" onClick={goFindPW}>
          확인
        </button>
        <button className="goFindID" onClick={goFindID}>
          아이디 찾기
        </button>
      </div>
      <MyFooter />
    </div>
  );
};

export default FindPW;
