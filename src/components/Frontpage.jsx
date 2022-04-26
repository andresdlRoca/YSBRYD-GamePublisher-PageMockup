import React from "react";
import "./styles/Frontpage.css";
import backgroundFrontPage from "../assets/ysbryd-the-horde.jpg";

export default function Frontpage() {
  return (
    <div className="frontpage" id="frontpage" style={{ backgroundImage: `url(${backgroundFrontPage})` }}>
      <h1 className="frontpagetiles" id="tile1">We publish indie games.</h1>
      <h1 className="frontpagetiles" id="tile2">We love your spirit.</h1>
      <h1 className="frontpagetiles" id="tile3">We want you to rise.</h1>
      <a id="learnmorebtn" href="#about">[Learn More]</a>
    </div>
  );
}
