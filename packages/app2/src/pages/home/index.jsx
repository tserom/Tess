import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import Theme from "../../components/Theme";
import "./index.less";
import { queryThemeApi } from "../../apis/queryTheme";

const Home = () => {
  const navigate = useNavigate();

  const [themeStyle, setThemeStyle] = useState({});

  const OnClick = async () => {
    const res = await queryThemeApi();
    setThemeStyle(res);
  };

  return (
    <div>
      home
      <button onClick={OnClick}>about</button>
      <Theme style={themeStyle}>
        <div className="classname1">as</div>
        <div className="classname2">as</div>
        <div className="default-theme">as</div>
        <div>as</div>
      </Theme>
    </div>
  );
};

export default Home;
