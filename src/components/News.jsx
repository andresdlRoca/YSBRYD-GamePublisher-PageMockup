import React, { useState, useEffect, useRef } from "react";
import './styles/News.css';
import new1thumb from "../assets/new1thumb.jpg";
import new2thumb from "../assets/new2thumb.jpeg";
import new3thumb from "../assets/new3thumb.png";
import magglass from "../assets/magglass.png";

export default function News() {

    return (
        <div className="news" id="news">
            <div className="TitleLabels">NEWS</div>
            <div className="newssubtitles">HERE’S SOME INSIGHT ON WHAT YSBRYD HAS BEEN UP TO RECENTLY.</div>
            <div className="newsgrid">
                <div className="newslist">
                    <div className="new1">
                        <a href="https://www.ysbryd.net/ysbryd-games-privacy-policy/">
                            <img className="newthumb" src={new1thumb} alt="Game Screenshot"/>
                        </a>
                        <div className="icon">
                            <img className="mag" src={magglass} alt="Magnifiying glass"/>
                        </div>
                        <div className="newtitle">Ysbryd Games PRIVACY POLICY</div>
                        <div className="newdate">26 Jul</div>
                        <div className="newcomments">0 Comments</div>
                        <div className="newdesc">Effective Date: June 1, 2021 Ysbryd Games Worldwide Limited, a United Kingdom company (“Ysbryd”, “we”, “us” and their derivatives) makes this policy available to users</div>
                        <a className="readmore" href="https://www.ysbryd.net/ysbryd-games-privacy-policy/">
                            Read More →
                        </a>                    
                    </div>
                    <div className="new2">
                        <a href="https://www.ysbryd.net/518-2/">
                            <img className="newthumb" src={new2thumb} alt="Texas Convention"/>
                        </a>
                        <div className="icon">
                            <img className="mag" src={magglass} alt="Magnifiying glass"/>
                        </div>                        <div className="newtitle">Leaving Texas</div>
                        <div className="newdate">31 Mar</div>
                        <div className="newcomments">0 Comments</div>
                        <div className="newdesc">South by Southwest has come and gone, some sunburns were shared (yes, winter ended during the event – Kris is just that pale), and bellies are</div>
                        <a className="readmore" href="https://www.ysbryd.net/518-2/">
                            Read More →
                        </a>                    
                    </div>
                    <div className="new3">
                        <a href="https://www.ysbryd.net/favorites-friday/">
                            <img className="newthumb" src={new3thumb} alt="SL Train"/>
                        </a>
                        <div className="icon">
                            <img className="mag" src={magglass} alt="Magnifiying glass"/>
                        </div>                        <div className="newtitle">Favorites Friday</div>
                        <div className="newdate">12 Mar</div>
                        <div className="newcomments">0 Comments</div>
                        <div className="newdesc">How about another collection of our favorite releases or upcoming games? Hopefully one or two will catch your eye. Our friends at Wadjet Eye Games</div>
                        <a className="readmore" href="https://www.ysbryd.net/favorites-friday/">
                            Read More →
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );

}