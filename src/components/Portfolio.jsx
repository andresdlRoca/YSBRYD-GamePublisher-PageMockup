import React, { useState, useEffect, useRef } from "react";
import './styles/Portfolio.css';
import vallhallathumb from "../assets/vallhallathumb.jpg";
import masqueradathumb from "../assets/masqueradathumb.jpg";
import nirvannathumb from "../assets/nirvannathumb.png";
import npfbthumb from "../assets/npfbthumb.png";
import SRCthumb from "../assets/SRCthumb.jpg";
import WOHthumb from "../assets/WOHthumb.png";
import yiikthumb from "../assets/yiikthumb.jpg";


export default function Portfolio() {

    return (
        <div className="portfolio" id="portfolio">
            <div className="TitleLabels" id="portfolioid">Portfolio</div>
            <div className="portfoliosubtitle">DISCOVER THESE WORLDS OF EMOTIVE EXPERIENCES</div>
            <div className="platformgrid">
                <ul className="platformlist">
                    <li>ALL</li>
                    <li>CONSOLES</li>
                    <li>DESKTOP</li>
                    <li>IOS</li>
                    <li>LINUX</li>
                    <li>MAC</li>
                    <li>PC</li>
                    <li>PS VITA</li>
                    <li>PS4</li>
                    <li>SWITCH</li>
                    <li>XBOX ONE</li>
                </ul>
            </div>
            <div className="gamegrid">
                <div className="gamelist">
                    <div className="vallhallathumb">VA-11 HALL-A
                        <img className="GameThumb" id="vallhalla" src={vallhallathumb} alt="VA-11 HALL-A"/>
                    </div>
                    <div className="masqueradathumb">MASQUERADA: SONGS AND SHADOWS
                        <img className="GameThumb" id="masquerada" src={masqueradathumb} alt="MASQUERADA: SONGS AND SHADOWS"/>
                    </div>
                    <div className="srcthumb">SHE REMEMBERED CATERPILLARS
                        <img className="GameThumb" id="src" src={SRCthumb} alt="SHE REMEMBERED CATERPILLARS"/>
                    </div>
                    <div className="yiikthumb">YIIK: A POST MODERN RPG
                        <img className="GameThumb" id="yiik" src={yiikthumb} alt="YIIK: A POST MODERN RPG"/>
                    </div>
                    <div className="worldofhorrorthumb">WORLD OF HORROR
                        <img className="GameThumb" id="WOH" src={WOHthumb} alt="WORLD OF HORROR"/>
                    </div>
                    <div className="nirvannathumb">N1RV ANN-A
                        <img className="GameThumb" id="nirvanna" src={nirvannathumb} alt="N1RV ANN-A"/>
                    </div>
                    <div className="noplacethumb">NO PLACE FOR BRAVERY
                        <img className="GameThumb" id="noplaceforbravery" src={npfbthumb} alt="NO PLACE FOR BRAVERY"/>
                    </div>
                </div>
            </div>


        </div>
    );

}