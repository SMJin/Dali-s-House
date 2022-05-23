import { useEffect, useState } from "react";

import "./css/VounteerActivity.css";
import MyHeader from "../../components/MyHeader";
import MyNav from "./MyNav";
import MyFooter from "../../components/MyFooter";
import MyPagination from "../../components/MyPagination";
import VolunteerSituation from "../../components/VolunteerSituation";
import { VolunteerDataList } from "./component/VolunteerDataList";
import Volunteer_item from "../main/component/Volunteer_item";
import MyButton from "../../components/MyButton";
import { useNavigate } from "react-router-dom";

const VolunteerActivity = () => {
  const navigate = useNavigate();

  const goVolunteerEdit = () => {
    navigate(`/volunteerActivity/edit`);
  };


  const regionProps = {
    pageName: "봉사활동",
    region1: "전국",
    region2: "전국",
    region3: "전국",
  };

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(VolunteerDataList);
  }, []);

  useEffect(() => {
    if (dataList != null) {
      setTotalCount(dataList.length);
    }
  });

  const [totalCount, setTotalCount] = useState(1);
  const limit = 16;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  return (
    <div className="VolunteerActivity">
      <h1>봉사활동 페이지</h1>
      <MyHeader />
      <VolunteerSituation
        vol={10 + "," + 275}
        adopt={321}
        dona={5 + "," + 114}
        spon={7 + "," + 225}
      />
      <div className="VolunteerActivity_thumbnail_board">
        <div className="VolunteerActivity_thumbnail_board_nav">
          <MyNav {...regionProps} />
          <div className="VolunteerActivity_thumbnail_board_wrapper">
          <h6>{dataList.length} 개의 게시물이 있습니다.</h6>
          <div className="VolunteerActivity_thumbnail_board_writing">
          <MyButton text={"+ 등록하기"}  onClick={goVolunteerEdit}/>
          </div>
        </div>
        </div>
        <div className="VolunteerActivity_thumbnail_board_content">
          {dataList
            .slice(0)
            .reverse() // 역순으로
            .slice(offset, offset + limit)
            .map((it) => (
              <Volunteer_item key={it.id} {...it} />
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

/*
import Tag from "./Tag";
import axios from "axios";
import VolunteerActivityThumbnail from "./VolunteerActivityThumbnail";

  const [volunteerActivityThumbnailList, setVolunteerActivityThumbnailList] =
    useState([]);

  useEffect(() => {
    if (volunteerActivityThumbnailList.length != 0) {
      setTotalCount(volunteerActivityThumbnailList.length);
    }
    axios({
      url: "/api/volunteerActivity/thumbnails",
      method: "GET",
    }).then((res) => {
      setVolunteerActivityThumbnailList(res.data);
    });
  }, []);
  
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
*/
