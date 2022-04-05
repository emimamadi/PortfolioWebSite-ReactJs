import React from "react";

import "./header.css";

import CTA from "./CTA";

import HeaderSocial from "./headerSocial";

import ME from "../../asset/me.png";


const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Emad</h1>
        <h5 className="text-light">Web Programmer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
};

export default header;
