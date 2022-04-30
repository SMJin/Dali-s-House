import "./css/FindID.css";

import React, { useState } from "react";
import MyFooter from "../../components/MyFooter";
import MyHeader from "../../components/MyHeader";

const FindID = () => {
  const [number, setNumber] = useState("");

  const checkNumber = (e) => {
    const regex = /^[0-9\b]{0,11}$/;

    if (regex.test(e.target.value)) {
      setNumber(e.target.value);
      console.log(e.target.value);
    }
  };

  return (
    <div>
      <h1>아이디 찾기 페이지</h1>
      <MyHeader />
      <div className="findID">
        <h2>아이디 찾기</h2>
      </div>
      <MyFooter />
    </div>
  );
};

export default FindID;
