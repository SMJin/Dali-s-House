import "./css/Main.css";
import MyHeader from "../../components/MyHeader";
import VolunteerList from "./VolunteerList";
import MagazineList from "./MagazineList";
import AdoptList from "./AdoptList";
import SponList from "./SponList";
import MyButton from "../../components/MyButton";
import MyTitle from "./MyTitle";
import MainButton from "./MainButton";
import MyFooter from "../../components/MyFooter";

const Main = () => {
  return (
    <div className="main">
      <h1>메인 페이지</h1>
      <MyHeader />
      <div>
        <img
          class="main_adv"
          src={process.env.PUBLIC_URL + `/assets/main_adv.png`}
        />
      </div>
      <div>
        <div class="main_volunteer">
          <MainButton text={"<"} />
          <div className="main_volunteer_content">
            <MyTitle
              titleText={"이번주 달리단 모집"}
              totalbutton={<MyButton text={"전체보기"} />}
            />
            <div>
              <VolunteerList />
            </div>
          </div>
          <MainButton text={">"} />
        </div>
      </div>
      <div>
        <img
          class="main_volunteercs"
          src={process.env.PUBLIC_URL + `/assets/main_volunteercs.png`}
        />
      </div>
      <div>
        <div class="main_adoption">
          <MainButton text={"<"} />
          <div className="main_adoption_content">
            <MyTitle
              titleText={"새로운 가족을 찾아요!"}
              totalbutton={<MyButton text={"전체보기"} />}
            />
            <div>
              <AdoptList
                name={"달리"}
                age={"8개월"}
                sex={"남아"}
                neutering={true}
                identification={true}
              />
              <AdoptList
                name={"달리"}
                age={"8개월"}
                sex={"남아"}
                neutering={true}
                identification={true}
              />
              <AdoptList
                name={"달리"}
                age={"8개월"}
                sex={"남아"}
                neutering={true}
                identification={true}
              />
              <AdoptList
                name={"달리"}
                age={"8개월"}
                sex={"남아"}
                neutering={true}
                identification={true}
              />
            </div>
          </div>
          <MainButton text={">"} />
        </div>
      </div>
      <div>
        <div class="main_sponsor">
          <MainButton text={"<"} />
          <div className="main_sponsor_content">
            <MyTitle
              titleText={"소중한 후원을 요청드려요"}
              totalbutton={<MyButton text={"전체보기"} />}
            />
            <div>
              <SponList />
            </div>
          </div>
          <MainButton text={">"} />
        </div>
      </div>
      <div>
        <div class="main_magazine">
          <div className="main_magazine_content">
            <MyTitle
              titleText={"3월 달리 매거진"}
              totalbutton={<MyButton text={"전체보기"} />}
            />
            <div>
              <MagazineList />
            </div>
          </div>
        </div>
      </div>
        <MyFooter />
    </div>
  );
};

export default Main;
