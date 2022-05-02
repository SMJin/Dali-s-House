import "./css/Join.css";

import { useNavigate } from "react-router-dom";
import React, { useCallback, useState } from "react";
import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";

const Join = () => {
  const navigate = useNavigate();
  const goJoin = () => {
    alert("가입이 완료되었습니다!");
    navigate(`/`);
  };

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [count, setCount] = useState(1);

  //오류메시지 상태저장
  const [idMessage, setIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [numberMessage, setNumberMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  //유효성 검사
  const [IsId, setIsId] = useState(false);
  const [IsPassword, setIsPassword] = useState(false);
  const [IsPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [IsName, setIsName] = useState(false);
  const [IsNumber, setIsNumber] = useState(false);
  const [IsEmail, setIsEmail] = useState(false);

  const onChangeId = useCallback((e) => {
    const idRegex = /^[a-z|A-Z|0-9\b]{5,10}$/;
    const idCurrent = e.target.value;
    setId(idCurrent);
    if (!idRegex.test(idCurrent)) {
      setIdMessage("5글자 이상 입력해주세요!");
      setIsId(false);
    } else {
      setIdMessage("올바른 아이디 형식입니다.");
      setIsId(true);
    }
  }, []);

  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("올바른 비밀번호 형식입니다.");
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);
      if (password == passwordConfirmCurrent) {
        setPasswordConfirmMessage("비밀번호가 일치합니다.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage(
          "비밀번호가 일치하지 않습니다. 다시 입력해주세요."
        );
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

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

  const onChangeNumber = useCallback((e) => {
    const numberRegex = /^[0-9\b]{0,11}$/;
    const numberCurrent = e.target.value;
    if (numberRegex.test(numberCurrent)) {
      setNumber(numberCurrent);
    }
    if (numberCurrent.length < 10) {
      setNumberMessage("너무 짧습니다.");
      setIsNumber(false);
    } else {
      setNumberMessage("올바른 휴대폰 번호 형식입니다.");
      setIsNumber(true);
    }
  }, []);

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);
    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸습니다. 다시 확인해주세요!");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  }, []);

  const onChangeAgree = (e) => {
    if (count % 2 == 1) {
      setAgree(true);
    } else setAgree(false);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>회원가입 페이지</h1>
      <MyHeader />
      <div className="join">
        <h2>회원가입</h2>
        <hr />
        <div className="join_item">
          <div className="join_item_title">아이디</div>
          <input
            value={id}
            placeholder=" 10자 이하의 영문 혹은 숫자를 입력해주세요"
            type="text"
            maxLength="10"
            onChange={onChangeId}
          ></input>
        </div>
        <div className="join_item_message">
          <span
            className={`${IsId ? "join_input_success" : "join_input_error"}`}
          >
            {idMessage}
          </span>
        </div>
        <div className="join_item">
          <div className="join_item_title">비밀번호</div>
          <input
            value={password}
            placeholder=" 비밀번호를 입력해주세요"
            type="password"
            onChange={onChangePassword}
          ></input>
        </div>
        <div className="join_item_message">
          <span
            className={`${
              IsPassword ? "join_input_success" : "join_input_error"
            }`}
          >
            {passwordMessage}
          </span>
        </div>
        <div className="join_item">
          <div className="join_item_title">비밀번호 확인</div>
          <input
            value={passwordConfirm}
            placeholder=" 비밀번호를 한번 더 입력해주세요"
            type="password"
            onChange={onChangePasswordConfirm}
          ></input>
        </div>
        <div className="join_item_message">
          <span
            className={`${
              IsPasswordConfirm ? "join_input_success" : "join_input_error"
            }`}
          >
            {passwordConfirmMessage}
          </span>
        </div>
        <div className="join_item">
          <div className="join_item_title">이름</div>
          <input
            value={name}
            placeholder=" 이름을 입력해주세요"
            type="text"
            maxLength="5"
            onChange={onChangeName}
          ></input>
        </div>
        <div className="join_item_message">
          <span
            className={`${IsName ? "join_input_success" : "join_input_error"}`}
          >
            {nameMessage}
          </span>
        </div>
        <div className="join_item">
          <div className="join_item_title">휴대폰</div>
          <input
            value={number}
            placeholder=" 숫자만 입력해주세요"
            type="text"
            onChange={onChangeNumber}
          ></input>
        </div>
        <div className="join_item_message">
          <span
            className={`${
              IsNumber ? "join_input_success" : "join_input_error"
            }`}
          >
            {numberMessage}
          </span>
        </div>
        <div className="join_item">
          <div className="join_item_title">이메일</div>
          <input
            value={email}
            placeholder=" 예: dalishouse@naver.com"
            type="text"
            onChange={onChangeEmail}
          ></input>
        </div>
        <div className="join_item_message">
          <span
            className={`${IsEmail ? "join_input_success" : "join_input_error"}`}
          >
            {emailMessage}
          </span>
        </div>
        <div className="join_privacyCheck">
          <input type={"checkbox"} value={agree} onChange={onChangeAgree} />
          <label> 개인정보 수집 및 이용 동의</label>
        </div>
        <div>
          <input
            className="join_submitButton"
            type="button"
            value="가입하기"
            id="join_button"
            disabled={
              !(
                IsId &&
                IsPassword &&
                IsPasswordConfirm &&
                IsName &&
                IsNumber &&
                IsEmail &&
                agree
              )
            }
            onClick={goJoin}
          ></input>
        </div>
      </div>
      <MyFooter />
    </div>
  );
};
export default Join;
