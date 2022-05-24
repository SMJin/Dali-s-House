import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../components/ProgressBar";
import "./css/VolunteerItem.css";

const VolunteerItem = ({
  id,
  title,
  organ,
  recruitment_cur,
  recruitment_limit,
  completed,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="VolunteerItem"
      onClick={() => {
        navigate(`/volunteerActivity/${id}`);
      }}
    >
      <div className="volunteerImgWrapper">
        <img
          class="volunteerImage"
          src={
            process.env.PUBLIC_URL + `assets/volunteer/volunteer_${id % 8}.png`
          }
        />
      </div>
      <div className="volunteerTitle">{title}</div>
      <div className="volunteerOrgan">{organ}</div>
      <div className="volunteerProgressBar">
        <ProgressBar key={id} completed={completed} />
      </div>
      <div className="volunteerProgressDegree">
        <div className="volunteerPercentage">{`${completed}%`}</div>
        <div className="volunteerCount">
          <span className="volunteerPresent">{recruitment_cur}명&nbsp;/</span>
          <span className="volunteerTotal"> {recruitment_limit}명</span>
        </div>
      </div>
    </div>
  );
};
export default VolunteerItem;
