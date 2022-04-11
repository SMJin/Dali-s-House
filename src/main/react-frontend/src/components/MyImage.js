import "./css/MyImage.css";

const MyImage = ({type, imgUrl}) => {

    const imgType = ['img_best', 'img_thumbnail',
        'icon_search', 'icon_percentage'].includes(type) ? type : 'default';

    return (
      <div className="MyImage">
          <img
              className={["MyImage", `MyImage_${imgType}`].join(" ")}
              src={process.env.PUBLIC_URL + imgUrl}
              alt={`${imgType}`}
          />
      </div>
    );
}

MyImage.defaultProps = {
    className: "default_image",
    imgUrl: "/assets/puppy.jpg",
};

export default MyImage;