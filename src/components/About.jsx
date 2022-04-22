import React, { useState, useEffect, useRef } from "react";
import './styles/About.css';
import sitelogo from "../assets/logo-site.jpg"

export default function About() {



    return (
        <div className="about" id="about">
            <img id="sitelogo" src={sitelogo} alt="Logo of website"/>
            <h2 className="TitleLabels" id="AboutTitle">MAKE THE JOURNEY WITH YSBRYD</h2>
            <div id="AboutP">WE ARE A PUBLISHER LOOKING FOR <span>SPIRITED INDIE GAME DEVELOPERS</span> WHO HUNGER TO CREATE <span>GAMES WITH MAGIC.</span> WE ARE KINDRED SPIRITS WHO WANT TO SEE THESE GAMES EVOLVE AT EVERY STAGE, AND TO <span>SUCCEED WORLDWIDE</span>!</div>
            <h2 className="TitleLabels" id="WWDTitle">WHAT WE DO</h2>
        </div>
    );

}

