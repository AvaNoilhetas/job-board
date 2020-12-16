import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <p class="footer_text">{props.text}</p>
    </footer>
  );
}
export default Footer;
