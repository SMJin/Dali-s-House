import { useContext, useEffect, useState } from "react";
import { CommunityStateContext } from "../../../../App";
import MyPagination from "../../../../components/MyPagination";
import PostItem from "./PostItem";

const PostList = ({ postList, postLength }) => {
  const [totalCount, setTotalCount] = useState(1);
  const limit = 5;
  //const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    if ((postLength = !0)) {
      setTotalCount(postLength);
    }
  });

  const getProcessedPostList = () => {
    // 최신순으로 게시글 정렬
    const compare = (a, b) => {
      return parseInt(b.date) - parseInt(a.date);
    };

    const copyList = JSON.parse(JSON.stringify(postList));
    const sortedList = copyList.sort(compare);
    return sortedList;
  };

  return (
    <div>
      {getProcessedPostList()
        .slice(offset, offset + limit)
        .map((it) => (
          <div key={it.id}>
            <PostItem key={it.id} {...it} />
          </div>
        ))}
      <MyPagination
        totalCount={totalCount}
        countPerPage={5}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

PostList.defaultProps = { postList: [] };

export default PostList;
