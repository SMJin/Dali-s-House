import { useState } from "react";

import "./css/Community.css";

import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import MyButton from "../../components/MyButton";
import MyTitle from "../../components/MyTitle";
import SearchBox from "./SearchBox";
import Title from "./Title";
import MagazineList from "../main/MagazineList";
import TopVolunteerList from "./TopVolunteerList";
import List from "./List";
import ListCate from "./ListCate";
import MyPagination from "../../components/MyPagination";

const listcategory = [
  { category_id: 1, category_descript: "전체" },
  { category_id: 2, category_descript: "봉사질문" },
  { category_id: 3, category_descript: "후기" },
  { category_id: 4, category_descript: "고민" },
  { category_id: 5, category_descript: "팀원모집" },
];

const Community = () => {
  const [category, setCategory] = useState(1);

  const handleClickCategory = (category) => {
    setCategory(category);
  };

  const [page, setPage] = useState(1);

  const handleClickPage = (page) => {
    setPage(page);
  };

  return (
    <div className="Community">
      <h1>커뮤니티 페이지</h1>
      <MyHeader />
      <h3>커뮤니티</h3>
      <SearchBox className="searchbox" />
      <div className="top_volunteer">
        <Title titleText={"이번달 우수 봉사자"} />
        <TopVolunteerList />
      </div>
      <div>
        <MyTitle
          titleText={"3월 달리 매거진"}
          totalbutton={<MyButton text={"전체보기"} />}
        />
        <div class="magazine">
          <div className="magazine_content">
            <div>
              <MagazineList />
            </div>
          </div>
        </div>
      </div>
      <div className="community">
        <div className="communitybox">
          <Title titleText={"달리단 커뮤니티"} />
          <div className="ListBox">
            <section>
              <div className="category_wrapper">
                {listcategory.map((it) => (
                  <ListCate
                    key={it.category_id}
                    {...it}
                    onClick={handleClickCategory}
                    isSelected={it.category_id === category}
                  />
                ))}
              </div>
            </section>
            <List />
            <List />
            <List />
            <List />
            <List />
          </div>
        </div>
      </div>
      <MyPagination />
      <MyFooter />
    </div>
  );
};

export default Community;
