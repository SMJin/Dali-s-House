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
import Login from "./pages/user/Login";
import Join from "./pages/user/Join";
import FindID from "./pages/user/FindID";
import FindPW from "./pages/user/FindPW";
import React, { useReducer, useRef } from "react";
import Community_New from "./pages/community/post/New";
import Community_Edit from "./pages/community/post/Edit";
import Community_Detail from "./pages/community/post/Detail";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("community", JSON.stringify(newState));
  return newState;
};

export const CommunityStateContext = React.createContext();
export const CommunityDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    category: 1,
    title: "title 1",
    content: "content 1",
    date: 1638969241901,
    heart: 25,
    reply: 25,
  },
  {
    id: 2,
    category: 2,
    title: "title 2",
    content: "content 2",
    date: 1638969241902,
    heart: 24,
    reply: 24,
  },
  {
    id: 3,
    category: 3,
    title: "title 3",
    content: "content 3",
    date: 1638969241903,
    heart: 23,
    reply: 23,
  },
  {
    id: 4,
    category: 4,
    title: "title 4",
    content: "content 4",
    date: 1638969241904,
    heart: 22,
    reply: 22,
  },
  {
    id: 5,
    category: 1,
    title: "title 5",
    content: "content 5",
    date: 1638969241905,
    heart: 21,
    reply: 21,
  },
  {
    id: 6,
    category: 2,
    title: "title 6",
    content: "content 6",
    date: 1638969241906,
    heart: 15,
    reply: 15,
  },
  {
    id: 7,
    category: 3,
    title: "title 7",
    content: "content 7",
    date: 1638969241907,
    heart: 14,
    reply: 14,
  },
  {
    id: 8,
    category: 4,
    title: "title 8",
    content: "content 8",
    date: 1638969241908,
    heart: 13,
    reply: 13,
  },
  {
    id: 9,
    category: 1,
    title: "title 9",
    content: "content 9",
    date: 1638969241909,
    heart: 12,
    reply: 12,
  },
  {
    id: 10,
    category: 2,
    title: "title 10",
    content: "content 10",
    date: 1638969241910,
    heart: 11,
    reply: 11,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  const dataId = useRef(data.length + 1);
  // CREATE
  const onCreate = (date, category, title, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        category,
        title,
        content,
      },
    });
    dataId.current += 1;
  };
  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // EDIT
  const onEdit = (targetId, date, category, title, content) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        category,
        title,
        content,
      },
    });
  };

  return (
    <CommunityStateContext.Provider value={data}>
      <CommunityDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <BrowserRouter>
          <div className="App">
            <h1>달리네 집 App.js</h1>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
              <Route path="/find/id" element={<FindID />} />
              <Route path="/find/password" element={<FindPW />} />
              <Route path="/community" element={<Community />} />
              <Route path="/community/new" element={<Community_New />} />
              <Route path="/community/edit/:id" element={<Community_Edit />} />
              <Route path="/community/:id" element={<Community_Detail />} />
              <Route path="/adoption" element={<Adoption />} />
              <Route
                path="/adoption/thumbnail/edit"
                element={<AdoptionThumbnailEdit />}
              />
              <Route
                path="/adoption/edit"
                element={<AdoptionEdit onCreate={null} />}
              />
              <Route
                path="/volunteerActivity"
                element={<VolunteerActivity />}
              />
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
      </CommunityDispatchContext.Provider>
    </CommunityStateContext.Provider>
  );
}

export default App;
