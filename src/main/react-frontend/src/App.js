import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main/Main";
import Community from "./pages/community/Community";
import Adoption from "./pages/adoption/Adoption";
import VolunteerActivity from "./pages/volunteerActivity/VolunteerActivity";
import MyPage from "./pages/Mypage/MyPage";
import AdoptionEdit from "./pages/adoption/AdoptionEdit";
import MyVolunteer from "./pages/Mypage/MyVolunteer";
import MyFavoriteVolunteer from "./pages/Mypage/MyFavoriteVolunteer";
import AdoptionThumbnailEdit from "./pages/adoption/AdoptionThumbnailEdit";
import VolunteerActivityEdit from "./pages/volunteerActivity/VolunteerActivityEdit";
import VolunteerActivityThumbnailEdit from "./pages/volunteerActivity/VolunteerActivityThumbnailEdit";
import Sponsor from "./pages/sponsor/Sponsor";
import Magazine from "./pages/community/Magazine";
import Login from "./pages/main/Login";
import Join from "./pages/main/Join";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>달리네 집 App.js</h1>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/community" element={<Community />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route
            path="/adoption/thumbnail/edit"
            element={<AdoptionThumbnailEdit />}
          />
          <Route
            path="/adoption/edit"
            element={<AdoptionEdit onCreate={null} />}
          />
          <Route path="/volunteerActivity" element={<VolunteerActivity />} />
          <Route
            path="/volunteerActivity/thumbnail/edit"
            element={<VolunteerActivityThumbnailEdit />}
          />
          <Route
            path="/volunteerActivity/edit"
            element={<VolunteerActivityEdit />}
          />
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/myVolunteer" element={<MyVolunteer />} />
          <Route
            path="/myFavoriteVolunteer"
            element={<MyFavoriteVolunteer />}
          />
          <Route path="/community/magazine" element={<Magazine />} />
          <Route path="/sponsor" element={<Sponsor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
