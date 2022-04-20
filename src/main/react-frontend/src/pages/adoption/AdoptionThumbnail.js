import MyImage from "../../components/MyImage";
import "./css/AdoptionThumbnail.css"

const AdoptionThumbnail = ({imgUrl, id, name, age, sex, neutering, identification, created_date}) => {

    return (
      <div className="adoption_thumbnail">
          <MyImage imgUrl={imgUrl} type={"img_thumbnail"} />
          <div className="adoption_thumbnail_name">{name}</div>
          <div className="adoption_thumbnail_details">{age} {sex}</div>
          <div className='adoption_thumbnail_options'>
              중성화<span style={{color:'green', fontWeight:'bold'}}>{neutering ? "O":"X"}</span> 인식표<span style={{color:'green', fontWeight:'bold'}}>{identification ? "O":"X"}</span> </div>
      </div>
    );
}

AdoptionThumbnail.defaultProps = {
    imgUrl: '/assets/puppy.jpg',
}

export default AdoptionThumbnail;