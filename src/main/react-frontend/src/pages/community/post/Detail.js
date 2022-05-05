import "./css/Detail.css";

import MyFooter from "../../../components/MyFooter";
import MyHeader from "../../../components/MyHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CommunityStateContext } from "../../../App";

const Community_Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const postList = useContext(CommunityStateContext);
  const [data, setData] = useState();

  useEffect(() => {
    if (postList.length > 0) {
      const targetPost = postList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetPost) {
        setData(targetPost);
      } else {
        alert("잘못된 접근입니다.");
        navigate("/community", { replace: true });
      }
    }
  }, [id, postList]);

  return (
    <div>
      <h1>커뮤니티 글 상세 페이지</h1>
      <MyHeader />
      <div className="Community_Detail">
        <div>{data.title}</div>
        <div>{new Date(parseInt(data.date)).toLocaleDateString()}</div>
        <div>{data.content}</div>
        <div>{data.heart}</div>
        <div>{data.reply}</div>
      </div>
      <MyFooter />
    </div>
  );
};

export default Community_Detail;
