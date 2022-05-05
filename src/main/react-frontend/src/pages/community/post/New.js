import "./css/New.css";

import MyFooter from "../../../components/MyFooter";
import MyHeader from "../../../components/MyHeader";
import { useNavigate } from "react-router-dom";
import CommCate_item from "../component/CommCate_item";
import { useContext, useState } from "react";
import { CommunityDispatchContext } from "../../../App";

const listcategory = [
  { category_id: 1, category_descript: "봉사질문" },
  { category_id: 2, category_descript: "후기" },
  { category_id: 3, category_descript: "고민" },
  { category_id: 4, category_descript: "팀원모집" },
];

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const Community_New = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState(1);

  const handleClickCategory = (category) => {
    setCategory(category);
  };

  const [title, setTitle] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const [content, setContent] = useState("");

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const { onCreate } = useContext(CommunityDispatchContext);

  const onClick = () => {
    const date = Date.now();
    console.log(date);

    onCreate(date, category, title, content);
    navigate("/community", { replace: true });
  };

  return (
    <div>
      <h1>커뮤니티 글 작성 페이지</h1>
      <MyHeader />
      <div className="Community_New">
        <h2>커뮤니티 글 작성하기</h2>
        <div className="writingTop">
          <div className="selectCategoryWrapper">
            {listcategory.map((it) => (
              <CommCate_item
                key={it.category_id}
                {...it}
                onClick={handleClickCategory}
                isSelected={it.category_id === category}
              />
            ))}
          </div>
          <div className="closeButtonWrapper">
            <button
              className="closeButton"
              onClick={() => {
                navigate("/community");
              }}
            >
              × 닫기
            </button>
          </div>
        </div>
        <div className="writingMiddle">
          <div className="inputPostTitleWrapper">
            <input
              className="inputPostTitle"
              placeholder="제목을 입력하세요"
              type="text"
              value={title}
              onChange={onChangeTitle}
            />
          </div>
          <div className="inputPostContentWrapper">
            <textarea
              className="inputPostContent"
              placeholder="내용을 입력하세요"
              type="text"
              value={content}
              onChange={onChangeContent}
            />
          </div>
          <div className="addImgWrapper">이미지 첨부하기:</div>
        </div>
        <div className="writingBottom">
          <button
            className="goWriteButton"
            disabled={content.length == 0 || title.length == 0}
            onClick={onClick}
          >
            작성하기
          </button>
        </div>
      </div>

      <MyFooter />
    </div>
  );
};

export default Community_New;
