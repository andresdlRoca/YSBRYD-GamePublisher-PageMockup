import React, { useState, useEffect, useRef } from "react";
import './styles/NavBar.css';
import logonavbar from "../assets/logo-text.jpg";

export default function NavBar() {



    return (
        <div className="navbar">
            <img className="logonavbar" src={logonavbar} alt="Ysbryd Logo"/>
            <ul className="sections">
                <a href="#frontpage">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#WWDTitle">WHAT WE DO</a>
                <a href="#portfolio">PORTFOLIO</a>
                <a href="#WHY">WHY YSBRYD</a>
                <a href="#news">NEWS</a>
                <a href="#contact">CONTACT US</a>
                <a href=".merch">MERCH</a>
            </ul>
        </div>
    );

}