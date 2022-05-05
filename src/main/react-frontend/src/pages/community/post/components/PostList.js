import { useState } from "react";
import PostItem from "./PostItem";

const PostList = ({ postList }) => {
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
      {getProcessedPostList().map((it) => (
        <div key={it.id}>
          <PostItem key={it.id} {...it} />
        </div>
      ))}
    </div>
  );
};

PostList.defaultProps = { postList: [] };

export default PostList;
