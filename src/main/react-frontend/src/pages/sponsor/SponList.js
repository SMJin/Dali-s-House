import React, { useState, useEffect } from "react";

import "./css/SponList.css";
import SponItem from "./component/SponItem";
import MyPagination from "../../components/MyPagination";

const SponList = ({ dataList }) => {
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
    <div className="SponList">
      <div className="SponListWrapper">
        {dataList
          .slice(0)
          .reverse() // 역순으로
          .slice(offset, offset + limit)
          .map((it) => (
            <div key={it.id}>
              <SponItem
                id={it.id}
                type={it.type}
                organ={it.organ}
                activity={it.activity}
                review={it.review}
              />
            </div>
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
export default SponList;
