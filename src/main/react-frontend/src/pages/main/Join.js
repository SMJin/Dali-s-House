import React, { useState, useEffect } from "react";

import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import "./css/Join.css";

const Join = () => {
  const goJoin = () => {
    alert("가입이 완료 되었습니다!");
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
                placeholder="5자 이상의 영문 혹은 영문과 숫자를 조합"
                type="text"
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
                placeholder="숫자만 입력해주세요"
                type="text"
                maxlength="11"
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
          <input type={"checkbox"} />
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
