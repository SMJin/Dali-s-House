import { useNavigate } from "react-router-dom";
import ProgressBar from "../../../components/ProgressBar";
import "./css/Volunteer_item.css";

const Volunteer_item = ({
  id,
  title,
  organ,
  recruitment_cur,
  recruitment_limit,
  completed,
}) => {
  const navigate = useNavigate();
  return (
    <div className="Volunteer_item">
      <div
        className="imgbox"
        onClick={() => {
          navigate(`/volunteerActivity/${id}`);
        }}
      >
        <img
          class="img_main"
          src={
            process.env.PUBLIC_URL + `assets/volunteer/volunteer_${id % 8}.png`
          }
        />
        <div className="title">{title}</div>
        <div className="organ">{organ}</div>
        <div className="progressbar">
          <ProgressBar key={id} completed={completed} />
        </div>
        <div className="progress_degree">
          <div className="percentage">{`${completed}%`}</div>
          <div className="count">
            <span className="present">{recruitment_cur}명&nbsp;/</span>
            <span className="total"> {recruitment_limit}명</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer_item;
/*
id, title, organ, recruitment_cur, recruitment_limit,  completed
*/

/*
import "./css/Volunteer_item.css";

const Volunteer_item = ({ title, organ }) => {
  return (
    <div className="Volunteer_item">
      <div className="imgbox">
        <img
          class="img_main"
          src={process.env.PUBLIC_URL + `/assets/vol_img.png`}
        />
        <div className="title">{title}</div>
        <div className="organ">{organ}</div>
        <img
          class="img_percent"
          src={process.env.PUBLIC_URL + `/assets/percent.png`}
        />
      </div>
    </div>
  );
};

export default Volunteer_item;
*/
