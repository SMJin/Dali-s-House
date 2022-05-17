import "./css/VounteerActivity.css";
import MyHeader from "../../components/MyHeader";
import MyNav from "./MyNav";
import VolunteerActivityThumbnail from "./VolunteerActivityThumbnail";
import MyFooter from "../../components/MyFooter";
import MyPagination from "../../components/MyPagination";
import Tag from "./Tag";
import { useEffect, useState } from "react";
import axios from "axios";

const VolunteerActivity = () => {
  const regionProps = {
    pageName: "봉사활동",
    region1: "전국",
    region2: "전국",
    region3: "전국",
  };

  // const volunteerActivityThumbnailProps = {
  //   imgUrl: "/assets/vol_img.png",
  //   title: "아직 엄마 품이 필요한 고양이들에게 사랑을 나누어 주세요.",
  //   content: "사랑냥이 보호센터",
  // };

  const [volunteerActivityThumbnailList, setVolunteerActivityThumbnailList] =
    useState([]);

  useEffect(() => {
    if (volunteerActivityThumbnailList.length != 0) {
      setTotalCount(volunteerActivityThumbnailList.length);
    }
    axios({
      "url": "/api/volunteerActivity/thumbnails",
      "method": "GET",
    }).then((res) => {
      setVolunteerActivityThumbnailList(res.data);
    });
  }, []);

  const [totalCount, setTotalCount] = useState(1);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div className="VolunteerActivity">
      <h1>봉사활동 페이지</h1>
      <MyHeader />
      <div className="VolunteerActivity_today">
        <div className="VolunteerActivity_today_title">
          <h2>
            이번주
            <br />
            달리단 활동
          </h2>
        </div>
        <div className="VolunteerActivity_today_content">
          <div
            className={[
              `VolunteerActivity_today_contents`,
              `today_contents_1`,
            ].join(" ")}
          >
            <Tag name={"봉사 참여"} amount={"10,270"} />
          </div>
          <div
            className={[
              `VolunteerActivity_today_contents`,
              `today_contents_2`,
            ].join(" ")}
          >
            <Tag name={"임보ㆍ입양"} amount={"321"} />
          </div>
          <div
            className={[
              `VolunteerActivity_today_contents`,
              `today_contents_3`,
            ].join(" ")}
          >
            <Tag name={"기부 참여"} amount={"5,114"} />
          </div>
          <div
            className={[
              `VolunteerActivity_today_contents`,
              `today_contents_4`,
            ].join(" ")}
          >
            <Tag name={"후원 참여"} amount={"7,225"} />
          </div>
        </div>
      </div>
      <div className="VolunteerActivity_thumbnail_board">
        <div className="VolunteerActivity_thumbnail_board_nav">
          <MyNav {...regionProps} />
          <h6>
            {volunteerActivityThumbnailList.length} 개의 게시물이 있습니다.
          </h6>
        </div>
        <div className="VolunteerActivity_thumbnail_board_content">
          {volunteerActivityThumbnailList
            .slice(offset, offset + limit)
            .map((it) => (
              <VolunteerActivityThumbnail key={it.id} {...it} />
            ))}
        </div>
      </div>
      <MyPagination
        totalCount={totalCount}
        countPerPage={limit}
        page={page}
        setPage={setPage}
      />
      <MyFooter />
    </div>
  );
};

export default VolunteerActivity;
