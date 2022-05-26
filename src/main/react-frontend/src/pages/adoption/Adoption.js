import "./css/Adoption.css";
import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import AdoptionThumbnail from "./AdoptionThumbnail";
import AdoptionBest from "./AdoptionBest";
import MyPagination from "../../components/MyPagination";
import { useEffect, useState } from "react";
import axios from "axios";
import MyButton from "../../components/MyButton";
import { useNavigate } from "react-router-dom";
import MyTitle from "../../components/MyTitle";
import MySearch from "../../components/MySearch";

const Adoption = () => {
  useEffect(() => {
    fetch("/adoption")
      .then((r) => console.log(r.json()))
      .catch((e) => console.log(e));
  }, []);

  const navigate = useNavigate();

  const goAdoptionEdit = () => {
    navigate(`/adoption/edit`);
  };

  const [adoptionThumbnailList, setAdoptionThumbnailList] = useState([]);

  const [totalCount, setTotalCount] = useState(1);
  const limit = 16;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    axios({
      url: "/api/adoptionThumbnails/1/24",
      method: "GET",
    }).then((res) => {
      setAdoptionThumbnailList(res.data);
    });
  }, []);

  useEffect(() => {
    if (adoptionThumbnailList.length != 0) {
      setTotalCount(adoptionThumbnailList.length);
    }
  });

  return (
    <div>
      <MyHeader />

      <img
        className="adoptionBest"
        src={process.env.PUBLIC_URL + `/assets/adoptionBest.png`}
      />
      <div className="adoption_thumbnail_board">
        <div className="adoption_thumbnail_board_titlewrapper">
          <MyTitle titleText={"입양연결"} />
          <MySearch />
        </div>
        <div className="adoption_thumbnail_board_titlewrapper">
          <h6>{totalCount} 개의 게시물이 있습니다.</h6>
        </div>
        <div className="adoption_thumbnail_board_contents">
          {adoptionThumbnailList
            .slice(offset, offset + limit)
            .map((item, index) => (
              <AdoptionThumbnail key={index} {...item} />
            ))}
        </div>
      </div>
      <MyPagination
        totalCount={totalCount}
        countPerPage={limit}
        page={page}
        setPage={setPage}
      />
      <MyFooter />
    </div>
  );
};

Adoption.defaultProps = {
  adoptionList: [],
};

export default Adoption;
