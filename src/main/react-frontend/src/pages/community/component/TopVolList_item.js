import "./css/TopVolList_item.css";

const TopVolList_item = ({ rank, name, grade, v_hour }) => {
  const gradeVerify = ["bot", "mid", "top"].includes(grade) ? grade : "default";

  return (
    <div className="TopVolList_item">
      <div className="itembox">
        <div className="rank">{rank}</div>
        <div className="user_img">
          <img class="img" src={process.env.PUBLIC_URL + `/assets/icon.png`} />
        </div>
        <div className="user_item">
          <div className="user_name">{name}</div>
          <div className="user_grade">
            {grade === "bot" ? "초보" : grade === "mid" ? "우수" : "명예"}{" "}
            달리단
          </div>
          <div className="user_hour">{v_hour}시간</div>
        </div>
      </div>
    </div>
  );
};

export default TopVolList_item;
