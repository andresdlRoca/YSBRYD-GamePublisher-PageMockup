import React from "react";
import "./styles/WhyYsbryd.css";
import ysbrydthewizard from "../assets/ysbryd-the-wizard.jpg";

export default function WhyYsbryd() {
  return (
    <div className="whyysbryd" id="WHY">
      <div className="TitleLabels">WHY YSBRYD?</div>
      <div className="subtitlewhy">
        <span>DISCOVERY</span>
        {" "}
        IS THE MAGIC WORD. THE SPIRIT OF DISCOVERY REIGNS SUPREME IN THE WORLD OF
        INDIE GAME DEVELOPMENT - IF NOT
        {" "}
        <span>LET`S MAKE IT SO.</span>
      </div>
      <p>
        We`ve seen lots of hopeful indie devs get derailed on
        their journey to make the game they`ve dreamed of.
        Financial floundering, unmanageable scopes, ineffectual marketing…
        We`ve walked that road of hardship ourselves.

      </p>
      <p>If there`s anything we`ve learnt… It really is dangerous to go alone!</p>
      <p>
        Take this - our promise to raise you onto the high bridge over such obstacles,
        to the victorious end of the journey you deserve.
      </p>
      <p>This world deserves more curious, spirited games, and we can make them, together.</p>
      <div className="partnersection" style={{ backgroundImage: `url(${ysbrydthewizard})` }}>
        <div className="partnertext">A worthy partner puts real skin in the game, just like you do. Let us elevate your work into true magic.</div>
      </div>
    </div>
  );
}
