import "./css/MyHeader.css";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const MyHeader = () => {
  const navigate = useNavigate();
  const confirm = JSON.parse(localStorage.getItem("login"));

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

  const goLogout = () => {
    localStorage.removeItem("login");
    window.location.replace(`/`);
  };

  const goJoin = () => {
    navigate(`/join`);
  };

  const goMypage = () => {
    navigate(`/mypage`);
  };

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (confirm != null) {
      setIsLogin(true);
    }
  });

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
        <MyButton
          text={isLogin ? "LOGOUT" : "LOGIN"}
          type={"head_login"}
          onClick={isLogin ? goLogout : goLogin}
        />
      </div>
      <div>
        <MyButton
          text={isLogin ? "MYPAGE" : "JOIN"}
          type={"head_login"}
          onClick={isLogin ? goMypage : goJoin}
        />
      </div>
    </header>
  );
};

export default MyHeader;
