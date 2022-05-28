import "./css/VolunteerApply.css";
import MyFooter from "../../../components/MyFooter";
import MyHeader from "../../../components/MyHeader";
import { useNavigate, useParams } from "react-router-dom";
import { VolunteerDataList } from "./VolunteerDataList";
import { useCallback, useState } from "react";

const VolunteerApply = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // 수정 시작
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [count, setCount] = useState(1);

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState("");
  const [birthMessage, setBirthMessage] = useState("");
  const [numberMessage, setNumberMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  //유효성 검사
  const [IsName, setIsName] = useState(false);
  const [IsBirth, setIsBirth] = useState(false);
  const [IsNumber, setIsNumber] = useState(false);
  const [IsEmail, setIsEmail] = useState(false);
  const [IsMale, setIsMale] = useState(true);
  const [IsFemale, setIsFemale] = useState(false);

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

  const onChangeBirth = useCallback((e) => {
    const numberRegex = /^[0-9\b]{0,8}$/;
    const numberCurrent = e.target.value;
    if (numberRegex.test(numberCurrent)) {
      setBirth(numberCurrent);
    }
    if (numberCurrent.length < 8) {
      setBirthMessage("YYYYMMDD의 형식으로 입력해주세요.");
      setIsBirth(false);
    } else {
      setBirthMessage("올바른 생일 형식입니다.");
      setIsBirth(true);
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

  const setMale = (e) => {
    setIsMale(true);
    setIsFemale(false);
  };

  const setFemale = (e) => {
    setIsFemale(true);
    setIsMale(false);
  };

  // 수정 끝

  return (
    <div>
      <MyHeader />
      <div className="volunteerApply">
        <div className="volunteerApplyTitleWrapper">
          <h3>봉사활동 신청서 작성</h3>
          <button
            className="volunteerPostHeaderCloseButton"
            onClick={() => {
              navigate(-1, { replace: true });
            }}
          >
            × 닫기
          </button>
        </div>
        <div className="volunteerApplyContentWrapper">
          <div className="volunteerApplyInputWrapper">
            <div className="applyItem">
              <div className="applyItemTitle">이름</div>
              <input
                value={name}
                placeholder=" 이름을 입력해주세요"
                type="text"
                maxLength="5"
                onChange={onChangeName}
              />
            </div>
            <div className="applyItemMessage">
              <span className={`${IsName ? "inputSuccess" : "inputError"}`}>
                {nameMessage}
              </span>
            </div>
            <div className="applyItem">
              <div className="applyItemTitle">출생년도</div>
              <input
                value={birth}
                placeholder="예: 20220524"
                type="text"
                onChange={onChangeBirth}
              />
            </div>
            <div className="applyItemMessage">
              <span className={`${IsBirth ? "inputSuccess" : "inputError"}`}>
                {birthMessage}
              </span>
            </div>
            <div className="applyItem">
              <div className="applyItemTitle">성별</div>
              <button
                className={`${IsMale ? "onMale" : "offMale"}`}
                onClick={setMale}
              >
                남자
              </button>
              <button
                className={`${IsFemale ? "onFemale" : "offFemale"}`}
                onClick={setFemale}
              >
                여자
              </button>
            </div>
            <div className="applyItem">
              <div className="applyItemTitle">휴대폰 번호</div>
              <input
                value={number}
                placeholder=" 숫자만 입력해주세요"
                type="text"
                onChange={onChangeNumber}
              />
            </div>
            <div className="applyItemMessage">
              <span className={`${IsNumber ? "inputSuccess" : "inputError"}`}>
                {numberMessage}
              </span>
            </div>
            <div className="applyItem">
              <div className="applyItemTitle">이메일</div>
              <input
                value={email}
                placeholder=" 예: dalishouse@naver.com"
                type="text"
                onChange={onChangeEmail}
              />
            </div>
            <div className="applyItemMessage">
              <span className={`${IsEmail ? "inputSuccess" : "inputError"}`}>
                {emailMessage}
              </span>
            </div>
          </div>
          <div className="volunteerApplyInfoWrapper">
            <img
              class="volunteerPostImage_Apply"
              src={
                process.env.PUBLIC_URL +
                `/assets/volunteer/volunteer_${
                  VolunteerDataList[id - 1].id % 8
                }.png`
              }
            />
            <div className="volunteerPostTitle_Apply">
              {VolunteerDataList[id - 1].title}
            </div>
            <div className="volunteerPostOrgan_Apply">
              {VolunteerDataList[id - 1].organ}
            </div>
            <div className="volunteerPostOrgan_Apply">
              <b>활동 날짜 : {VolunteerDataList[id - 1].date}</b>
            </div>
            <div className="volunteerCount_Apply">
              <span className="volunteerPresent_Apply">
                인원: {VolunteerDataList[id - 1].recruitment_cur}명&nbsp;/
              </span>
              <span className="volunteerTotal_Apply">
                {" "}
                {VolunteerDataList[id - 1].recruitment_limit}명
              </span>
            </div>
          </div>
        </div>
        <div className="volunteerPrivacyCheck">
          <input
            className="volunteerPrivacyCheck_checkbox"
            type={"checkbox"}
            value={agree}
            onChange={onChangeAgree}
          />
          <label className="volunteerPrivacyCheck_label">
            {" "}
            개인정보 수집 및 이용 동의
          </label>
        </div>
        <div className="volunteerPrivacyNotice">
          1. 개인정보 수집 이용목적 <br />
          <nbsp /> <nbsp /> <nbsp /> 봉사참여 신청, 상담 및 관련 서비스 제공{" "}
          <br />
          2. 개인정보 수집항목 <br />
          <nbsp /> <nbsp /> <nbsp /> (필수) 이름, 출생년도, 휴대폰 번호, 이메일
          주소 <br />
          3. 개인정보 보유 이용기간 <br />
          <nbsp /> <nbsp /> <nbsp /> 준영구 <br />
          4. 귀하는 개인정보 수집 이용에 동의하지 않으실 수 있습니다. 단,
          봉사활동을 위한 최소한의 정보인 필수
          <br />
          <nbsp /> <nbsp /> <nbsp /> 정보는 미 입력시 봉사활동 참여가 제한됨을
          알려드립니다.
        </div>
        <button
          className="volunteerSubmitButton"
          disabled={!(IsName && IsBirth && IsNumber && IsEmail && agree)}
          onClick={() => {
            alert("제출이 완료되었습니다!");
            navigate(-1, { replace: true });
          }}
        >
          제출하기
        </button>
      </div>
      <MyFooter />
    </div>
  );
};
export default VolunteerApply;

//&& agree
