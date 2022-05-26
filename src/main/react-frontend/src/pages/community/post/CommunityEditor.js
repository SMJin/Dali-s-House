import "./css/CommPostEditor.css";

import MyFooter from "../../../components/MyFooter";
import MyHeader from "../../../components/MyHeader";
import { useNavigate } from "react-router-dom";
import CommCate_item from "../component/CommCate_item";
import { useContext, useEffect, useState } from "react";
import { CommunityDispatchContext } from "../../../App";
import axios from "axios";

const listcategory = [
  { category_id: 1, category_descript: "봉사질문" },
  { category_id: 2, category_descript: "후기" },
  { category_id: 3, category_descript: "고민" },
  { category_id: 4, category_descript: "팀원모집" },
  { category_id: 5, category_descript: "잡담" },
];

const CommPostEditor = ({ isEdit, originData }) => {
  const navigate = useNavigate();
  const [category, setCategory] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleClickCategory = (category) => {
    setCategory(category);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const { onCreate, onEdit, onRemove } = useContext(CommunityDispatchContext);

  const onClick = () => {
    const date = Date.now();

    if (
      window.confirm(
        isEdit ? "글을 수정하시겠습니까?" : "글을 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, category, title, content);
      } else {
        onEdit(originData.id, date, category, title, content);
      }
    }

    navigate(-1, { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(originData.id);
      navigate("/community", { replace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setCategory(originData.category);
      setTitle(originData.title);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div>
      <MyHeader />
      <div className="Community_New">
        <h2>{isEdit ? "커뮤니티 글 수정하기" : "커뮤니티 글 작성하기"}</h2>
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
          <div className="ButtonWrapper">
            {isEdit && (
              <button className="deleteButton" onClick={handleRemove}>
                삭제하기
              </button>
            )}
            <button
              className="closeButton"
              onClick={() => {
                navigate(-1, { replace: true });
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
            {isEdit ? "수정하기" : "작성하기"}
          </button>
        </div>
      </div>

      <MyFooter />
    </div>
  );
};

export default CommPostEditor;
