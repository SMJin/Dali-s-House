import "./css/SponList.css";

const SponList = ({ img, title, host, percent }) => {
  return (
    <div className="SponList">
      <div className="imgbox">
        <img
          class="img"
          src={process.env.PUBLIC_URL + `/assets/spon_img.png`}
        />
        <h5>광주동물보호협회 위드</h5>
        <h6>죽전 유기견 보호소</h6>
        <div className="under">활동 6 | 후기 132</div>
        <img
          class="icon_img"
          src={process.env.PUBLIC_URL + `/assets/feed_img.png`}
        />
      </div>
      <div className="imgbox">
        <img
          class="img"
          src={process.env.PUBLIC_URL + `/assets/spon_img.png`}
        />
        <h5>광주동물보호협회 위드</h5>
        <h6>죽전 유기견 보호소</h6>
        <div className="under">활동 6 | 후기 132</div>
        <img
          class="icon_img"
          src={process.env.PUBLIC_URL + `/assets/feed_img.png`}
        />
      </div>
      <div className="imgbox">
        <img
          class="img"
          src={process.env.PUBLIC_URL + `/assets/spon_img.png`}
        />
        <h5>광주동물보호협회 위드</h5>
        <h6>죽전 유기견 보호소</h6>
        <div className="under">활동 6 | 후기 132</div>
        <img
          class="icon_img"
          src={process.env.PUBLIC_URL + `/assets/feed_img.png`}
        />
      </div>
      <div className="imgbox">
        <img
          class="img"
          src={process.env.PUBLIC_URL + `/assets/spon_img.png`}
        />
        <h5>광주동물보호협회 위드</h5>
        <h6>죽전 유기견 보호소</h6>
        <div className="under">활동 6 | 후기 132</div>
        <img
          class="icon_img"
          src={process.env.PUBLIC_URL + `/assets/feed_img.png`}
        />
      </div>
    </div>
  );
};

export default SponList;
