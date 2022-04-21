import { useState } from "react";

import "./css/Community.css";

import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import MyButton from "../../components/MyButton";
import MyTitle from "../../components/MyTitle";
import SearchBox from "./SearchBox";
import TopVolList from "./TopVolList";
import MagazineList from "../main/MagazineList";
import CommList from "./CommList";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);

  const handleClickPage = (page) => {
    setPage(page);
  };

  const goMagazine = () => {
    navigate(`/community/magazine`);
  };

  return (
    <div className="Community">
      <h1>커뮤니티 페이지</h1>
      <MyHeader />
      <SearchBox className="searchbox" />
      <div>
        <MyTitle titleText={"이번달 우수 봉사자"} />
        <TopVolList />
      </div>
      <div>
        <MyTitle
          titleText={"3월 달리 매거진"}
          totalbutton={<MyButton text={"전체보기"} onClick={goMagazine} />}
        />
        <MagazineList />
      </div>
      <div>
        <MyTitle titleText={"달리단 커뮤니티"} />
        <CommList />
      </div>
      <MyFooter />
    </div>
  );
};

export default Community;
