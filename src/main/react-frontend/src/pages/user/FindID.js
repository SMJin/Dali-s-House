import "./css/FindID.css";

import { useNavigate } from "react-router-dom";
import React, { useCallback, useState } from "react";
import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";

const FindID = () => {
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

  const goFindID = () => {
    alert("회원님의 아이디는 '     ' 입니다.");
  };

  const goFindPW = () => {
    navigate(`/find/password`);
  };

  const [name, setName] = useState("");
  const [input, setInput] = useState("");

  const [nameMessage, setNameMessage] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  const [IsName, setIsName] = useState(false);
  const [IsInput, setIsInput] = useState("");

  const onChangeName = useCallback((e) => {
    const nameRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣\b]{0,5}$/;
    const nameRegex2 = /^[가-힣]{0,5}$/;
    const nameCurrent = e.target.value;
    if (nameRegex.test(nameCurrent)) {
      setName(nameCurrent);
    }
    if ((nameCurrent.length < 2) | !nameRegex2.test(nameCurrent)) {
      setNameMessage("2글자 이상 한글 단어로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다.");
      setIsName(true);
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
      <div className="findID">
        <h2>아이디 찾기</h2>
        <div>
          <button
            className={`${byPhone ? "button_on" : "button_off"}`}
            onClick={goFindByPhoneNumber}
            id="byPhone"
          >
            휴대폰 인증
          </button>
          <button
            className={`${byEmail ? "button_on" : "button_off"}`}
            onClick={goFindByEmail}
            id="byEmail"
          >
            이메일 인증
          </button>
        </div>
        <div>
          <div className="findIdTitle">이름</div>
          <input
            className="findIdInput"
            type="text"
            placeholder="이름을 입력하세요"
            maxLength="5"
            value={name}
            onChange={onChangeName}
          />
          <div className="find_item_message">
            <span className={`${IsName ? "input_success" : "input_error"}`}>
              {nameMessage}
            </span>
          </div>
        </div>
        <div>
          <div className="findIdTitle">{way}</div>
          <input
            className="findIdInput"
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
          className="goFindId"
          type="button"
          value="확인"
          disabled={!(IsName && IsInput)}
          onClick={goFindID}
        />
        <button className="goFindPW" onClick={goFindPW}>
          비밀번호 찾기
        </button>
      </div>
      <MyFooter />
    </div>
  );
};
export default FindID;
