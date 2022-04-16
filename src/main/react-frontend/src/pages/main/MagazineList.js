import "./css/MagazineList.css";

const MagazineList = ({ img, title, host, percent }) => {
  return (
    <div className="MagazineList">
      <div className="imgbox">
        <img
          class="img"
          src={process.env.PUBLIC_URL + `/assets/magazine_img.png`}
        />
        <h5>해피퍼피 보호소에</h5>
        <h5>새 친구들이 들어왔어요!</h5>
      </div>
      <div className="imgbox">
        <img
          class="img"
          src={process.env.PUBLIC_URL + `/assets/magazine_img.png`}
        />
        <h5>해피퍼피 보호소에</h5>
        <h5>새 친구들이 들어왔어요!</h5>
      </div>
      <div className="imgbox">
        <img
          class="img"
          src={process.env.PUBLIC_URL + `/assets/magazine_img.png`}
        />
        <h5>해피퍼피 보호소에</h5>
        <h5>새 친구들이 들어왔어요!</h5>
      </div>
    </div>
  );
};

export default MagazineList;
