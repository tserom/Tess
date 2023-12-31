import { useEffect, useState } from "react";
import "../../styles/theme.less";
import { queryThemeApi } from "../../apis/queryTheme";

const Theme = (props) => {
  const children = props.children;
  const [themeStyle, setThemeStyle] = useState({});

  const fetchTheme = async () => {
    try {
      const res = await queryThemeApi();
      if (res.code === 200 && res.data) {
        setThemeStyle(data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchTheme();
  }, []);
  return (
    <div className="default-theme" style={themeStyle}>
      {children}
    </div>
  );
};

export default Theme;
