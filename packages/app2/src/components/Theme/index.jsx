import React from "react";
import "../../styles/theme.less";

const Theme = (props) => {
  const children = props.children;
  const style = props.style;
  return (
    <div
      className="default-theme"
      style={style}
    >
      {children}
    </div>
  );
};

export default Theme;
