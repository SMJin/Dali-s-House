import "./css/HeartnReply.css";

const HeartnReply = ({ heart, reply }) => {
  return (
    <div className="HeartnReply">
      <div className="icon">
        <img
          class="heart"
          src={process.env.PUBLIC_URL + `/assets/heart_icon.png`}
        />
      </div>
      <div className="text">
        <b>좋아요 {heart}</b>
      </div>
      <div className="icon">
        <img
          class="reply"
          src={process.env.PUBLIC_URL + `/assets/reply_icon.png`}
        />
      </div>
      <div className="text">
        <b>댓글 {reply}</b>
      </div>
    </div>
  );
};

export default HeartnReply;
