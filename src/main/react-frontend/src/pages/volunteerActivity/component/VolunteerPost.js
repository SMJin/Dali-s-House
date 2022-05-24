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
    navigate(`/volunteerActivity/${id}/edit`);
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
      <h1>봉사활동 상세 페이지</h1>
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
      </div>
      <MyFooter />
    </div>
  );
};
export default VolunteerPost;
