import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyFooter from "../../../components/MyFooter";
import MyHeader from "../../../components/MyHeader";
import ProgressBar from "../../../components/ProgressBar";

import "./css/VolunteerPost.css";
import { VolunteerDataList } from "./VolunteerDataList";

const VolunteerPost = () => {
  const navigate = useNavigate();

  const goVolunteerEdit = () => {
    window.confirm("주의사항을 숙지하셨습니까?");
    navigate(`/volunteerActivity/${id}/apply`);
  };

  const { id } = useParams();

  const [byApply, setByApply] = useState("true");
  useEffect(() => {
    if (VolunteerDataList[id - 1].completed == 100) {
      setByApply(false);
    }
  });

  return (
    <div>
      <MyHeader />
      <div className="volunteerPost">
        <div className="volunteerPostTitleWrapper">
          <h3>봉사활동 상세</h3>
          <div className="volunteerPostTitleButtonWrapper">
            <button
              className="volunteerPostHeaderCloseButton"
              onClick={() => {
                navigate(-1, { replace: true });
              }}
            >
              × 닫기
            </button>
          </div>
        </div>
        <div className="volunteerPostContentWrapper">
          <div class="volunteerPostImageWrapper">
            <img
              class="volunteerPostImage"
              src={
                process.env.PUBLIC_URL +
                `/assets/volunteer/volunteer_${
                  VolunteerDataList[id - 1].id % 8
                }.png`
              }
            />
          </div>
          <div className="volunteerPostTextWrapper">
            <div className="volunteerPostTitle">
              {VolunteerDataList[id - 1].title}
            </div>
            <div className="volunteerPostOrgan">
              {VolunteerDataList[id - 1].organ}
            </div>
            <div className="volunteerPostPeriod">
              접수 기간 : {VolunteerDataList[id - 1].application_period}
            </div>
            <div className="volunteerPostDate">
              활동 날짜 : {VolunteerDataList[id - 1].date}
            </div>
            <div className="volunteerProgressBar">
              <ProgressBar
                key={id}
                completed={VolunteerDataList[id - 1].completed}
              />
            </div>
            <div className="volunteerProgressDegree">
              <div className="volunteerPercentage">{`${
                VolunteerDataList[id - 1].completed
              }%`}</div>
              <div className="volunteerCount">
                <span className="volunteerPresent">
                  {VolunteerDataList[id - 1].recruitment_cur}명&nbsp;/
                </span>
                <span className="volunteerTotal">
                  {" "}
                  {VolunteerDataList[id - 1].recruitment_limit}명
                </span>
              </div>
            </div>
            <div className="volunteerPostApplyButtonWrapper">
              <button
                className={`${byApply ? "apply_on" : "apply_off"}`}
                disabled={!byApply}
                onClick={goVolunteerEdit}
              >
                + 신청하기
              </button>
            </div>
          </div>
        </div>
        <div className="volunteerNotice">
          <span className="volunteerNoticeTitle">
            <b>주의사항 안내</b>
          </span>
          <br />
          <br />
          주의사항을 안내드립니다. <br />
          이런분들은 참여하실 수 없습니다.
          <br />
          <br />
          - 보호소에는 소형견 뿐만 아니라 대형견도 많습니다. 개를 무서워하시는
          분들은 참여를 자제해주세요.
          <br />
          - 중간에 이탈하시는 분들이 많습니다. 끝까지 함께하실 분들만 참여
          부탁드립니다.
          <br />
          - 다수의 사람들이 다녀가는 곳으로, 백신 2차 완료자만 참여하실 수
          있습니다. (현장에서 확인합니다.)
          <br />- 단체 참여는 센터로 문의주세요.
        </div>
      </div>
      <MyFooter />
    </div>
  );
};
export default VolunteerPost;
