import React from "react";
import "./styles/WhatWeDo.css";
import moneyimg from "../assets/billmoney.png";
import cogs from "../assets/cogs.png";
import eye from "../assets/eye.png";

export default function WhatWeDo() {
  return (
    <div className="WWD">
      <div className="subtitleWWD">We provide a rock-solid bridge for your game development journey.</div>
      <div className="features">

        <div className="funding">
          <div className="featThumb">
            <img className="moneythumb" src={moneyimg} alt="money" />
          </div>
          <div className="featTitle">
            FUNDING
          </div>
          <p className="featDesc">Have you been plotting to quit your day job so you can dedicate yourself to the game of your dreams? We`ll back you up with essential funding to feel absolutely secure about your full-time indie journey.</p>
        </div>
        <div className="polish">
          <div className="featThumb">
            <img className="polishthumb" src={cogs} alt="gears/cogs" />
          </div>
          <div className="featTitle">
            POLISH
          </div>
          <p className="featDesc">Feel alone in your journey? Lost on how to deal with QA? Just need some help with optimizing your workflow? Bounce ideas off us and our network of advisors. Polish is the secret sauce that makes your game shine. We get the details.</p>
        </div>

        <div className="visibility">
          <div className="featThumb">
            <img className="visibilitythumb" src={eye} alt="visibility" />
          </div>
          <div className="featTitle">
            VISIBILITY
          </div>
          <p className="featDesc">We`ll get your game in front of key media influencers. We`ll put it on the right platforms. Strategic marketing, wide distribution, whatever it takes - we`ll see to it your game gets to weave its magic on the players it deserves.</p>
        </div>
      </div>

    </div>
  );
}
