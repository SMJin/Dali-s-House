import { useState } from "react";

import "./css/CommList.css";
import CommCate_item from "./component/CommCate_item";
import Comm_item from "./component/Comm_item";
import MyPagination from "../../components/MyPagination";

const listcategory = [
  { category_id: 1, category_descript: "전체" },
  { category_id: 2, category_descript: "봉사질문" },
  { category_id: 3, category_descript: "후기" },
  { category_id: 4, category_descript: "고민" },
  { category_id: 5, category_descript: "팀원모집" },
];

const CommList = ({ communityList }) => {
  const [category, setCategory] = useState(1);

  const handleClickCategory = (category) => {
    setCategory(category);
  };

  return (
    <div className="CommList">
      <div className="category_wrapper">
        {listcategory.map((it) => (
          <CommCate_item
            key={it.category_id}
            {...it}
            onClick={handleClickCategory}
            isSelected={it.category_id === category}
          />
        ))}
      </div>
      <h6>{communityList.length} 개의 게시물이 있습니다.</h6>

      <MyPagination />
    </div>
  );
};

CommList.defaultProps = {
  communityList: [],
};

export default CommList;

/*
<Comm_item
        id={1}
        name={"해피"}
        grade={"top"}
        time={1}
        text={
          "예삐가 사료를 잘 안먹어요. 건식 습식 다양하게 시도해 보았는데 영 먹지를 않네요. 점점 말라가는 모습이 많이 안타가운데 간식만 먹일수도 없고 ㅠㅠ 걱정입니다. 어떤 사료를 줘야 밥을 많이 먹을 수 있을까요?"
        }
        heart={15}
        reply={11}
      />
      <Comm_item
        id={2}
        name={"재롬이누나"}
        grade={"mid"}
        time={2}
        text={
          "예삐가 사료를 잘 안먹어요. 건식 습식 다양하게 시도해 보았는데 영 먹지를 않네요. 점점 말라가는 모습이 많이 안타가운데 간식만 먹일수도 없고 ㅠㅠ 걱정입니다. 어떤 사료를 줘야 밥을 많이 먹을 수 있을까요?"
        }
        heart={16}
        reply={10}
      />
      <Comm_item
        id={3}
        name={"고라파덕"}
        grade={"top"}
        time={3}
        text={
          "예삐가 사료를 잘 안먹어요. 건식 습식 다양하게 시도해 보았는데 영 먹지를 않네요. 점점 말라가는 모습이 많이 안타가운데 간식만 먹일수도 없고 ㅠㅠ 걱정입니다. 어떤 사료를 줘야 밥을 많이 먹을 수 있을까요?"
        }
        heart={17}
        reply={15}
      />
      <Comm_item
        id={4}
        name={"꼬부기"}
        grade={"bot"}
        time={4}
        text={
          "예삐가 사료를 잘 안먹어요. 건식 습식 다양하게 시도해 보았는데 영 먹지를 않네요. 점점 말라가는 모습이 많이 안타가운데 간식만 먹일수도 없고 ㅠㅠ 걱정입니다. 어떤 사료를 줘야 밥을 많이 먹을 수 있을까요?"
        }
        heart={18}
        reply={14}
      />
      <Comm_item
        id={5}
        name={"Journey"}
        grade={"top"}
        time={5}
        text={
          "예삐가 사료를 잘 안먹어요. 건식 습식 다양하게 시도해 보았는데 영 먹지를 않네요. 점점 말라가는 모습이 많이 안타가운데 간식만 먹일수도 없고 ㅠㅠ 걱정입니다. 어떤 사료를 줘야 밥을 많이 먹을 수 있을까요?"
        }
        heart={19}
        reply={5}
      />
*/
