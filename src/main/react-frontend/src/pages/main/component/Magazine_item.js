import "./css/Magazine_item.css";

const Magazine_item = ({ id, category, title, title1, title2 }) => {
  return (
    <div className="Magazine_item">
      <div
        className="imgbox"
        // style={{ backgroundImage: `url(/assets/magazine/magazine_${id}}.png)` }}
      >
        <img
          class="img_main"
          src={process.env.PUBLIC_URL + `/assets/magazine/magazine_${id}.png`}
        />
        <div className="cate">{category}</div>
        <div className="title">{title1}</div>
        <div className="title">{title2}</div>
      </div>
    </div>
  );
};

export default Magazine_item;
