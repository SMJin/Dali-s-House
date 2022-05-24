import "./css/SponPost.css";
import MyFooter from "../../../components/MyFooter";
import MyHeader from "../../../components/MyHeader";
import { useNavigate, useParams } from "react-router-dom";
import { SponsorDataList } from "./SponsorDataList";

const SponPost = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  return (
    <div>
      <h1>후원 상세 페이지</h1>
      <MyHeader />
      <div className="sponPost">
        <div className="sponPostTitleWrapper">
          <h3>후원하기 상세</h3>
          <div className="sponPostTitleButtonWrapper">
            <button
              className="sponPostHeaderCloseButton"
              onClick={() => {
                navigate(-1, { replace: true });
              }}
            >
              × 닫기
            </button>
          </div>
        </div>
        <div className="sponPostContentWrapper">
          <div className="sponPostImageWrapper">
            <img
              class="sponPostImage"
              src={
                process.env.PUBLIC_URL +
                `/assets/spon/spon_img${SponsorDataList[id - 1].id % 4}.png`
              }
            />
          </div>
          <div className="sponPostTextWrapper">
            <div className="sponPostOrgan">{SponsorDataList[id - 1].organ}</div>
            <div className="sponPostInfo">
              활동 {SponsorDataList[id - 1].activity} | 후기{" "}
              {SponsorDataList[id - 1].review}
            </div>
            <div className="sponPostType">
              <img
                className="type_icon"
                src={
                  process.env.PUBLIC_URL +
                  `/assets/${SponsorDataList[id - 1].type}.png`
                }
              />
              {SponsorDataList[id - 1].type === "feed"
                ? "사료"
                : SponsorDataList[id - 1].type === "blanket"
                ? "담요"
                : "기부"}
            </div>
          </div>
        </div>
      </div>
      <MyFooter />
    </div>
  );
};
export default SponPost;
