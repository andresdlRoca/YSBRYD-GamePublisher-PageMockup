import React, { useState, useEffect, useRef } from "react";
import './styles/NavBar.css';
import logonavbar from "../assets/logo-text.jpg";

export default function NavBar() {

    return (
        <div className="navbar">
            <img className="logonavbar" src={logonavbar} alt="Ysbryd Logo"/>
            <ul className="sections">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>WHAT WE DO</li>
                <li>PORTFOLIO</li>
                <li>WHY YSBRYD</li>
                <li>NEWS</li>
                <li>CONTACT US</li>
                <li>MERCH</li>
            </ul>
        </div>
    );

}