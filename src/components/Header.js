import React from "react";
import Title from "./Title";
import "./Header.css";

function Header(props) {
  return (
    <header class="header">
      <Title title={props.title}></Title>
    </header>
  );
}
export default Header;
