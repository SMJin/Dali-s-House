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
