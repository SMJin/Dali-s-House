import "./css/PageMove.css";

const PageMove = ({ page_id, onClick, isSelected }) => {
  return (
    <div
      onClick={() => onClick(page_id)}
      className={[
        "PageMove",
        isSelected ? `Page_on_${page_id}` : `Page_off`,
      ].join(" ")}
    >
      {page_id}
    </div>
  );
};

export default PageMove;
