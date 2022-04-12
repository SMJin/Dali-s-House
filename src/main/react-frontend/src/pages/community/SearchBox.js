import "./css/SearchBox.css";

const SearchBox = () => {
  return (
    <div className="SearchBox">
      <input className="search_input" />
      <img
        className="search_icon"
        src={process.env.PUBLIC_URL + `/assets/search_glass.png`}
      />
    </div>
  );
};

export default SearchBox;
