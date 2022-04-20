import MyImage from "../../components/MyImage";
import "./css/SearchBox.css"

const SearchBox = () => {
    return (
        <div className="search_box" >
            <input
                className="search_input"
            />
            <MyImage
                type={"icon_search"}
                imgUrl={"/assets/search_glass.png"}
            />
        </div>
    );
}

export default SearchBox;