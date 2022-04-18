import "./css/Adoption.css";
import MyHeader from "../../components/MyHeader";
import MyFooter from "../../components/MyFooter";
import MyImage from "../../components/MyImage";
import AdoptionThumbnail from "./AdoptionThumbnail";
import MyNav from "../volunteerActivity/MyNav";
import AdoptionBest from "./AdoptionBest";
import MyPagination from "../../components/MyPagination";

const Adoption = () => {
  const regionProps = {
    pageName: "입양연결",
    region1: "전국",
    region2: "전국",
    region3: "전국",
  };

  const adoptionThumbnailProps = {
    name: "달리",
    age: "8~9개월",
    sex: "남아",
    neutering: true,
    identification: true,
  };

  return (
    <div>
      <h1>입양 페이지</h1>
      <MyHeader />
      <AdoptionBest />
      <MyNav {...regionProps} />
      <div className="adoption_thumbnail_board">
        <AdoptionThumbnail {...adoptionThumbnailProps} />
        <AdoptionThumbnail {...adoptionThumbnailProps} />
        <AdoptionThumbnail {...adoptionThumbnailProps} />
        <AdoptionThumbnail {...adoptionThumbnailProps} />
        <AdoptionThumbnail {...adoptionThumbnailProps} />
      </div>
      <MyPagination />
      <MyFooter />
    </div>
  );
};

export default Adoption;
