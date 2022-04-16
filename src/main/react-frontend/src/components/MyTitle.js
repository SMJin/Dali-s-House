import "./css/MyTitle.css";

const MyTitle = ({ titleText, totalbutton }) => {
  return (
    <div className="MyTitle">
      <div className="titleText">{titleText}</div>
      <div className="totalbutton">{totalbutton}</div>
    </div>
  );
};

export default MyTitle;
