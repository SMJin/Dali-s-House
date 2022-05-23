import "./css/AdoptionThumbnail.css";

const AdoptionThumbnail = ({
  name,
  species,
  breedOf,
  sex,
  age,
  imgUrl,
  weight,
  entryDate,
  adoptionStatus,
  tempProtect,
  videoUrl,
  details,
}) => {
  return (
    <div className="adoption_thumbnail">
      <img className="adoption_img" src={imgUrl} />
      {/* <MyImage imgUrl={imgUrl} type={"img_thumbnail"} /> */}
      <div className="adoption_thumbnail_name">{name}</div>
      <div className="adoption_thumbnail_details">
        {age} · {sex == "M" ? "남아" : "여아"}
      </div>
      <div className="adoption_thumbnail_details">
        {species} {breedOf}
      </div>
    </div>
  );
};

AdoptionThumbnail.defaultProps = {
  imgUrl: process.env.PUBLIC_URL + `/assets/icon.png`,
};

export default AdoptionThumbnail;

/* 
import MyImage from "../../components/MyImage";
{entryDate}
*/
