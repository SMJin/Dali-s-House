import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import "./css/MyVolunteer.css";
import MyPagination from "../../components/MyPagination";
import MySearch from "../../components/MySearch";
import { certList } from "./CertDataList";
import MyPageMenuTest from "../../components/MyPageMenu";

const MyVolunteer = () => {
  return (
    <div className="MyVolunteer">
      <MyHeader />
      <div className="mypage_myvolunteer">
        <MyPageMenuTest clicked={"volunteer"} />
        <div className="mypageContentWrapper">
          <b>나의 봉사</b>
          <div className="mypageContentLengthWrapper">
            <span className="mypageContentLength">
              {certList.length}개의 게시물이 있습니다.
            </span>
            <MySearch />
          </div>
          <div className="mypageVolinteerListWrapper">
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
                  <div className="mypageVolunteerContent">
                    상세: {it.content}
                  </div>
                </div>
              </div>
            ))}
            <MyPagination />
          </div>
        </div>
      </div>

      <MyFooter />
    </div>
  );
};

export default MyVolunteer;

/*
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
*/
