import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main/Main";
import Community from "./pages/community/Community";
import Adoption from "./pages/adoption/Adoption";
import VolunteerActivity from "./pages/VolunteerActivity";
import MyPage from "./pages/Mypage";
import AdoptionDetails from "./pages/adoption/AdoptionDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>달리네 집 App.js</h1>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/community" element={<Community />} />
          <Route path="/adoption" element={<Adoption />} />
          <Route path="/adoption/:id" element={<AdoptionDetails />} />
          <Route path="/volunteerActivity" element={<VolunteerActivity />} />
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
