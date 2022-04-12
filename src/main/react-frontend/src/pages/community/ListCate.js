import "./css/ListCate.css";

const ListCate = ({ category_id, category_descript, onClick, isSelected }) => {
  return (
    <div
      onClick={() => onClick(category_id)}
      className={[
        "ListCate",
        isSelected ? `Category_on_${category_id}` : `Category_off`,
      ].join(" ")}
    >
      <span>{category_descript}</span>
    </div>
  );
};

export default ListCate;
