import "./css/MyVolunteerList.css";

const MyVolunteerList = () => {
  return (
    <div className="MyVolunteerList">
      <div className="MyVolunteerList_Box">
      <div className="MyVolunteerList_left">
          <div className="MyVolunteerList_top">
            <div className="MyVolunteerList_user_img">
              <img
            class="MyVolunteerList_image"
            src={process.env.PUBLIC_URL + `./assets/my_volunteer.png`}
          />
            </div>
            <div className="MyVolunteerList_user_text">
              <h4>아름다운 우리 아이들의 미용봉사 (서울)</h4>
              <div className="MyVolunteerList_detail">
                <h5>경기 퍼피랜드</h5>
              </div>
            </div>
          </div>
          <div className="MyVolunteerList_middle">

          </div>
          <div className="MyVolunteerList_bottom">
            <h4>2022.03.01 (화) 15:00 ~ 2022.03.01 (화) 18:00 총 3시간 </h4>
            </div>
        </div>

      </div>
    </div>
  );
};
export default MyVolunteerList;
