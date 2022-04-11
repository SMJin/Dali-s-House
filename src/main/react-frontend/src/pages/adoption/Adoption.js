import './css/Adoption.css';
import MyHeader from "../../components/MyHeader";
import MyImage from "../../components/MyImage";
import SearchBox from "./SearchBox";
import AdoptionThumbnail from "./AdoptionThumbnail";
import MyFooter from "../../components/MyFooter";

const Adoption = () => {
    return (
        <div>
            <h1>입양 페이지</h1>
            <MyHeader />
            <h3>입양연결</h3>
            <div className="adoption_best">
                <MyImage type={"img_best"} />
                <div className="adoption_best_content">
                    <h3>달리에게 가족이 생겼어요!</h3>
                    <h5>베스트 입양 후기 글</h5>
                </div>
            </div>
            <SearchBox />
            <div className="adoption_menu" >
                <h5>종류 성별 중성화 지역</h5>
            </div>
            <div className="adoption_thumbnail_board">
            <AdoptionThumbnail
                type={"dog"}
                name={"달리"}
                address={"경기도 용인시"}
                sex={"남아"}
                neutering={true}
                identification={true}
            />
            <AdoptionThumbnail
                type={"dog"}
                name={"달리"}
                address={"경기도 용인시"}
                sex={"남아"}
                neutering={true}
                identification={true}
            />
            <AdoptionThumbnail
                type={"dog"}
                name={"달리"}
                address={"경기도 용인시"}
                sex={"남아"}
                neutering={true}
                identification={true}
            />
            <AdoptionThumbnail
                type={"dog"}
                name={"달리"}
                address={"경기도 용인시"}
                sex={"남아"}
                neutering={true}
                identification={true}
            />
            <AdoptionThumbnail
                type={"dog"}
                name={"달리"}
                address={"경기도 용인시"}
                sex={"남아"}
                neutering={true}
                identification={true}
            />
            <AdoptionThumbnail
                type={"dog"}
                name={"달리"}
                address={"경기도 용인시"}
                sex={"남아"}
                neutering={true}
                identification={true}
            />
            </div>

            <MyFooter />
        </div>
    );
}

export default Adoption;