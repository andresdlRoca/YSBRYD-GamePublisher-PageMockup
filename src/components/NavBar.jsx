import React, { useState, useEffect, useRef } from "react";
import './styles/NavBar.css';
import logonavbar from "../assets/logo-text.jpg";

export default function NavBar() {



    return (
        <div className="navbar">
            <a href="#frontpage">
                <img href="#frontpage" className="logonavbar" src={logonavbar} alt="Ysbryd Logo"/>
            </a>
            <ul className="sections">
                <a href="#frontpage">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#WWDTitle">WHAT WE DO</a>
                <a href="#portfolio">PORTFOLIO</a>
                <a href="#WHY">WHY YSBRYD</a>
                <a href="#news">NEWS</a>
                <a href="#contact">CONTACT US</a>
                <a href="https://merch.ysbryd.net">MERCH</a>
            </ul>
        </div>
    );

}