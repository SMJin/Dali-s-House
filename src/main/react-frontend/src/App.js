import "./App.css";
import React, { useEffect, useReducer, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./pages/main/Main";
import Community from "./pages/community/Community";
import Adoption from "./pages/adoption/Adoption";
import VolunteerActivity from "./pages/volunteerActivity/VolunteerActivity";
import MyPage from "./pages/Mypage/MyPage";
import AdoptionEdit from "./pages/adoption/AdoptionEdit";
import MyVolunteer from "./pages/Mypage/MyVolunteer";

import CertificateDetail from "./pages/Mypage/CertificateDetail";
import MyVolunteerCertificate from "./pages/Mypage/MyVolunteerCertificate";

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
import Community_New from "./pages/community/post/New";
import Community_Edit from "./pages/community/post/Edit";
import Community_Detail from "./pages/community/post/Detail";
import MyPageSponsor from "./pages/Mypage/MyPageSponsor";
import MagazinePost from "./pages/community/magazinepost/MagazinePost";

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

// 수정 시작
const reducerUser = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    // case "REMOVE": {
    //   newState = state.filter((it) => it.id !== action.targetId);
    //   break;
    // }
    // case "EDIT": {
    //   newState = state.map((it) =>
    //     it.id === action.data.id ? { ...action.data } : it
    //   );
    //   break;
    // }
    default:
      return state;
  }

  localStorage.setItem("user", JSON.stringify(newState));
  return newState;
};

export const UserStateContext = React.createContext();
export const UserDispatchContext = React.createContext();
// 수정 끝

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem("community");
    if (localData) {
      const postList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      if (postList.length >= 1) {
        dataId.current = parseInt(postList[0].id) + 1;
        dispatch({ type: "INIT", data: postList });
      }
    }
  }, []);

  // const dataId = useRef(1);
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
  const onEdit = (targetId, /*targetDate*/ date, category, title, content) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        // date: targetDate
        category,
        title,
        content,
      },
    });
  };

  // 수정 시작
  const [userData, userDispatch] = useReducer(reducerUser, []);

  useEffect(() => {
    const localData = localStorage.getItem("user");
    if (localData) {
      const userList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      if (userList.length >= 1) {
        UserDataId.current = parseInt(userList[0].id) + 1;
        userDispatch({ type: "INIT", data: userList });
      }
    }
  }, []);

  const UserDataId = useRef(userData.length + 1);

  // CREATE
  const onUserCreate = (id, password, name, number, email) => {
    userDispatch({
      type: "CREATE",
      data: {
        id,
        password,
        name,
        number,
        email,
      },
    });
    UserDataId.current += 1;
  };
  // 수정 끝

  return (
    <UserStateContext.Provider value={userData}>
      <UserDispatchContext.Provider value={{ onUserCreate }}>
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
                  <Route
                    path="/community/edit/:id"
                    element={<Community_Edit />}
                  />
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
                  <Route
                    path="/community/magazine/:id"
                    element={<MagazinePost />}
                  />
                  <Route path="/sponsor" element={<Sponsor />} />

                  <Route
                    path="/certificatedetail/:id"
                    element={<CertificateDetail />}
                  />
                  <Route
                    path="/myvolunteercertificate"
                    element={<MyVolunteerCertificate />}
                  />
                  <Route path="/mypageSponsor" element={<MyPageSponsor />} />
                </Routes>
              </div>
            </BrowserRouter>
          </CommunityDispatchContext.Provider>
        </CommunityStateContext.Provider>
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

export default App;

/*
<Route path="/sponsor/:id" element={<SponPost />} />
*/
