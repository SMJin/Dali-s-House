import Magazine_item from "./component/Magazine_item";
import "./css/MagazineList.css";

const MagazineList = () => {
  return (
    <div className="MagazineList">
      <Magazine_item
        id={1}
        category={"보호소"}
        title1={"해피퍼피 보호소에"}
        title2={"새 친구들이 들어왔어요!"}
      />
      <Magazine_item
        id={2}
        category={"봉사활동"}
        title1={"다들 여기서 모하개?"}
        title2={"함께하는 산책봉사!"}
      />
      <Magazine_item
        id={3}
        category={"입양후기"}
        title1={"새로운 집에서 빠르게"}
        title2={"적응한 호앙이네 비법은?!"}
      />
    </div>
  );
};

export default MagazineList;
