import React, { useState, useEffect } from "react";
import "./css/MyFavoriteVolunteerList.css";
import MyFavoriteVolunteer_Item from "./component/MyFavoriteVolunteer_Item";
import MyPagination from "../../components/MyPagination";

const MyFavoriteVolunteerList = ({ dataList }) => {
  const [totalCount, setTotalCount] = useState(1);
  const limit = 9;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  
  useEffect(() => {
    if (dataList != null) {
      setTotalCount(dataList.length);
    }
  });

  return (
    <div className="MyFavoriteVolunteerList">
      <div className="MyFavoriteVolunteerList_wrapper">
        {dataList
          .slice(0)
          .slice(offset, offset + limit)
          .map((it) => (
            <div key={it.id}>
              <MyFavoriteVolunteer_Item
                id={it.id}
                title={it.title}
                organ={it.organ}
                recruitment_cur={it.recruitment_cur}
                recruitment_limit={it.recruitment_limit}
                completed={it. completed}
              />

            </div>
          ))}
      </div>

    </div>
  );
};
export default MyFavoriteVolunteerList;
