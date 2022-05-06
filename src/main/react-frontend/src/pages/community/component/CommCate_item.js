import "./css/CommCate_item.css";

const CommCate_item = ({
  category_id,
  category_descript,
  onClick,
  isSelected,
}) => {
  console.log(category_id, isSelected);
  return (
    <div
      onClick={() => onClick(category_id)}
      className={[
        "CommCate_item",
        isSelected ? `Category_on_${category_id}` : `Category_off`,
      ].join(" ")}
    >
      <span>{category_descript}</span>
    </div>
  );
};
export default CommCate_item;
