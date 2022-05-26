import { useLocation, useNavigate } from "react-router-dom";

import "./css/AdoptionApply.css";
import MyFooter from "../../../components/MyFooter";
import MyHeader from "../../../components/MyHeader";
import { useState } from "react";

const AdoptionApply = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const data = location.state;

  const [agree, setAgree] = useState(false);
  const [count, setCount] = useState(1);

  const onChangeAgree = (e) => {
    if (count % 2 == 1) {
      setAgree(true);
    } else setAgree(false);
    setCount(count + 1);
  };

  return (
    <div>
      <MyHeader />
      <div className="adoptionApply">
        <div className="adoptionApplyTitleWrapper">
          <h3>입양 신청서 작성</h3>
          <button
            className="volunteerPostHeaderCloseButton"
            onClick={() => {
              navigate(-1, { replace: true });
            }}
          >
            × 닫기
          </button>
        </div>
        <div className="adoptionContentWrapper">
          <div className="adoptionTextWrapper">
            <div className="adoptionProtectorWrapper">
              <div className="sectionTitle"> 보호자 정보를 입력해주세요</div>

              <div className="applyItem">
                <div className="applyItemTitle_adoption">직업</div>
                <input
                  className="applyItemInput"
                  placeholder="어떤 일을 하고 계신가요?"
                  type="text"
                />
              </div>
              <div className="applyItem">
                <div className="applyItemTitle_adoption">수입</div>
                <input
                  className="applyItemInput"
                  placeholder="한달 평균 수입은 어떻게 되시나요?"
                  type="text"
                />
              </div>
            </div>
            <div className="adoptionExperienceWrapper">
              <div className="sectionTitle"> 반려동물 경험을 입력해주세요</div>
              <div className="applyItem">
                <div className="applyItemTitle_adoption">품종</div>
                <input
                  className="applyItemInput"
                  placeholder="키워본 반려동물의 종은 무엇인가요?"
                  type="text"
                />
              </div>
              <div className="applyItem">
                <div className="applyItemTitle_adoption">기간</div>
                <input
                  className="applyItemInput"
                  placeholder="같이 살았던 기간은 어느정도인가요?"
                  type="text"
                />
              </div>
            </div>
            <div className="adoptionConditionWrapper">
              <div className="sectionTitle"> 입양하는 환경을 입력해주세요</div>

              <div className="applyItem">
                <input
                  className="applyItemInput"
                  placeholder="하루에 몇 시간을 함께 보낼 수 있나요?"
                  type="text"
                />
              </div>
              <div className="applyItem">
                <input
                  className="applyItemInput"
                  placeholder="한달에 반려동물에게 얼마정도 사용하실 수 있나요?"
                  type="text"
                />
              </div>
              <div className="applyItem">
                <input
                  className="applyItemInput"
                  placeholder="가족 구성원은 몇 명인가요?"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="adoptionPostInfoWrapper">
            <img className="adoptionApplyPostImg" src={data.img} />
            <div className="adoptionApplyPostName">{data.name}</div>
            <div className="adoptionApplyPostDetail1">
              {data.age} · {data.sex == "M" ? "남아♂" : "여아♀"}
            </div>
            <span className="adoptionApplyPostDetail2">
              {data.species} | {data.breedOf}
            </span>
            <div className="adoptionApplyPostExplainWrapper">
              <span className="adoptionApplyPostExplain">
                누구보다 활동적이고 웃음 많은 {data.name}입니다.
              </span>
              <span className="adoptionApplyPostExplain">
                활동적인 걸 좋아해서 마당이 있는 집이나
              </span>
              <span className="adoptionApplyPostExplain">
                산책을 자주 할 수 있으면
              </span>
              <span className="adoptionApplyPostExplain">
                {data.name}(이)가 아주 좋아할거에요!
              </span>
            </div>
          </div>
        </div>
        <div className="adoptionPrivacyCheck">
          <input
            className="adoptionPrivacyCheck_checkbox"
            type={"checkbox"}
            value={agree}
            onChange={onChangeAgree}
          />
          <label className="adoptionPrivacyCheck_label">
            {" "}
            개인정보 수집 및 이용 동의
          </label>
        </div>
        <div className="adoptionPrivacyNotice">
          1. 해당 문서는 보호소에서 작성자님을 파악하는데 사용하는 문서 입니다.{" "}
          <br />
          2. 본 문서는 해당 보호소에만 전달되고 어디에도 공유되지 않으며 접수
          1주일 후 파기됩니다. <br />
        </div>
        <button
          className="adoptionSubmitButton"
          disabled={!agree}
          onClick={() => {
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
export default AdoptionApply;

//IsName && IsBirth && IsNumber && IsEmail &&
