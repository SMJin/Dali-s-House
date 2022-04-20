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
import { useRef, useState } from 'react';
import AdoptionThumbnailEdit from './pages/adoption/AdoptionThumbnailEdit';

// const dummyAdoptionList = [
//   {
//     id: 1,
//     name: "달리",
//     age: "8~9개월",
//     sex: "남아",
//     neutering: true,
//     identification: true,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     name: "달리",
//     age: "8~9개월",
//     sex: "남아",
//     neutering: true,
//     identification: true,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     name: "달리",
//     age: "8~9개월",
//     sex: "남아",
//     neutering: true,
//     identification: true,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 4,
//     name: "달리",
//     age: "8~9개월",
//     sex: "남아",
//     neutering: true,
//     identification: true,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 5,
//     name: "달리",
//     age: "8~9개월",
//     sex: "남아",
//     neutering: true,
//     identification: true,
//     created_date: new Date().getTime(),
//   },
  
// ]

function App() {

  const [adoptionList, setAdoptionList] = useState([]);
  const adoptionThumbnail_id = useRef(0);

  const onCreateAdoptionThumbnail = (name, age, sex, neutering, identification) => {
    const id = adoptionThumbnail_id.current;
    const newThumbnail = {
      id,
      name,
      age,
      sex,
      neutering,
      identification,
      created_date: new Date().getTime(),
    }
    adoptionThumbnail_id.current += 1;
    setAdoptionList([newThumbnail, ...adoptionList])
  }

  return (
    <BrowserRouter>
      <div className="App">
        <h1>달리네 집 App.js</h1>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/community" element={<Community />} />
          <Route path="/adoption" element={<Adoption adoptionList={adoptionList} />} />
          <Route path='/adoption/thumbnailEdit' element={<AdoptionThumbnailEdit onCreate={onCreateAdoptionThumbnail} />} />
          <Route path="/adoption/edit" element={<AdoptionEdit onCreate={null} />} />
          <Route path="/volunteerActivity" element={<VolunteerActivity />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/myvolunteer" element={<MyVolunteer />} />
          <Route path="/myfavoritevolunteer" element={<MyFavoriteVolunteer />} />
          <Route path="/myPage" element={<MyPage />} />
          <Route path='/myVolunteer' element={<MyVolunteer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
