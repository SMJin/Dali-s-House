import "./css/Adoption.css";
import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import AdoptionThumbnail from "./AdoptionThumbnail";
import MyNav from "../volunteerActivity/MyNav";
import AdoptionBest from "./AdoptionBest";
import MyPagination from "../../components/MyPagination";
import {useEffect, useState} from "react";
import axios from "axios";

const Adoption = () => {

    useEffect(() => {
        fetch('/adoption')
            .then(r => console.log(r.json()))
            .catch(e => console.log(e));
    }, [])

    const regionProps = {
    pageName: "입양연결",
    region1: "전국",
    region2: "전국",
    region3: "전국",
    };

    const [adoptionThumbnailList, setAdoptionThumbnailList] = useState([]);

    useEffect(
        () => {
            axios({
                url: '/api/adoptionThumbnails',
                method: 'GET',
            }).then((res) => {
                setAdoptionThumbnailList(res.data);
            })
        }, []
    )

  return (
    <div>
      <h1>입양 페이지</h1>
      <MyHeader />
      <AdoptionBest />
      <div className="adoption_thumbnail_board">
        <div className='adoption_thumbnail_board_nav'>
          <MyNav {...regionProps} />
            <h6>{adoptionThumbnailList.length} 개의 게시물이 있습니다.</h6>
        </div>
        <div className='adoption_thumbnail_board_contents'>
            {adoptionThumbnailList.map((item) => (
                <AdoptionThumbnail key={item.id} {...item} />
            ))}
        </div>
      </div>
      <MyPagination />
      <MyFooter />
    </div>
  );
};

Adoption.defaultProps = {
  adoptionList: [],
}

export default Adoption;
