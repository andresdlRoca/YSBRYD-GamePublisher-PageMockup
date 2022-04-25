import React, { useState, useEffect, useRef } from "react";
import About from './About.jsx';
import Frontpage from './Frontpage.jsx';
import WhatWeDo from "./WhatWeDo.jsx";
import Portfolio from "./Portfolio.jsx";
import WhyYsbryd from "./WhyYsbryd.jsx";
import News from "./News.jsx";
import Contact from "./Contact.jsx";
import NavBar from "./NavBar.jsx";

export default function PageWrap() {

    return(
        <div className="page-wrap">
            <Frontpage />
            <NavBar />
            <About />
            <WhatWeDo />
            <Portfolio/>
            <WhyYsbryd />
            <News />
            <Contact />
        </div>

    );

}