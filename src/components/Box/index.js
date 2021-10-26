import React from "react";
import "./styles.less";
import BoxContainer from "./BoxContainer";

function Box({ children, title }) {
  return (
    <div className="box">
      <header className="box__title">{title}</header>
      {children}
    </div>
  );
}

Box.Container = BoxContainer;
export default Box;
