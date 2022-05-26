import { useEffect, useState } from "react";

import "./css/VounteerActivity.css";
import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import MyTitle from "../../components/MyTitle";
import MySearch from "../../components/MySearch";
import VolunteerList from "./VolunteerList";
import VolunteerSituation from "../../components/VolunteerSituation";
import { VolunteerDataList } from "./component/VolunteerDataList";

const VolunteerActivity = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(VolunteerDataList);
  }, []);

  useEffect(() => {
    if (dataList != null) {
      setTotalCount(dataList.length);
    }
  });

  const [totalCount, setTotalCount] = useState(1);

  return (
    <div className="VolunteerActivity">
      <MyHeader />
      <VolunteerSituation
        vol={10 + "," + 275}
        adopt={321}
        dona={5 + "," + 114}
        spon={7 + "," + 225}
      />
      <div className="VolunteerActivity_thumbnail_board">
        <div className="VolunteerActivity_thumbnail_board_titlewrapper">
          <MyTitle titleText={"봉사활동"} />
          <MySearch />
        </div>
        <div className="VolunteerActivity_thumbnail_board_titlewrapper">
          <h6>{totalCount} 개의 게시물이 있습니다.</h6>
        </div>
        <div className="VolunteerActivity_thumbnail_board_content">
          <VolunteerList dataList={dataList} />
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

export default VolunteerActivity;
