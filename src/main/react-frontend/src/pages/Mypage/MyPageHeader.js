import "./css/MyPageHeader.css";
import MyButton from "../../components/MyButton";
import { useNavigate } from "react-router-dom";

const MyPageHeader = () => {
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
        <MyButton text={"마이페이지"} type={"head_mypage"} />
      </div>
    </header>
  );
};

export default MyPageHeader;
