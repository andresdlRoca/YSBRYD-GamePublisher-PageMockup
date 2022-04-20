import React, { useState, useEffect, useRef } from "react";
import About from './About.jsx';
import Frontpage from './Frontpage.jsx';
import WhatWeDo from "./WhatWeDo.jsx";
import Portfolio from "./Portfolio.jsx";
import WhyYsbryd from "./WhyYsbryd.jsx";

export default function PageWrap() {

    return(
        <div className="page-wrap">
            <Frontpage />
            <About />
            <WhatWeDo />
            <Portfolio />
            <WhyYsbryd />
        </div>

    );

}