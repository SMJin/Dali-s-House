import "./css/MySearch.css";

const MySearch = () => {
  return (
    <div className="MySearch">
      <div className="MySearch_input_box">
        <input className="MySearch_input" placeholder="단어를 입력해주세요." />
      </div>
      <div className="MySearch_button_box">
        <div className="button_icon">
          <img
            className="button_icon_img"
            src={process.env.PUBLIC_URL + `/assets/search_icon.png`}
          />
        </div>
        <div className="button_text">검색</div>
      </div>
    </div>
  );
};

export default MySearch;
