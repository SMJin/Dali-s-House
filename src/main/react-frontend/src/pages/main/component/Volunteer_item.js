import "./css/Volunteer_item.css";
import ProgressBar from "../../../components/ProgressBar";

const Volunteer_item = ({ id, vol_img, title, organ, completed, recruitment_cur, recruitment_limit }) => {
  return (
    <>
    <div className="Volunteer_item">
      <div className="Volunteer_item_imgbox">
        <img
          class="Volunteer_item_img"
          src={vol_img}
        />
        </div>
        <div className="main_vol_title">{title}</div>
        <div className="main_vol_organ">{organ}</div>

        <div className="ProgressBar">
        <ProgressBar key={id} completed={completed} />

        <div className ="main_vol_recuriment_wrapper">
        <div className ="main_vol_completed">
        <span>{`${completed}%`}</span>
        </div>
        <div className="main_vol_recuriment">
      <div className ="main_vol_recuriment_cur">
      {recruitment_cur}명 / 
      </div>
      <div className ="main_vol_recuriment_limit">
      {recruitment_limit}명 
      </div>
      </div>
      </div>
      </div>
      </div>

    </>
  );
};

export default Volunteer_item;
