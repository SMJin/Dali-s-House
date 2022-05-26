import "./css/FindPW.css";

import { useNavigate } from "react-router-dom";
import React, { useCallback, useState } from "react";
import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";

const FindPW = () => {
  const navigate = useNavigate();

  const [way, setWay] = useState("휴대폰 번호");
  const [wayID, setWayID] = useState(true);
  const [postposition, setPostposition] = useState("를");
  const [byPhone, setByPhone] = useState(true);
  const [byEmail, setByEmail] = useState(false);

  const goFindByPhoneNumber = () => {
    setWay("휴대폰 번호");
    setWayID(true);
    setPostposition("를");
    setInput("");
    setInputMessage("");
    setIsInput(false);
    setByPhone(true);
    setByEmail(false);
  };

  const goFindByEmail = () => {
    setWay("이메일");
    setWayID(false);
    setPostposition("을");
    setInput("");
    setInputMessage("");
    setIsInput(false);
    setByPhone(false);
    setByEmail(true);
  };

  const goFindPW = () => {
    if (wayID) {
      alert("입력하신 번호로 임시 비밀번호가 발송되었습니다.");
    } else alert("입력하신 메일 주소로 임시 비밀번호가 발송되었습니다.");
  };

  const goFindID = () => {
    navigate(`/find/id`);
  };

  const [id, setId] = useState("");
  const [input, setInput] = useState("");

  const [idMessage, setIdMessage] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const [IsId, setIsId] = useState(false);
  const [IsInput, setIsInput] = useState("");

  const onChangeId = useCallback((e) => {
    const idRegex = /^[a-z|A-Z|0-9\b]{5,10}$/;
    const idCurrent = e.target.value;
    setId(idCurrent);
    if (!idRegex.test(idCurrent)) {
      setIdMessage("영문, 숫자만 가능합니다(5~10자).");
      setIsId(false);
    } else {
      setIdMessage("올바른 아이디 형식입니다.");
      setIsId(true);
    }
  }, []);

  const onChangeInput = (e) => {
    const numberRegex = /^[0-9\b]{0,11}$/;
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const inputCurrent = e.target.value;

    if (wayID) {
      if (numberRegex.test(inputCurrent)) {
        setInput(inputCurrent);
      }
      if (inputCurrent.length < 10) {
        setInputMessage("너무 짧습니다.");
        setIsInput(false);
      } else {
        setInputMessage("올바른 휴대폰 번호 형식입니다.");
        setIsInput(true);
      }
    } else {
      setInput(inputCurrent);
      if (!emailRegex.test(inputCurrent)) {
        setInputMessage("이메일 형식이 틀렸습니다. 다시 확인해주세요!");
        setIsInput(false);
      } else {
        setInputMessage("올바른 이메일 형식입니다.");
        setIsInput(true);
      }
    }
  };

  return (
    <div>
      <MyHeader />
      <div className="findPW">
        <h2>비밀번호 찾기</h2>
        <div>
          <button
            className={`${byPhone ? "button_on" : "button_off"}`}
            onClick={goFindByPhoneNumber}
          >
            휴대폰 인증
          </button>
          <button
            className={`${byEmail ? "button_on" : "button_off"}`}
            onClick={goFindByEmail}
          >
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
            maxLength="10"
            onChange={onChangeId}
          ></input>
        </div>
        <div className="find_item_message">
          <span className={`${IsId ? "input_success" : "input_error"}`}>
            {idMessage}
          </span>
        </div>
        <div>
          <div className="findIdTitle">{way}</div>
          <input
            className="findPwInput"
            type="text"
            placeholder={`${way}${postposition} 입력하세요`}
            value={input}
            onChange={onChangeInput}
          />
          <div className="find_item_message">
            <span className={`${IsInput ? "input_success" : "input_error"}`}>
              {inputMessage}
            </span>
          </div>
        </div>
        <input
          className="goFindPw"
          type="button"
          value="확인"
          disabled={!(IsId && IsInput)}
          onClick={goFindPW}
        />
        <button className="goFindID" onClick={goFindID}>
          아이디 찾기
        </button>
      </div>
      <MyFooter />
    </div>
  );
};

export default FindPW;
