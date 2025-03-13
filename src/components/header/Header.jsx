import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Adity Roy</h1>
        <h5 className="text-light">Web Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/042/165/684/small/a-woman-in-a-business-suit-holding-a-laptop-free-png.png" alt="me" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
