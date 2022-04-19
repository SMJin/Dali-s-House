import "./css/TopVolList.css";
import TopVolList_item from "./component/TopVolList_item";

const TopVolList = () => {
  return (
    <div className="TopVolList">
      <TopVolList_item rank={1} name={"Journey"} grade={"top"} v_hour={39} />
      <TopVolList_item rank={2} name={"이생강"} grade={"mid"} v_hour={35} />
      <TopVolList_item rank={3} name={"쿠마야"} grade={"bot"} v_hour={33} />
      <TopVolList_item rank={4} name={"몽몽"} grade={"top"} v_hour={26} />
      <TopVolList_item rank={5} name={"구름이"} grade={"bot"} v_hour={23} />
    </div>
  );
};
export default TopVolList;
