import MyImage from "../../components/MyImage";
import "./css/VolunteerActivityThumbnail.css";

const VolunteerActivityThumbnail = ({ imgUrl, title, content }) => {
  return (
    <div className="VolunteerActivityThumbnail">
      <MyImage type={"img_thumbnail"} imgUrl={imgUrl} />
      <div className="VolunteerActivity_thumbnail_title">{title}</div>
      <div className="VolunteerActivity_thumbnail_content">{content}</div>
      <MyImage type={"icon_percentage"} imgUrl={"/assets/percent.png"} />
    </div>
  );
};

export default VolunteerActivityThumbnail;
