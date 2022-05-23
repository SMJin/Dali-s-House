import { useNavigate } from "react-router-dom";
import "./css/SponItem.css";

const SponItem = ({ id, type, organ, activity, review }) => {
  const navigate = useNavigate();
  return (
    <div
      className="SponItem"
      onClick={() => {
        navigate(`/sponsor/${id}`);
      }}
    >
      <div className="sponImgWrapper">
        <img
          class="sponImage"
          src={process.env.PUBLIC_URL + `/assets/spon/spon_img${id % 4}.png`}
        />
      </div>
      <div className="sponTitle">{organ}</div>
      <div className="sponInfo">
        활동 {activity} | 후기 {review}
      </div>
      <div className="sponType">
        <img
          className="type_icon"
          src={process.env.PUBLIC_URL + `/assets/${type}.png`}
        />
        {type === "feed" ? "사료" : type === "blanket" ? "담요" : "기부"}
      </div>
    </div>
  );
};
export default SponItem;
