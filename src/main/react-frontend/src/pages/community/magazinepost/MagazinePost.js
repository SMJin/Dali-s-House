import "./css/MagazinePost.css";
import MyFooter from "../../../components/MyFooter";
import MyHeader from "../../../components/MyHeader";
import { useNavigate } from "react-router-dom";

const MagazinePost = ({ id }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>매거진 페이지</h1>
      <MyHeader />
      <div className="MagazinePost">
        <div className="MagazinePostHeaderWrapper">
          <h3>달리 매거진</h3>
          <button
            className="MagazinePostHeaderButton"
            onClick={() => {
              navigate(-1, { replace: true });
            }}
          >
            × 닫기
          </button>
        </div>
        <div className="MagazinePostImageWrapper">
          <img
            class="MagazinePostImage"
            src={process.env.PUBLIC_URL + `/assets/magazine/magazine_0.png`}
          />
        </div>
        <div className="MagazinePostTextWrapper">
          동글동글한 눈에 가슴의 하얀 털. 검은 곰 쿠마는 2020년 청주의 한 집으로
          가게되었답니다.
          <br />
          포메라니안인 포마는 귀여운 외모랑은 다른 맹수같은 ! 모습을 가지고
          있는데요,
          <br />
          지나가는 강아지 고양이에게 캉캉 짖는 버릇은 요즘 고치려고 노력하고
          있어요.
          <br />
          입질이 없지만 함께 산책하다보면 다들 깜짝 놀라요. <br />
        </div>
        <div className="MagazinePostSubTitleWrapper">
          작은 깜장콩 쿠마는
          <br />
          올해 3살이 되었답니다 : )
        </div>
        <div className="MagazinePostSubImageWrapper">
          <img
            class="MagazinePostSubImage"
            src={
              process.env.PUBLIC_URL +
              `/assets/magazine/subImage/magazine_0_1.png`
            }
          />
          <img
            class="MagazinePostSubImage"
            src={
              process.env.PUBLIC_URL +
              `/assets/magazine/subImage/magazine_0_2.png`
            }
          />
        </div>
        <div className="MagazinePostTextWrapper">
          털이 길었을 때 모습이 더 예쁘죠? 긴 털을 오래 관리해주고 싶지만
          최근들어 갑자기
          <br />
          털이 쇠해서 털을 짧게 밀었어요. 쿠마의 땡그란 눈이 더 잘보여서
          <br />
          귀엽기도 하고.. 밀고보니 살이 좀 쪄있는게 간식도 조금은 줄여야 겠어요!
          <br />
        </div>
      </div>
      <MyFooter />
    </div>
  );
};
export default MagazinePost;
