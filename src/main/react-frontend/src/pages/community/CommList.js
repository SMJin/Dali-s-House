import { useContext, useEffect, useState } from "react";

import "./css/CommList.css";
import CommCate_item from "./component/CommCate_item";
import MyPagination from "../../components/MyPagination";
import MySearch from "../../components/MySearch";
import { CommunityStateContext } from "../../App";
import PostList from "./post/components/PostList";
import { useNavigate } from "react-router-dom";

const listcategory = [
  { category_id: 1, category_descript: "전체" },
  { category_id: 2, category_descript: "봉사질문" },
  { category_id: 3, category_descript: "후기" },
  { category_id: 4, category_descript: "고민" },
  { category_id: 5, category_descript: "팀원모집" },
  { category_id: 6, category_descript: "잡담" },
];

const CommList = ({ communityList }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(1);

  const handleClickCategory = (category) => {
    setCategory(category);
  };

  // 수정 시작
  const postList = useContext(CommunityStateContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (postList.length >= 1) {
      if (category == 1) {
        setData(postList);
      } else {
        setData(postList.filter((it) => category - 1 == it.category));
      }
    }
  }, [postList, category]);
  // 수정 끝

  return (
    <div className="CommList">
      <div className="topWrapper">
        <div className="category_wrapper">
          {listcategory.map((it) => (
            <CommCate_item
              key={it.category_id}
              {...it}
              onClick={handleClickCategory}
              isSelected={it.category_id === category}
            />
          ))}
        </div>
        <MySearch />
      </div>

      <div className="listUpper">
        <h6>{data.length} 개의 게시물이 있습니다.</h6>
        <button
          className="commNew"
          onClick={() => {
            navigate("/community/new");
          }}
        >
          글쓰기
        </button>
      </div>
      <PostList postList={data} />
      <MyPagination />
    </div>
  );
};

CommList.defaultProps = {
  communityList: [],
};

export default CommList;
