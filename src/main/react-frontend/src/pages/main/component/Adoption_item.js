import "./css/Adoption_item.css";

const Adoption_item = ({ name, age, sex, neutering, identification }) => {
  return (
    <div className="Adoption_item">
      <div className="imgbox">
        <img
          class="img_main"
          src={process.env.PUBLIC_URL + `/assets/puppy.jpg`}
        />
        <div className="title">{name}</div>
        <div className="options_1">
          {sex}·{age}
        </div>
        <div className="options_2">
          중성화{neutering ? "O" : "X"} 인식표{identification ? "O" : "X"}
        </div>
      </div>
    </div>
  );
};

export default Adoption_item;
