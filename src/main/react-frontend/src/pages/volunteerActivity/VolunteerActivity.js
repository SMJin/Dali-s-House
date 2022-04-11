import "./css/VounteerActivity.css"
import MyImage from "../../components/MyImage";
import MyHeader from "../../components/MyHeader";
import MyNav from "./MyNav";
import VolunteerActivityThumbnail from "./VolunteerActivityThumbnail"
import MyFooter from "../../components/MyFooter";

const VolunteerActivity = () => {
    return (
        <div className="VolunteerActivity">
            <h1>봉사활동 페이지</h1>
            <MyHeader />
            <MyImage imgUrl={"/assets/main_volunteercs.png"} />
            <MyNav />
            <div className="VolunteerActivityList">
                <VolunteerActivityThumbnail
                    imgUrl={"/assets/vol_img.png"}
                    title={"아직 엄마 품이 필요한 고양이들에게 사랑을 나누어 주세요."}
                    content={"사랑냥이 보호센터"}
                />
                <VolunteerActivityThumbnail
                    imgUrl={"/assets/vol_img.png"}
                    title={"아직 엄마 품이 필요한 고양이들에게 사랑을 나누어 주세요."}
                    content={"사랑냥이 보호센터"}
                />
                <VolunteerActivityThumbnail
                    imgUrl={"/assets/vol_img.png"}
                    title={"아직 엄마 품이 필요한 고양이들에게 사랑을 나누어 주세요."}
                    content={"사랑냥이 보호센터"}
                />
                <VolunteerActivityThumbnail
                    imgUrl={"/assets/vol_img.png"}
                    title={"아직 엄마 품이 필요한 고양이들에게 사랑을 나누어 주세요."}
                    content={"사랑냥이 보호센터"}
                />
                <VolunteerActivityThumbnail
                    imgUrl={"/assets/vol_img.png"}
                    title={"아직 엄마 품이 필요한 고양이들에게 사랑을 나누어 주세요."}
                    content={"사랑냥이 보호센터"}
                />
            </div>

            <MyFooter />
        </div>
    );
}

export default VolunteerActivity;