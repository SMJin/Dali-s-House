import "./css/Title.css";

const Title = ({ titleText, totalbutton }) => {
  return (
    <div className="Title">
      <div className="titleText">
        <b>{titleText}</b>
      </div>
      <div className="totalbutton">{totalbutton}</div>
    </div>
  );
};

export default Title;
