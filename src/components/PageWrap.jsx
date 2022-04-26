import React from "react";
import About from "./About";
import Frontpage from "./Frontpage";
import WhatWeDo from "./WhatWeDo";
import Portfolio from "./Portfolio";
import WhyYsbryd from "./WhyYsbryd";
import News from "./News";
import Contact from "./Contact";
import NavBar from "./NavBar";
import Back2Top from "./Back2Top";

export default function PageWrap() {
  return (
    <div className="page-wrap">
      <Frontpage />
      <NavBar />
      <About />
      <Back2Top />
      <WhatWeDo />
      <Portfolio />
      <WhyYsbryd />
      <News />
      <Contact />
    </div>

  );
}
