import MyImage from "../../components/MyImage";
import "./css/AdoptionThumbnail.css"

const AdoptionThumbnail = ({name, species, breedOf, entryDate, sex, age, weight, adoptionStatus, tempProtect, videoUrl, imgUrl, details}) => {

    return (
      <div className="adoption_thumbnail">
          <MyImage imgUrl={imgUrl} type={"img_thumbnail"} />
          <div className="adoption_thumbnail_name">{name}</div>
          <div className="adoption_thumbnail_details">{species} {breedOf} {entryDate} {sex} {age}</div>
          {/*<div className='adoption_thumbnail_options'>*/}
          {/*    중성화<span style={{color:'green', fontWeight:'bold'}}>{neutering ? "O":"X"}</span> 인식표<span style={{color:'green', fontWeight:'bold'}}>{identification ? "O":"X"}</span> </div>*/}
      </div>
    );
}

AdoptionThumbnail.defaultProps = {
    imgUrl: process.env.PUBLIC_URL + `/assets/icon.png`,
}

export default AdoptionThumbnail;