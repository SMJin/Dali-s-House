import "./css/MyFooter.css"
import MyButton from "./MyButton";

const MyFooter = () => {
    return (
        <div className="MyFooter">
            <div className="MyFooter_leftText">
                <h5>봉사활동 | 입양연결 | 커뮤니티</h5>
                <div><b>달리네 집</b> 경기도 용인시 수지구 죽전로 1F</div>
                <div><b>Tel.</b> 010 - 1234 - 5678</div>
                <div><b>후원계좌.</b> 국민 111 - 0000 - 0000 -11 사단법인 달리네 집</div>
            </div>
            <div className="MyFooter_rightText">
                <MyButton text={"달리네 집"} type={"head_logo"} />
                <div>@DalisHouse</div>
                <div>ⓒ DalisHouse.2022.All rights reserved</div>
            </div>
            <div className="MyFooter_finishLine"> </div>
        </div>
    );
}

export default MyFooter;