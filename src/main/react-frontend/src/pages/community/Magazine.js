import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import MyPagination from "../../components/MyPagination";
import "./css/Magazine.css";

const Magazine = ({ magazineList }) => {
  return (
    <div className="Magazine">
      <h1>매거진 페이지</h1>
      <MyHeader />
      <div>
        <img
          class="main_adv"
          src={process.env.PUBLIC_URL + `/assets/main_adv.png`}
        />
      </div>
      <h3>달리 매거진</h3>
      <div className="Magazine_box">
        <h6>{magazineList.length} 개의 게시물이 있습니다.</h6>
      </div>
      <MyPagination />
      <MyFooter />
    </div>
  );
};

Magazine.defaultProps = {
  magazineList: [],
};

export default Magazine;
