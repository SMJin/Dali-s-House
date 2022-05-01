import "./css/FindID.css";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";

const FindID = () => {
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

  const goFindID = () => {
    alert("아이디 찾기");
  };

  const goFindPW = () => {
    navigate(`/find/password`);
  };

  const [name, setName] = useState("");

  const checkName = (e) => {
    const regex = /^[ㄱ-ㅎ|가-힣\b]{0,5}$/;

    if (regex.test(e.target.value)) {
      setName(e.target.value);
    }
  };

  return (
    <div>
      <h1>아이디 찾기 페이지</h1>
      <MyHeader />
      <div className="findID">
        <h2>아이디 찾기</h2>
        <div>
          <button className="byPhoneNumber" onClick={goFindByPhoneNumber}>
            휴대폰 인증
          </button>
          <button className="byEmail" onClick={goFindByEmail}>
            이메일 인증
          </button>
        </div>
        <div>
          <div className="findIdTitle">이름</div>
          <input
            className="findIdInput"
            type="text"
            placeholder="이름을 입력하세요"
            value={name}
            onChange={checkName}
          ></input>
        </div>
        <div>
          <div className="findIdTitle">{way}</div>
          <input
            className="findIdInput"
            type="text"
            placeholder={`${way}${postposition} 입력하세요`}
          ></input>
        </div>
        <button className="goFindId" onClick={goFindID}>
          확인
        </button>
        <button className="goFindPW" onClick={goFindPW}>
          비밀번호 찾기
        </button>
      </div>
      <MyFooter />
    </div>
  );
};

export default FindID;
