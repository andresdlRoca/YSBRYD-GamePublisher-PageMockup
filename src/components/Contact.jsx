import React, { useState, useEffect, useRef } from "react";
import './styles/Contact.css';
import sitelogo from "../assets/logo-site.jpg"

export default function Contact() {

    return (
        <div className="contact">
            <p>WANT TO KNOW MORE ABOUT US?</p>
            <div className="viewposts">View All Posts</div>
            <div className="TitleLabels">CONTACT US</div>
            <div className="subtitlecontact">FUN FACT: “YSBRYD” IS WELSH FOR <span>“SPIRIT”.</span></div>
            <div className="bottomlineis">
                <p>The bottom line is, we’re here to help you get your game steered and prepped for a successful journey . We’ve hit awesome highs, we’ve sunk to dread lows, and we’ve gained a lot of wisdom along the way, and that can only benefit you.</p>
                <p>The best way to make contact with us is to make something so freaking awesome that we can’t help but get in touch with you. Otherwise, hop on Twitter and ping @YsbrydGames.</p>
            </div>
            <div className="footer">
                <img className="footerlogo" src={sitelogo} alt="Logo of website"/>
                <p>© Ysbryd Games Pte Ltd. 2014. All rights reserved.</p>
            </div>

        </div>
    );

}