import HeartnReply from "./HeartnReply";
import "./css/Comm_item.css";

const Comm_item = ({ id, name, grade, time, text, heart, reply }) => {
  return (
    <div className="Comm_item">
      <div className="body_left">
        <div className="writer_info">
          <div className="writer_img">
            <img src={process.env.PUBLIC_URL + `/assets/icon.png`} />
          </div>
          <div className="writer_item">
            <div className="writer_id">{name}</div>
            <div className="writer_detail">
              <div className="writer_grade">
                {grade === "bot" ? "초보" : grade === "mid" ? "우수" : "명예"}{" "}
                달리단
              </div>
              <div className="written_time">{time}시간전</div>
            </div>
          </div>
        </div>
        <div className="body">
          <div className="body_text">{text}</div>
          <div className="body_hnr">
            <HeartnReply heart={heart} reply={reply} />
          </div>
        </div>
      </div>
      <div className="body_right">
        <div className="img_box">
          <img src={process.env.PUBLIC_URL + `/assets/community_img.png`} />
        </div>
      </div>
    </div>
  );
};

export default Comm_item;
