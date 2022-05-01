import "./css/FindPW.css";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";

const FindPW = () => {
  const navigate = useNavigate();

  const [way, setWay] = useState("휴대폰 번호");
  const [wayID, setWayID] = useState(1);
  const [postposition, setPostposition] = useState("를");

  const goFindByPhoneNumber = () => {
    setWay("휴대폰 번호");
    setWayID(1);
    setPostposition("를");
    setInputValue("");
    setInputValid(0);
  };

  const goFindByEmail = () => {
    setWay("이메일");
    setWayID(0);
    setPostposition("을");
    setInputValue("");
    setInputValid(0);
  };

  const goFindPW = () => {
    if (id.length == 0) {
      alert("아이디를 입력해주세요.");
    } else if (inputValue.length == 0) {
      if (`${wayID}` == 1) {
        alert("휴대폰 번호를 입력해주세요.");
      } else alert("이메일을 입력해주세요.");
    } else if (`${inputValid}` == 0) {
      if (`${wayID}` == 1) {
        alert("휴대폰 번호를 올바르게 입력해주세요.");
      } else {
        alert("이메일 주소를 올바르게 입력해주세요.");
      }
    } else {
      if (`${wayID}` == 1) {
        alert("입력하신 번호로 임시 비밀번호가 발송되었습니다.");
      } else alert("입력하신 메일 주소로 임시 비밀번호가 발송되었습니다.");
    }
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

  const IsID = (e) => {
    var regExp = /^[a-z|A-Z|0-9\b]{5,10}$/;
    if (!regExp.test(e.target.value)) {
      alert("아이디가 너무 짧습니다. 확인 후 다시 입력해주세요.");
      setId("");
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [inputValid, setInputValid] = useState("");

  const onChange = (e) => {
    const regex1 = /^[0-9\b]{0,11}$/;
    const regex2 = /^[0-9|a-z|A-Z|@|.\b]{0,30}$/;

    if (`${wayID}` == 1) {
      if (regex1.test(e.target.value)) {
        setInputValue(e.target.value);
      }
    } else {
      if (regex2.test(e.target.value)) {
        setInputValue(e.target.value);
      }
    }
  };

  const onBlur = (e) => {
    const regex1 = /^[0-9\b]{10,11}$/;
    var regExp2 =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (`${wayID}` == 1) {
      if (!regex1.test(e.target.value)) {
        alert("번호가 너무 짧습니다. 확인 후 다시 입력해주세요.");
        setInputValid(1);
      } else {
        setInputValid(1);
      }
    } else {
      if (!regExp2.test(e.target.value)) {
        alert("이메일 형식이 올바르지 않습니다.");
        setInputValid(1);
      } else {
        setInputValid(1);
      }
    }
  };

  return (
    <div>
      <h1>비밀번호 찾기 페이지</h1>
      <MyHeader />
      <div className="findPW">
        <h2>비밀번호 찾기</h2>
        <div>
          <button className="byPhoneNumber" onClick={goFindByPhoneNumber}>
            휴대폰 인증
          </button>
          <button className="byEmail" onClick={goFindByEmail}>
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
            onBlur={IsID}
          ></input>
        </div>
        <div>
          <div className="findPwTitle">{way}</div>
          <input
            className="findPwInput"
            type="text"
            placeholder={`${way}${postposition} 입력하세요`}
            value={inputValue}
            onChange={onChange}
            onBlur={onBlur}
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
