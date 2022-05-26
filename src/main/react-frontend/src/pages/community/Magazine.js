import React, { useState, useEffect } from "react";

import "./css/Magazine.css";
import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";
import MySearch from "../../components/MySearch";
import MagazinePostList from "./magazinepost/component/MagazinePostList";
import { MagazineDataList } from "./magazinepost/component/MagazineDataList";

const Magazine = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(MagazineDataList);
  }, []);

  return (
    <div>
      <MyHeader />
      <img
        class="main_adv"
        src={process.env.PUBLIC_URL + `/assets/main_adv.png`}
      />
      <div className="Magazine">
        <div className="title">
          <h3>달리 매거진</h3>
          <MySearch />
        </div>
        <div className="Magazine_box">
          <h6>{dataList.length} 개의 게시물이 있습니다.</h6>
          <MagazinePostList dataList={dataList} />
        </div>
      </div>
      <MyFooter />
    </div>
  );
};

Magazine.defaultProps = {
  magazineList: [],
};

export default Magazine;
