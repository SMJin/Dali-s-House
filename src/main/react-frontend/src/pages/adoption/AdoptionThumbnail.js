import MyImage from "../../components/MyImage";
import "./css/AdoptionTumbnail.css"

const AdoptionThumbnail = ({imgUrl, type, name, address, sex, neutering, identification}) => {

    const typeVerify = ['dog', 'cat'].includes(type) ? type : 'default';

    return (
      <div className="adoption_thumbnail">
          <MyImage imgUrl={imgUrl} type={"img_thumbnail"} />
          <div className="adoption_thumbnail_title">
              <span className="adoption_thumbnail_name"><b>{name}</b></span>
              <div className="adoption_thumbnail_type">{typeVerify === 'dog' ? "개" : "고양이"}</div>
          </div>
          <div className="adoption_thumbnail_options">{address}</div>
          <div className="adoption_thumbnail_options">{sex} | 중성화{neutering ? "O":"X"} | 인식표{identification ? "O":"X"}</div>
      </div>
    );
}

AdoptionThumbnail.defaultProps = {
    imgUrl: '/assets/puppy.jpg',
    type: 'default',
}

export default AdoptionThumbnail;