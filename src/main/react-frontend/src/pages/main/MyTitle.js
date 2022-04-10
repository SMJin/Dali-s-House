import "./css/MyTitle.css";

const MyTitle = ({ titleText, totalbutton }) => {
  return (
    <div className="MyTitle">
      <div className="titleText">
        <b>{titleText}</b>
      </div>
      <div className="totalbutton">{totalbutton}</div>
    </div>
  );
};

export default MyTitle;
