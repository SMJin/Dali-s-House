import "./css/Adoption.css";
import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import AdoptionThumbnail from "./AdoptionThumbnail";
import MyNav from "../volunteerActivity/MyNav";
import AdoptionBest from "./AdoptionBest";
import MyPagination from "../../components/MyPagination";

const Adoption = ({adoptionList}) => {

  const regionProps = {
    pageName: "입양연결",
    region1: "전국",
    region2: "전국",
    region3: "전국",
  };

  // const adoptionThumbnailProps = {
  //   name: "달리",
  //   age: "8~9개월",
  //   sex: "남아",
  //   neutering: true,
  //   identification: true,
  // };

  return (
    <div>
      <h1>입양 페이지</h1>
      <MyHeader />
      <AdoptionBest />
      <div className="adoption_thumbnail_board">
        <div className='adoption_thumbnail_board_nav'>
          <MyNav {...regionProps} />
          <h6>{adoptionList.length} 개의 게시물이 있습니다.</h6>
        </div>
        <div className='adoption_thumbnail_board_contents'>
          {console.log(adoptionList)}
          {adoptionList.map((it) => (
            <AdoptionThumbnail key={it.id} {...it} />
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
