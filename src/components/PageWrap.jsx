import React, { useState, useEffect, useRef } from "react";
import About from './About.jsx';
import Frontpage from './Frontpage.jsx';
import WhatWeDo from "./WhatWeDo.jsx";
import Portfolio from "./Portfolio.jsx";
import WhyYsbryd from "./WhyYsbryd.jsx";
import News from "./News.jsx";
import Contact from "./Contact.jsx";
import NavBar from "./NavBar.jsx";
import Back2Top from "./Back2Top.jsx";

export default function PageWrap() {

    return(
        <div className="page-wrap">
            <Frontpage />
            <NavBar />
            <About />
            <Back2Top/>
            <WhatWeDo />
            <Portfolio/>
            <WhyYsbryd />
            <News />
            <Contact />
        </div>

    );

}