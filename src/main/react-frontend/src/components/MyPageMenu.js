import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/MyPageMenu.css";

const MyPageMenuTest = ({ clicked }) => {
  const navigate = useNavigate();

  const [isVolunteer, setIsVolunteer] = useState(false);
  const [isSpon, setIsSpon] = useState(false);
  const [isSet, setIsSet] = useState(false);
  const [isNotice, setIsNotice] = useState(false);

  const [isClick_vol, setIsClick_vol] = useState(0);
  const [isClick_spon, setIsClick_spon] = useState(0);
  const [isClick_set, setIsClick_set] = useState(0);
  const [isClick_notice, setIsClick_notice] = useState(0);

  useEffect(() => {
    if (clicked == "volunteer" || isClick_vol % 2 == 1) {
      setIsVolunteer(true);
    } else {
      setIsVolunteer(false);
    }
    if (clicked == "spon" || isClick_spon % 2 == 1) {
      setIsSpon(true);
    } else {
      setIsSpon(false);
    }
    if (clicked == "set" || isClick_set % 2 == 1) {
      setIsSet(true);
    } else {
      setIsSet(false);
    }
    if (clicked == "set" || isClick_notice % 2 == 1) {
      setIsNotice(true);
    } else {
      setIsNotice(false);
    }
  });

  const onClick_vol = () => {
    setIsClick_vol(isClick_vol + 1);
  };

  const onClick_spon = () => {
    setIsClick_spon(isClick_spon + 1);
  };

  const onClick_set = () => {
    setIsClick_set(isClick_set + 1);
  };

  const onClick_notice = () => {
    setIsClick_notice(isClick_notice + 1);
  };

  return (
    <div className="MyPageMenuTest">
      <details className="menuTop" open={isVolunteer}>
        <summary onClick={onClick_vol}>
          봉사 활동{" "}
          <img
            className="mypagemenuIcon"
            src={
              isVolunteer
                ? process.env.PUBLIC_URL + `./assets/open.png`
                : process.env.PUBLIC_URL + `./assets/close.png`
            }
          />
        </summary>
        <div
          onClick={() => {
            navigate(`/MyVolunteer`);
          }}
        >
          나의봉사
        </div>
        <div
          onClick={() => {
            navigate(`/MyFavoriteVolunteer`);
          }}
        >
          찜한봉사
        </div>
        <div
          onClick={() => {
            navigate(`/MyVolunteerCertificate`);
          }}
        >
          봉사인증서발급
        </div>
      </details>
      <details open={isSpon}>
        <summary onClick={onClick_spon}>
          후원 기부{" "}
          <img
            className="mypagemenuIcon"
            src={
              isSpon
                ? process.env.PUBLIC_URL + `./assets/open.png`
                : process.env.PUBLIC_URL + `./assets/close.png`
            }
          />
        </summary>
        <div
          onClick={() => {
            navigate(`/mypageSponsor`);
          }}
        >
          후원내역
        </div>
        <div>기부내역</div>
      </details>
      <details open={isSet}>
        <summary onClick={onClick_set}>
          설정{" "}
          <img
            className="mypagemenuIcon"
            src={
              isSet
                ? process.env.PUBLIC_URL + `./assets/open.png`
                : process.env.PUBLIC_URL + `./assets/close.png`
            }
          />
        </summary>
        <div>내 정보 수정</div>
      </details>
      <details className="menuBottom">
        <summary onClick={onClick_notice}>
          공지사항{" "}
          <img
            className="mypagemenuIcon"
            src={
              isNotice
                ? process.env.PUBLIC_URL + `./assets/open.png`
                : process.env.PUBLIC_URL + `./assets/close.png`
            }
          />
        </summary>
      </details>
    </div>
  );
};
export default MyPageMenuTest;
