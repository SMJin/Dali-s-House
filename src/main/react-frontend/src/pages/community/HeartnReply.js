import "./css/HeartnReply.css";

const HeartnReply = () => {
  return (
    <div className="HeartnReply">
      <div className="icon">
        <img
          class="heart"
          src={process.env.PUBLIC_URL + `/assets/heart_icon.png`}
        />
      </div>
      <div className="text">
        <b>좋아요 11</b>
      </div>
      <div className="icon">
        <img
          class="reply"
          src={process.env.PUBLIC_URL + `/assets/reply_icon.png`}
        />
      </div>
      <div className="text">
        <b>댓글 5</b>
      </div>
    </div>
  );
};

export default HeartnReply;
