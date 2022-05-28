import "./css/Detail.css";

import MyFooter from "../../../components/MyFooter";
import MyHeader from "../../../components/MyHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CommunityDispatchContext, CommunityStateContext } from "../../../App";
import HeartnReply from "../component/HeartnReply";

const Community_Detail = ({ originData }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const postList = useContext(CommunityStateContext);
  const [data, setData] = useState();

  const { onRemove } = useContext(CommunityDispatchContext);

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

  if (!data) {
    return <div className="CommunityDetailPage">로딩중입니다...</div>;
  } else {
    const strDate = new Date(parseInt(data.date)).toLocaleDateString();
    const timeGap = Date.now() - parseInt(data.date);
    return (
      <div>
        <MyHeader />
        <div className="Community_Detail">
          <div className="detailPostTop">
            <button
              className="detailCloseButton"
              onClick={() => {
                navigate(-1, { replace: true });
              }}
            >
              × 닫기
            </button>
          </div>
          <div className="detailPostMiddle">
            <div className="detailPostTextWrapper">
              <div className="detailPostUserInfo">
                <div className="detailUserImgWrapper">
                  <img
                    className="detailUserImg"
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/communityPost/userImage/icon.png`
                    }
                  />
                </div>
                <div className="detailUserTextWrapper">
                  <div className="detailUserName">
                    {(data.userName = "userName")}
                  </div>
                  <div className="detailUserGrade">
                    {data.userGrade === "bot"
                      ? "초보"
                      : data.userGrade === "mid"
                      ? "우수"
                      : "명예"}{" "}
                    달리단
                    <div className="detailPostDate">
                      {timeGap > 86400000
                        ? strDate
                        : timeGap > 3600000
                        ? Math.floor(timeGap / 3600000) + "시간 전"
                        : timeGap > 60000
                        ? Math.floor(timeGap / 60000) + "분 전"
                        : "방금전"}
                    </div>
                  </div>
                </div>
              </div>
              <div className="detailPostTitle">{data.title}</div>
              <div className="detailPostContent">{data.content}</div>
            </div>
            <div className="detailPostImageWrapper">
              <img
                className="detailPostImage"
                src={
                  process.env.PUBLIC_URL +
                  `/assets/communityPost/PostImage/community_img${
                    (id % 2) + 1
                  }.png`
                }
              />
            </div>
          </div>
          <div className="detailPostBottom">
            <div className="detailPostHeartNReplyWrapper">
              <HeartnReply heart={data.heart} reply={data.reply} />
            </div>
            <div className="detailPostButtonWrapper">
              <button
                className="detailPostEditButton"
                onClick={() => {
                  navigate(`/community/edit/${id}`);
                }}
              >
                수정하기
              </button>
            </div>
          </div>
        </div>
        <MyFooter />
      </div>
    );
  }
};

export default Community_Detail;

/*
  const handleRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onRemove(postList.id);
      navigate("/community", { replace: true });
    }
  };

              <button className="detailPostDeleteButton" onClick={handleRemove}>
                삭제하기
              </button>
*/
