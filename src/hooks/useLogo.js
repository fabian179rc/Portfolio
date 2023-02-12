import React from "react";
import logo from "../assets/img/logo.svg";
import logoBlack from "../assets/img/logoBlack.svg";

const Logo = ({ darkMode }) => {
  return (
    <img
      src={darkMode ? logo : logoBlack}
      alt="Logo"
      style={{
        width: "100px",
        height: "100px",
      }}
    />
  );
};

export default Logo;
