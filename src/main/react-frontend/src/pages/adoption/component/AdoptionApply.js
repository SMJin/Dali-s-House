import { useNavigate } from "react-router-dom";

import "./css/AdoptionApply.css";
import MyFooter from "../../../components/MyFooter";
import MyHeader from "../../../components/MyHeader";

const AdoptionApply = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>입양 신청서 작성 페이지</h1>
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
      </div>
      <MyFooter />
    </div>
  );
};
export default AdoptionApply;
