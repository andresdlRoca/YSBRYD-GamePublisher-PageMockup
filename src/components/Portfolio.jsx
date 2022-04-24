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

    const [clickedGame, setGame] = useState("");
    const [clickedPlatform, setPlatform] = useState("all");

    const vallhallaplats = ["all", "linux", "mac", "pc", "ps4", "switch"];
    const masqueradaplats = ["all", "linux", "mac", "pc", "ps4", "switch", "xboxone"];
    const srcplats = ["all", "ios", "mac", "pc", "switch"];
    const yiikplats = ["all", "linux", "mac", "pc", "psvita", "ps4", "switch"];
    const wohplats = ["all", "mac", "pc", "ps4", "switch"];
    const nirvannaplats = ["all", "mac", "pc", "ps4", "switch"];
    const noplaceplats = ["all", "consoles", "desktop", "pc", "switch"];

    const changePlatform = (platform) => {
        setPlatform(platform);
    }

    const changeGame = (game) => {
        setGame(game);
    }


    useEffect(() => {
        console.log(`plataform es ${clickedPlatform}`);
        console.log(`el juego es ${clickedGame}`);
        console.log(vallhallaplats.includes(clickedPlatform));
    }, [clickedPlatform, clickedGame]);


    return (
        <div className="portfolio" id="portfolio">
            <div className="TitleLabels" id="portfolioid">Portfolio</div>
            <div className="portfoliosubtitle">DISCOVER THESE WORLDS OF EMOTIVE EXPERIENCES</div>
            <div className="platformgrid">
                <ul className="platformlist">
                    <div className="listing">
                        <li onClick={() => changePlatform("all")} className={clickedPlatform=="all" ? "selectedplat" : ""}>ALL</li>
                        <li onClick={() => changePlatform("consoles")} className={clickedPlatform=="consoles" ? "selectedplat" : ""}>CONSOLES</li>
                        <li onClick={() => changePlatform("desktop")} className={clickedPlatform=="desktop" ? "selectedplat" : ""}>DESKTOP</li>
                        <li onClick={() => changePlatform("ios")} className={clickedPlatform=="ios" ? "selectedplat" : ""}>IOS</li>
                        <li onClick={() => changePlatform("linux")} className={clickedPlatform=="linux" ? "selectedplat" : ""}>LINUX</li>
                        <li onClick={() => changePlatform("mac")} className={clickedPlatform=="mac" ? "selectedplat" : ""}>MAC</li>
                        <li onClick={() => changePlatform("pc")} className={clickedPlatform=="pc" ? "selectedplat" : ""}>PC</li>
                        <li onClick={() => changePlatform("psvita")} className={clickedPlatform=="psvita" ? "selectedplat" : ""}>PS VITA</li>
                        <li onClick={() => changePlatform("ps4")} className={clickedPlatform=="ps4" ? "selectedplat" : ""}>PS4</li>
                        <li onClick={() => changePlatform("switch")} className={clickedPlatform=="switch" ? "selectedplat" : ""}>SWITCH</li>
                        <li onClick={() => changePlatform("xboxone")} className={clickedPlatform=="xboxone" ? "selectedplat" : ""}>XBOX ONE</li>
                    </div>
                </ul>
            </div>
            <div className="gamegrid">
                <ul className="gamelist">
                    <li onClick={() => changeGame("vallhalla")} id ={clickedGame=="vallhalla" ? "clickedthumb" : ""} className={vallhallaplats.includes(clickedPlatform) ?  "thumbnail visible" : "nonvisible"}>
                        <div className="overlay">
                            <p className="title">VA-11 HALL-A</p>
                            <p className="platforms">LINUX, MAC, PC, PS4, SWITCH</p>
                        </div>
                        <img className="imgthumb" id="vallhalla" src={vallhallathumb} alt="VA-11 HALL-A"/>
                    </li>
                    <li onClick={() => changeGame("masquerada")} id ={clickedGame=="masquerada" ? "clickedthumb" : ""} className={masqueradaplats.includes(clickedPlatform) ?  "thumbnail visible" : " nonvisible"}>
                        <div className="overlay">
                            <p className="title">MASQUERADA: SONGS AND SHADOWS</p>
                            <p className="platforms">LINUX, MAC, PC, PS4, SWITCH, XBOX ONE</p>
                        </div>
                        <img className="imgthumb" id="masquerada" src={masqueradathumb} alt="MASQUERADA: SONGS AND SHADOWS"/>
                    </li>
                    <li onClick={() => changeGame("sheremebered")} id ={clickedGame=="sheremebered" ? "clickedthumb" : ""} className={srcplats.includes(clickedPlatform) ?  "thumbnail visible" : " nonvisible"}>
                        <div className="overlay">
                            <p className="title">SHE REMEMBERED CATERPILLARS</p>
                            <p className="platforms">IOS, MAC, PC, SWITCH</p>
                        </div>
                        <img className="imgthumb" id="src" src={SRCthumb} alt="SHE REMEMBERED CATERPILLARS"/>
                    </li>
                    <li onClick={() => changeGame("yiik")} id ={clickedGame=="yiik" ? "clickedthumb" : ""} className={yiikplats.includes(clickedPlatform) ?  "thumbnail visible" : " nonvisible"}>
                        <div className="overlay">
                            <p className="title">YIIK: A POST-MODERN RPG</p>
                            <p className="platforms">LINUX, MAC, PC, VISTA, PS4, SWITCH</p>
                        </div>
                        <img className="imgthumb" id="yiik" src={yiikthumb} alt="YIIK: A POST MODERN RPG"/>
                    </li>
                    <li onClick={() => changeGame("woh")} id ={clickedGame=="woh" ? "clickedthumb" : ""} className={wohplats.includes(clickedPlatform) ?  "thumbnail visible" : " nonvisible"}>
                        <div className="overlay">
                            <p className="title">WORLD OF HORROR</p>
                            <p className="platforms">MAC, PC, PS4, SWITCH</p>
                        </div>
                        <img className="imgthumb" id="WOH" src={WOHthumb} alt="WORLD OF HORROR"/>
                    </li>
                    <li onClick={() => changeGame("nirvanna")} id ={clickedGame=="nirvanna" ? "clickedthumb" : ""} className={nirvannaplats.includes(clickedPlatform) ?  "thumbnail visible" : " nonvisible"}>
                        <div className="overlay">
                            <p className="title">N1RV ANN-A: CYBERPUNK BARTENDER ACTION</p>
                            <p className="platforms">MAC, PC, PS4, SWITCH</p>
                        </div>
                        <img className="imgthumb" id="nirvanna" src={nirvannathumb} alt="N1RV ANN-A"/>
                    </li>
                    <li onClick={() => changeGame("noplace")} id ={clickedGame=="noplace" ? "clickedthumb" : ""} className={noplaceplats.includes(clickedPlatform) ?  "thumbnail visible" : " nonvisible"}>
                        <div className="overlay">
                            <p className="title">NO PLACE FOR BRAVERY</p>
                            <p className="platforms">CONSOLES, DESKTOP, PC, SWITCH</p>
                        </div>
                        <img className="imgthumb" id="noplaceforbravery" src={npfbthumb} alt="NO PLACE FOR BRAVERY"/>
                    </li>
                </ul>
            </div>
        </div>
    );

}