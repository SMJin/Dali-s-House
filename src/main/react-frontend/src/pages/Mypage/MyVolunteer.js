import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import "./css/MyVolunteer.css";
import MyPageMenu from "./MyPageMenu";
import MyPagination from "../../components/MyPagination";
import MySearch from "../../components/MySearch";
import { certList } from "./CertDataList";

const MyVolunteer = () => {
  return (
    <div className="MyVolunteer">
      <MyHeader />
      <div className="mypage_myvolunteer">
        <span>
          <b>나의 봉사</b>
        </span>
        <MySearch />
        <MyPageMenu />
      </div>
      <div>
        <div className="mypage_myvolunteer_list">
          {certList.map((it) => (
            <div className="mypageVolunteerItemWapper" id={it.id}>
              <div className="mypageVolunteerImgWrapper">
                <img
                  className="mypageVolunteerImg"
                  src={
                    process.env.PUBLIC_URL +
                    `./assets/volunteer/volunteer_${(it.id % 8) + 1}.png`
                  }
                />
              </div>
              <div className="mypageVolunteerTextWapper">
                <div className="mypageVolunteerTitle">{it.title}</div>
                <div className="mypageVolunteerOrgan">{it.organ}</div>
                <div className="mypageVolunteerDate">
                  {it.date} {it.time}
                </div>
                <div className="mypageVolunteerContent">상세: {it.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <MyPagination />
      <MyFooter />
    </div>
  );
};

export default MyVolunteer;
