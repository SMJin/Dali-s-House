import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/MyPageMenu.css";

const MyPageMenuTest = ({ clicked }) => {
  const navigate = useNavigate();

  const [isVolunteer, setIsVolunteer] = useState(false);
  const [isSpon, setIsSpon] = useState(false);
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    if (clicked == "volunteer") {
      setIsVolunteer(true);
    } else if (clicked == "spon") {
      setIsSpon(true);
    } else if (clicked == "set") {
      setIsSet(true);
    }
  });

  return (
    <div className="MyPageMenuTest">
      <details className="menuTop" open={isVolunteer}>
        <summary>봉사 활동</summary>
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
        <summary>후원 기부</summary>
        <div>나의 후원</div>
        <div>나의 기부</div>
      </details>
      <details open={isSet}>
        <summary>설정</summary>
        <div>내 정보 수정</div>
      </details>
      <details className="menuBottom">
        <summary>공지사항</summary>
      </details>
    </div>
  );
};
export default MyPageMenuTest;
