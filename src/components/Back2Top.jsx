import React, { useState, useEffect, useRef } from "react";
import './styles/Back2Top.css';
import backtotop from "../assets/backtotop.png";

export default function Back2Top() {

    return (
        <>
        <a href="#frontpage">
            <div className="backtotop">
                
                    <img src={backtotop} alt="backtotop ic" />
                
            </div>
        </a>
        </>

    );

}