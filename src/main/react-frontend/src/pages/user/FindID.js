import "./css/FindID.css";

import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";

const FindID = () => {
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

  const goFindID = () => {
    if (name.length == 0) {
      alert("이름을 입력해주세요.");
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

  const goFindPW = () => {
    navigate(`/find/password`);
  };

  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputValid, setInputValid] = useState("");

  const checkName = (e) => {
    const regex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣\b]{0,5}$/;

    if (regex.test(e.target.value)) {
      setName(e.target.value);
    }
  };

  const IsName = (e) => {
    var regExp = /^[가-힣]{0,5}$/;
    if (!regExp.test(e.target.value)) {
      alert("단어 형식으로 입력해주세요");
      setName("");
    }
  };

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
        setInputValid(0);
      } else {
        setInputValid(1);
      }
    } else {
      if (!regExp2.test(e.target.value)) {
        alert("이메일 형식이 올바르지 않습니다.");
        setInputValid(0);
      } else {
        setInputValid(1);
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
            onBlur={IsName}
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
            onBlur={onBlur}
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
