import "./css/FindID.css";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";

const FindID = () => {
  const navigate = useNavigate();

  const [way, setWay] = useState("휴대폰 번호");
  const [wayE, setWayE] = useState(1);
  const [postposition, setPostposition] = useState("를");

  const goFindByPhoneNumber = () => {
    setWay("휴대폰 번호");
    setWayE(1);
    setPostposition("를");
    setInputValue("");
  };

  const goFindByEmail = () => {
    setWay("이메일");
    setWayE(0);
    setPostposition("을");
    setInputValue("");
  };

  const goFindID = () => {
    alert("아이디 찾기");
  };

  const goFindPW = () => {
    navigate(`/find/password`);
  };

  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const checkName = (e) => {
    const regex = /^[ㄱ-ㅎ|가-힣\b]{0,5}$/;

    if (regex.test(e.target.value)) {
      setName(e.target.value);
    }
  };

  const onChange = (e) => {
    const regex1 = /^[0-9\b]{0,11}$/;
    const regex2 = /^[0-9|a-z|A-Z|@|.\b]{0,30}$/;

    if (`${wayE}` == 1) {
      if (regex1.test(e.target.value)) {
        setInputValue(e.target.value);
      }
    } else {
      if (regex2.test(e.target.value)) {
        setInputValue(e.target.value);
      }
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
            value={inputValue}
            onChange={onChange}
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