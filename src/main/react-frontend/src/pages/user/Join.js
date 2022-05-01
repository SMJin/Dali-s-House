import React, { useState } from "react";

import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import "./css/Join.css";

const Join = () => {
  const goJoin = () => {
    if (id.length == 0) {
      alert("아이디를 입력해주세요.");
    } else if (password.length == 0) {
      alert("비밀번호를 입력해주세요.");
    } else if (name.length == 0) {
      alert("이름을 입력해주세요.");
    } else if (email.length == 0) {
      alert("이메일을 입력해주세요.");
    } else if (number.length == 0) {
      alert("휴대폰 번호를 입력해주세요.");
    } else if (`${idValid}` == 0) {
      alert("아이디를 올바르게 입력해주세요.");
    } else if (`${passwordValid}` == 0) {
      alert("비밀번호를 올바르게 입력해주세요.");
    } else if (`${nameValid}` == 0) {
      alert("이름을 올바르게 입력해주세요.");
    } else if (`${emailValid}` == 0) {
      alert("이메일을 올바르게 입력해주세요.");
    } else if (`${agree}` == 0) {
      alert("개인정보 수집 및 이용 동의에 동의해주세요.");
    } else if (`${numberValid}` == 0) {
      alert("휴대폰 번호를 올바르게 입력해주세요.");
    } else {
      alert("가입이 완료 되었습니다!");
    }
  };

  const goConfirmRepetition = () => {
    alert("사용 가능합니다");
  };

  const goVerificationCode = () => {
    alert("인증번호가 발송되었습니다");
  };

  const goFindAddress = () => {
    alert("주소 찾기");
  };

  const [id, setId] = useState("");
  const [idValid, setIdValid] = useState("");

  const checkId = (e) => {
    const regex = /^[a-z|A-Z|0-9\b]{0,10}$/;

    if (regex.test(e.target.value)) {
      setId(e.target.value);
    }
  };

  const IsID = (e) => {
    if (id.length < 5) {
      alert("너무 짧습니다.");
      setId("");
      setIdValid(0);
    } else {
      setIdValid(1);
    }
  };

  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(0);

  const checkPassword = (e) => {
    setPassword(e.target.value);
  };

  const IsPassword = () => {
    if (password.length < 5) {
      alert("너무 짧습니다.");
      setPasswordValid(0);
    } else {
      setPasswordValid(1);
    }
  };

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmpasswordValid, setConfirmPasswordValid] = useState(0);

  const checkConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const IsConfirmPassword = () => {
    if (password != confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      setConfirmPassword("");
      setConfirmPasswordValid(0);
    } else {
      setConfirmPasswordValid(1);
    }
  };

  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState("");

  const checkName = (e) => {
    const regex = /^[ㄱ-ㅎ|가-힣\b]{0,5}$/;

    if (regex.test(e.target.value)) {
      setName(e.target.value);
    }
  };

  const IsName = (e) => {
    var regExp = /^[가-힣]{0,5}$/;
    if (!regExp.test(e.target.value)) {
      alert("단어 형식으로 입력해주세요");
      setName("");
      setNameValid(0);
    } else {
      setNameValid(1);
    }
  };

  const [number, setNumber] = useState("");
  const [numberValid, setNumberValid] = useState(0);

  const checkNumber = (e) => {
    const regex = /^[0-9\b]{0,11}$/;

    if (regex.test(e.target.value)) {
      setNumber(e.target.value);
    }
  };

  const IsNumber = (e) => {
    if (number.length < 10) {
      alert("번호가 너무 짧습니다. 확인 후 다시 입력해주세요.");
      setNumberValid(0);
    } else {
      setNumberValid(1);
    }
  };

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(0);

  const checkEmail = (e) => {
    const regex = /^[0-9|a-z|A-Z|@|.\b]{0,30}$/;

    if (regex.test(e.target.value)) {
      setEmail(e.target.value);
    }
  };

  const IsEmail = (e) => {
    var regExp =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!regExp.test(e.target.value)) {
      alert("이메일 형식이 올바르지 않습니다.");
      setEmailValid(0);
    } else {
      setEmailValid(1);
    }
  };

  const [agree, setAgree] = useState(0);

  const checkAgree = () => {
    setAgree(1);
  };

  return (
    <div>
      <h1>회원가입 페이지</h1>
      <MyHeader />
      <div className="join">
        <h2>회원가입</h2>
        <hr />
        <div>
          <div className="join_ID">
            <div className="left_type">아이디</div>
            <div className="middle_input">
              <input
                className="newID"
                placeholder="5자 이상 10자 이하의 영문 혹은 숫자를 조합해주세요"
                type="text"
                value={id}
                maxLength="10"
                onChange={checkId}
                onBlur={IsID}
              />
            </div>
            <div className="right_button">
              <button className="GoCRButton" onClick={goConfirmRepetition}>
                중복확인
              </button>
            </div>
          </div>
          <div className="join_PW">
            <div className="left_type">비밀번호</div>
            <div className="middle_input">
              <input
                className="newPW"
                placeholder="비밀번호를 입력해주세요"
                type="password"
                maxLength="15"
                value={password}
                onChange={checkPassword}
                onBlur={IsPassword}
              />
            </div>
            <div className="right_button"></div>
          </div>
          <div className="join_PW_confirm">
            <div className="left_type">비밀번호 확인</div>
            <div className="middle_input">
              <input
                className="confirmPW"
                placeholder="비밀번호를 한번 더 입력해주세요"
                type="password"
                maxLength="15"
                value={confirmPassword}
                onChange={checkConfirmPassword}
                onBlur={IsConfirmPassword}
              />
            </div>
            <div className="right_button"></div>
          </div>
          <div className="join_name">
            <div className="left_type">이름</div>
            <div className="middle_input">
              <input
                className="newName"
                placeholder="이름을 입력해주세요"
                type="text"
                value={name}
                onChange={checkName}
                onBlur={IsName}
              />
            </div>
            <div className="right_button"></div>
          </div>
          <div className="join_email">
            <div className="left_type">이메일</div>
            <div className="middle_input">
              <input
                className="newEmail"
                placeholder="예: dalishouse@naver.com"
                type="text"
                value={email}
                onChange={checkEmail}
                onBlur={IsEmail}
              />
            </div>
            <div className="right_button">
              <button className="GoCRButton" onClick={goConfirmRepetition}>
                중복확인
              </button>
            </div>
          </div>
          <div className="join_hp">
            <div className="left_type">휴대폰</div>
            <div className="middle_input">
              <input
                className="newHP"
                value={number}
                placeholder="숫자만 입력해주세요"
                type="text"
                maxlength="11"
                onChange={checkNumber}
                onBlur={IsNumber}
              />
            </div>
            <div className="right_button">
              <button className="GoVCButton" onClick={goVerificationCode}>
                인증번호 받기
              </button>
            </div>
          </div>
          <div className="join_address">
            <div className="left_type">주소</div>
            <div className="middle_input">
              <button className="GoFindADRButton" onClick={goFindAddress}>
                주소찾기
              </button>
            </div>
            <div className="right_button"></div>
          </div>
          <div className="join_sex">
            <div className="left_type">성별</div>
            <div className="middle_input">
              <button className="sex_male">남자</button>
              <button className="sex_female">여자</button>
            </div>
            <div className="right_button"></div>
          </div>
          <div className="join_birth">
            <div className="left_type">생년월일</div>
            <div className="middle_input">
              <input className="newBirth" type="date" />
            </div>
            <div className="right_button"></div>
          </div>
        </div>
        <div>
          <input type={"checkbox"} value={agree} onClick={checkAgree} />
          <label>개인정보 수집 및 이용 동의</label>
        </div>
        <div>
          <button className="GoJoinButton" onClick={goJoin}>
            가입하기
          </button>
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

export default Join;
