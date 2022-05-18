import { useNavigate } from "react-router-dom";
import "./css/MagazinePostItem.css";

const MagazinePostItem = ({ id, category, title1, title2, organ }) => {
  const navigate = useNavigate();

  const goMagazinePost = () => {
    navigate(`/community/magazine/${id}`);
  };

  return (
    <div className="MagazinePostItem">
      <div
        className="imgbox"
        onClick={goMagazinePost}
        // style={{ backgroundImage: `url(/assets/magazine/magazine_${id}}.png)` }}
      >
        <img
          class="img_main"
          src={
            process.env.PUBLIC_URL + `/assets/magazine/magazine_${id % 4}.png`
          }
        />
        <div className="cate">{category}</div>
        <div className="title">{title1}</div>
        <div className="title">{title2}</div>
        <div className="organ">{organ}</div>
      </div>
    </div>
  );
};

export default MagazinePostItem;
