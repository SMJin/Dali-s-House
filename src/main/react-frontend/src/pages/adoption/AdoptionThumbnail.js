import MyImage from "../../components/MyImage";
import "./css/AdoptionThumbnail.css"

const AdoptionThumbnail = ({name, breedOf, ageYear, ageMonth, sex, neutering, identification, imgUrl}) => {

    return (
      <div className="adoption_thumbnail">
          <MyImage imgUrl={imgUrl} type={"img_thumbnail"} />
          <div className="adoption_thumbnail_name">{name}</div>
          <div className="adoption_thumbnail_details">{breedOf} {ageYear===0 ? '':ageYear+'년'} {ageMonth===0 ? '':ageMonth+'개월'} {sex}</div>
          <div className='adoption_thumbnail_options'>
              중성화<span style={{color:'green', fontWeight:'bold'}}>{neutering ? "O":"X"}</span> 인식표<span style={{color:'green', fontWeight:'bold'}}>{identification ? "O":"X"}</span> </div>
      </div>
    );
}

AdoptionThumbnail.defaultProps = {
    imgUrl: '/assets/puppy.jpg',
}

export default AdoptionThumbnail;