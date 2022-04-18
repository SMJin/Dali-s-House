import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "./css/MyPagination.css";

const MyPagination = ({}) => {
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={10}
      totalItemsCount={450}
      pageRangeDisplayed={10}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={handlePageChange}
    />
  );
};

export default MyPagination;
