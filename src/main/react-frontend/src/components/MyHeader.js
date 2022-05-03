import "./css/MyHeader.css";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

const MyHeader = () => {
  const navigate = useNavigate();

  const goMain = () => {
    navigate(`/`);
  };

  const goVolunteer = () => {
    navigate(`/volunteerActivity`);
  };

  const goAdoption = () => {
    navigate(`/adoption`);
  };

  const goCommunity = () => {
    navigate(`/community`);
  };

  const goLogin = () => {
    navigate(`/login`);
  };

  const goJoin = () => {
    navigate(`/join`);
  };

  return (
    <header>
      <div>
        <MyButton text={"달리네집"} type={"head_logo"} onClick={goMain} />
      </div>

      <div>
        <MyButton text={"봉사활동"} type={"head_menus"} onClick={goVolunteer} />
      </div>
      <div>
        <MyButton text={"입양연결"} type={"head_menus"} onClick={goAdoption} />
      </div>
      <div>
        <MyButton text={"커뮤니티"} type={"head_menus"} onClick={goCommunity} />
      </div>
      <div>
        <MyButton text={"LOGIN"} type={"head_login"} onClick={goLogin} />
      </div>
      <div>
        <MyButton text={"JOIN"} type={"head_login"} onClick={goJoin} />
      </div>
    </header>
  );
};

export default MyHeader;
