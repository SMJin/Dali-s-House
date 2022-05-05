import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CommunityStateContext } from "../../../App";
import CommPostEditor from "./CommunityEditor";

const Community_Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [originData, setOriginData] = useState();

  const postList = useContext(CommunityStateContext);

  useEffect(() => {
    if (postList.length > 0) {
      const targetPost = postList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );

      if (targetPost) {
        setOriginData(targetPost);
      } else {
        alert("잘못된 접근입니다.");
        navigate("/community", { replace: true });
      }
    }
  }, [id, postList]);

  return (
    <div>
      {originData && <CommPostEditor isEdit={true} originData={originData} />}
    </div>
  );
};

export default Community_Edit;
