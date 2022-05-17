import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import "./css/MyPagination.css";

const MyPagination = ({ totalCount, countPerPage, page, setPage }) => {
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={countPerPage}
      totalItemsCount={totalCount}
      pageRangeDisplayed={10}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={setPage}
    />
  );
};

MyPagination.defaultProps = {
  totalCount: 1,
  countPerPage: 10,
  page: 1,
  setPage: 1,
};

export default MyPagination;

// const [page, setPage] = useState(1);

// const handlePageChange = (page) => {
//   setPage(page);
// };

// prevPageText={<img src={process.env.PUBLIC_URL + `/assets/prev.png`} />}
// nextPageText={<img src={process.env.PUBLIC_URL + `/assets/next.png`} />}
// firstPageText={<img src={process.env.PUBLIC_URL + `/assets/first.png`} />}
// lastPageText={<img src={process.env.PUBLIC_URL + `/assets/last.png`} />}
