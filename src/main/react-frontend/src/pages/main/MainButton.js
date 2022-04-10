import "./css/MainButton.css";

const MainButton = ({ text, onClick }) => {
  return (
    <div>
      <button className={"MainButton"} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default MainButton;
