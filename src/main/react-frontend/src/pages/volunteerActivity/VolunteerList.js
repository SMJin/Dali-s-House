import React, { useState, useEffect } from "react";
import MyPagination from "../../components/MyPagination";
import VolunteerItem from "./component/VolunteerItem";

import "./css/VolunteerList.css";

const VolunteerList = ({ dataList }) => {
  const [totalCount, setTotalCount] = useState(1);
  const limit = 16;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    if (dataList != null) {
      setTotalCount(dataList.length);
    }
  });

  return (
    <div className="VolunteerList">
      <div className="VolunteerListWrapper">
        {dataList
          .slice(0)
          .reverse() // 역순으로
          .slice(offset, offset + limit)
          .map((it) => (
            <VolunteerItem key={it.id} {...it} />
          ))}
      </div>
      <MyPagination
        totalCount={totalCount}
        countPerPage={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default VolunteerList;
