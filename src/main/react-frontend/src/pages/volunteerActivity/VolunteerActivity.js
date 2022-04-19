import "./css/VounteerActivity.css";
import MyHeader from "../../components/MyHeader";
import MyNav from "./MyNav";
import VolunteerActivityThumbnail from "./VolunteerActivityThumbnail";
import MyFooter from "../../components/MyFooter";
import MyPagination from "../../components/MyPagination";
import Tag from "./Tag";

const VolunteerActivity = () => {
  
  const regionProps = {
    pageName: "봉사활동",
    region1: "전국",
    region2: "전국",
    region3: "전국",
  };

  const volunteerActivityThumbnailProps = {
    imgUrl: "/assets/vol_img.png",
    title: "아직 엄마 품이 필요한 고양이들에게 사랑을 나누어 주세요.",
    content: "사랑냥이 보호센터",
  }

  return (
    <div className="VolunteerActivity">
      <h1>봉사활동 페이지</h1>
      <MyHeader />
      <div className='VolunteerActivity_today'>
        <div className='VolunteerActivity_today_title'>
          <h2>이번주<br />달리단 활동</h2>
        </div>
        <div className='VolunteerActivity_today_content'>
          <div className={[`VolunteerActivity_today_contents`, `today_contents_1`].join(" ")}>
            <Tag name={'봉사 참여'} amount={'10,270'} />
          </div>
          <div className={[`VolunteerActivity_today_contents`, `today_contents_2`].join(" ")}>
            <Tag name={'임보ㆍ입양'} amount={'321'} />
          </div>
          <div className={[`VolunteerActivity_today_contents`, `today_contents_3`].join(" ")}>
            <Tag name={'기부 참여'} amount={'5,114'} />
          </div>
          <div className={[`VolunteerActivity_today_contents`, `today_contents_4`].join(" ")}>
            <Tag name={'후원 참여'} amount={'7,225'} />
          </div>
        </div>
      </div>
      <div className='VolunteerActivity_thumbnail_board'>
        <div className='VolunteerActivity_thumbnail_board_nav'>
          <MyNav {...regionProps} />
        </div>
        <div className='VolunteerActivity_thumbnail_board_content'>
          <VolunteerActivityThumbnail {...volunteerActivityThumbnailProps} />
          <VolunteerActivityThumbnail {...volunteerActivityThumbnailProps} />
          <VolunteerActivityThumbnail {...volunteerActivityThumbnailProps} />
          <VolunteerActivityThumbnail {...volunteerActivityThumbnailProps} />
          <VolunteerActivityThumbnail {...volunteerActivityThumbnailProps} />
        </div>
      </div>
      <MyPagination />
      <MyFooter />
    </div>
  );
};

export default VolunteerActivity;
