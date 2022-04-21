import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import MyPagination from "../../components/MyPagination";
import "./css/Sponsor.css";

const Sponsor = ({ sponsorList }) => {
  return (
    <div className="Sponsor">
      <h1>후원 페이지</h1>
      <MyHeader />
      <h3>후원 리스트</h3>
      <div className="Sponsor_box">
        <h6>{sponsorList.length} 개의 게시물이 있습니다.</h6>
      </div>
      <MyPagination />
      <MyFooter />
    </div>
  );
};

Sponsor.defaultProps = {
  sponsorList: [],
};

export default Sponsor;
