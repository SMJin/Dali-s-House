import { useNavigate, useParams } from "react-router-dom";
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
  const navigate = useNavigate();
  return (
    <div
      className="adoption_thumbnail"
      onClick={() => {
        navigate(`/adoption/post`);
      }}
    >
      <img className="adoption_img" src={imgUrl} />

      <div className="adoption_thumbnail_name">{name}</div>
      <div className="adoption_thumbnail_details1">
        {age} · {sex == "M" ? "남아♂" : "여아♀"}
      </div>
      <span className="adoption_thumbnail_details2">
        {species} | {breedOf}
      </span>
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
      {<MyImage imgUrl={imgUrl} type={"img_thumbnail"} />}
*/
