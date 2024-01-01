import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Theme from "../../components/Theme";
import "./index.less";
import Counter from "../../features/counter/counter";

const Home = () => {
  const navigate = useNavigate();

  const OnClick = async () => {
    navigate("/about");
  };

  return (
    <div>
      home
      <button onClick={OnClick}>about</button>
      <Theme>
        <div className="classname1">as</div>
        <div className="classname2">as</div>
        <div className="default-theme">as</div>
        <div>as</div>
      </Theme>
      <Counter />
    </div>
  );
};

export default Home;
