import React, { useState, useEffect, useRef } from "react";
import './styles/News.css';

export default function News() {

    return (
        <div className="news" id="news">
            <div className="TitleLabels">NEWS</div>
            <div className="newssubtitles">HERE’S SOME INSIGHT ON WHAT YSBRYD HAS BEEN UP TO RECENTLY.</div>
            <div className="newsgrid">
                <div className="newslist">
                    <div className="new">Ysbryd Games PRIVACY POLICY</div>
                    <div className="new">Leaving Texas</div>
                    <div className="new">Favorites Friday</div>
                </div>
            </div>
        </div>

    );

}