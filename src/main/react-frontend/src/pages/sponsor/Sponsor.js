import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import MyPagination from "../../components/MyPagination";
import MySearch from "../../components/MySearch";
import "./css/Sponsor.css";

const Sponsor = ({ sponsorList }) => {
  return (
    <div>
      <h1>후원 페이지</h1>
      <MyHeader />
      <div className="Sponsor">
        <div className="title">
          <h3>후원 리스트</h3>
          <MySearch />
        </div>
        <div className="Sponsor_box">
          <h6>{sponsorList.length} 개의 게시물이 있습니다.</h6>
        </div>
        <MyPagination />
      </div>
      <MyFooter />
    </div>
  );
};

Sponsor.defaultProps = {
  sponsorList: [],
};

export default Sponsor;
