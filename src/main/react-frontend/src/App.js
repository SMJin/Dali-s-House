import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main/Main";
import Community from "./pages/community/Community";
import Adoption from "./pages/adoption/Adoption";
import VolunteerActivity from "./pages/volunteerActivity/VolunteerActivity";
import MyPage from "./pages/Mypage/MyPage";
import AdoptionEdit from "./pages/adoption/AdoptionEdit";
import MyVolunteer from "./pages/Mypage/MyVolunteer"
import MyFavoriteVolunteer from "./pages/Mypage/MyFavoriteVolunteer"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>달리네 집 App.js</h1>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/community" element={<Community />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/adoption/edit" element={<AdoptionEdit />} />
          <Route path="/volunteerActivity" element={<VolunteerActivity />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/myvolunteer" element={<MyVolunteer />} />
          <Route path="/myfavoritevolunteer" element={<MyFavoriteVolunteer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
