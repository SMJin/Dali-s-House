import "./css/Spon_item.css";

const Spon_item = ({ organ, activity, review, type, icon }) => {
  const typeVerify = ["feed", "blanket", "money"].includes(type)
    ? type
    : "default";

  return (
    <div className="Spon_item">
      <div className="imgbox">
        <img
          class="img_main"
          src={process.env.PUBLIC_URL + `/assets/spon_img.png`}
        />
        <div className="title">{organ}</div>
        <div className="info">
          활동 {activity} | 후기 {review}{" "}
        </div>
        <div className="spon_type">
          <img
            className="type_icon"
            src={process.env.PUBLIC_URL + `/assets/${type}.png`}
          />
          {type === "feed" ? "사료" : type === "blanket" ? "담요" : "기부"}
        </div>
      </div>
    </div>
  );
};

export default Spon_item;
