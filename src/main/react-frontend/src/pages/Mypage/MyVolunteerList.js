import "./css/MyVolunteerList.css";

const MyVolunteerList = () => {
  return (
    <div className="MyVolunteerList">
      <div className="MyVolunteerListBox">
      <div className="left">
          <div className="top">
            <div className="user_img">
              <img
            class="image"
            src={process.env.PUBLIC_URL + `./assets/my_volunteer.png`}
          />
            </div>
            <div className="user_text">
              <h4>아름다운 우리 아이들의 미용봉사 (서울)</h4>
              <div className="detail">
                <h5>경기 퍼피랜드</h5>
              </div>
            </div>
          </div>
          <div className="middle">

          </div>
          <div className="bottom">
            <h4>2022.03.01 (화) 15:00 ~ 2022.03.01 (화) 18:00 총 3시간 </h4>
            </div>
        </div>

      </div>
    </div>
  );
};
export default MyVolunteerList;
