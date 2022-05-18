import React, { useState, useEffect } from "react";
import MyPagination from "../../../../components/MyPagination";
import MagazinePostItem from "./MagazinePostItem";

const MagazinePostList = ({ dataList }) => {
  const [totalCount, setTotalCount] = useState(1);
  const limit = 5;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    if (dataList != null) {
      setTotalCount(dataList.length);
    }
  });

  return (
    <div className="magazinePostList">
      {dataList
        .slice(0)
        .reverse() // 역순으로
        .slice(offset, offset + limit)
        .map((it) => (
          <div key={it.id}>
            <MagazinePostItem
              id={it.id}
              category={it.category}
              title1={it.title1}
              title2={it.title2}
              organ={it.organ}
            />
          </div>
        ))}

      <MyPagination
        totalCount={totalCount}
        countPerPage={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};
export default MagazinePostList;
