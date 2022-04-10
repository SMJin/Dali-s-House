import "./css/VolunteerList.css";

const VolunteerList = ({ img, title, host, percent }) => {
  return (
    <div className="VolunteerList">
      <div className="imgbox">
        <img class="img" src={process.env.PUBLIC_URL + `/assets/vol_img.png`} />
        <h5>산책 봉사자 모집합니다</h5>
        <h6>죽전 유기견 보호소</h6>
        <img class="img" src={process.env.PUBLIC_URL + `/assets/percent.png`} />
      </div>
      <div className="imgbox">
        <img class="img" src={process.env.PUBLIC_URL + `/assets/vol_img.png`} />
        <h5>산책 봉사자 모집합니다</h5>
        <h6>죽전 유기견 보호소</h6>
        <img class="img" src={process.env.PUBLIC_URL + `/assets/percent.png`} />
      </div>
      <div className="imgbox">
        <img class="img" src={process.env.PUBLIC_URL + `/assets/vol_img.png`} />
        <h5>산책 봉사자 모집합니다</h5>
        <h6>죽전 유기견 보호소</h6>
        <img class="img" src={process.env.PUBLIC_URL + `/assets/percent.png`} />
      </div>
      <div className="imgbox">
        <img class="img" src={process.env.PUBLIC_URL + `/assets/vol_img.png`} />
        <h5>산책 봉사자 모집합니다</h5>
        <h6>죽전 유기견 보호소</h6>
        <img class="img" src={process.env.PUBLIC_URL + `/assets/percent.png`} />
      </div>
    </div>
  );
};

export default VolunteerList;
