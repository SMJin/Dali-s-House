import "./css/AdoptList.css";

const AdoptList = ({ name, age, sex, neutering, identification }) => {
  return (
    <div className="AdoptList">
      <img class="img" src={process.env.PUBLIC_URL + `/assets/puppy.jpg`} />
      <div className="AdoptList_title">
        <span className="AdoptList_name">
          <b>{name}</b>
        </span>
      </div>
      <div className="AdoptList_options_1">
        {sex}·{age}
      </div>
      <div className="AdoptList_options_2">
        중성화{neutering ? "O" : "X"} 인식표{identification ? "O" : "X"}
      </div>
    </div>
  );
};

export default AdoptList;
