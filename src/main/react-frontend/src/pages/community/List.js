import "./css/List.css";
import HeartnReply from "./HeartnReply";

const List = () => {
  return (
    <div className="List">
      <div className="ListBox">
        <div className="left">
          <div className="top">
            <div className="user_img">
              <img
                class="icon"
                src={process.env.PUBLIC_URL + `/assets/icon.png`}
              />
            </div>
            <div className="user_text">
              <h4>Journey</h4>
              <div className="detail">
                <h5>명예달리단</h5>
                <h>
                  <b>4시간전</b>
                </h>
              </div>
            </div>
          </div>
          <div className="middle">
            <p>
              <b>저희 강아지가 밥을 안먹네요...</b>
            </p>
          </div>
          <div className="bottom">
            <p>예삐가 사료를 잘 안먹어요. 건식 습식 다양하게 시도해 보았는데</p>
            <p>영 먹지를 않네요. 점점 말라가는 모습이 많이 안타까운데</p>
            <p>간식만 먹일수도 없고 걱정입니다ㅠㅠ</p>
            <p>어떤 사료를 줘야 밥을 많이 먹을 수 있을까요?</p>
            <HeartnReply />
          </div>
        </div>
        <div className="right">
          <img
            class="image"
            src={process.env.PUBLIC_URL + `/assets/community_img.png`}
          />
        </div>
      </div>
    </div>
  );
};

export default List;
