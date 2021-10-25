import React from "react";
import "./styles.less";

export default function ({ children, title }) {
  return (
    <div className="box">
      <header className="box__title">{title}</header>
      {children}
    </div>
  );
}
