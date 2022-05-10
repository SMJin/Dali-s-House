import "./css/MyPageHeader.css";

const MyPageHeader = () => {

return (
  <header>
    <div class="MyPageHeader">
    <ul>
      <li><a href="/" id="current">달리네집</a></li>
      <li><a href="VolunteerActivity">봉사활동</a>
        <ul>
          <li><a href="MyVolunteer">나의 봉사</a></li>
          <li><a href="MyFavoriteVolunteer">찜한 봉사</a></li>
          <li><a href="#">봉사인증서 발급</a></li>
        </ul>
      </li>

      <li><a href="Adoption">입양연결</a>
        <ul>
          <li><a href="#">하위1</a></li>
          <li><a href="#">하위2</a></li>
          <li><a href="#">하위3</a></li>
        </ul>
      </li>

      <li><a href="Community">커뮤니티</a>
        <ul>
          <li><a href="#">하위1</a></li>
          <li><a href="#">하위2</a></li>
          <li><a href="#">하위3</a></li>
        </ul>
      </li>

      <li><a href="Mypage">마이페이지</a></li>
    </ul>
  </div>
</header>
);
}

export default MyPageHeader;