/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import PropTypes from "prop-types";
import "./styles/ProjectDesc.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// She remembered caterpillas images
import srcthumb1 from "../assets/6.png";
import srcthumb2 from "../assets/28.png";
import srcthumb3 from "../assets/40.png";

// Nirvanna images
import nirvannathumb1 from "../assets/nirvana-demo_2018-07-26_02-12-39.png";
import nirvannathumb2 from "../assets/nirvana-demo_2018-07-26_02-22-11.png";
import nirvannathumb3 from "../assets/nirvana-demo_2018-07-26_02-32-27.png";

// Masquerada images
import masqueradathumb1 from "../assets/PS4_Masquerada_1.jpg";
import masqueradathumb2 from "../assets/PS4_Masquerada_2.jpg";
import masqueradathumb3 from "../assets/PS4_Masquerada_3.jpg";

// No place for bravery images
import noplacethumb1 from "../assets/ScreenShot_03.jpg";
import noplacethumb2 from "../assets/ScreenShot_06.jpg";
import noplacethumb3 from "../assets/new1thumb.jpg";

// Waifu bartending images
import waifuthumb1 from "../assets/Waifu_Abuse_10.png";
import waifuthumb2 from "../assets/Waifu_Abuse_11.png";
import waifuthumb3 from "../assets/Waifu_Abuse_0758.png";

// WOH images
import WOHthumb1 from "../assets/WOH_Screenshot_1.png";
import WOHthumb2 from "../assets/WOH_Screenshot_2.png";
import WOHthumb3 from "../assets/WOH_Screenshot_3.png";

// YIIK Images
import YIIKthumb1 from "../assets/YIIK_1.jpg";
import YIIKthumb2 from "../assets/YIIK_2.jpg";
import YIIKthumb3 from "../assets/YIIK_3.jpg";

// closing icon
import closeicon from "../assets/closeicon.png";

export default function ProjectDesc({ selectedgame, changegame }) {
  ProjectDesc.propTypes = {
    selectedgame: PropTypes.string.isRequired,
    changegame: PropTypes.func.isRequired,
  };

  const closeproject = () => {
    changegame("");
  };

  return (
    <div className={selectedgame !== "" ? "project-wrap visibleproject" : "nonvisibleproject"}>
      <div className="closeproj" onClick={() => closeproject()}>
        <img src={closeicon} alt="Closing selector" />
      </div>
      <div className="carrouselwrap">
        <Carousel className={selectedgame === "vallhalla" ? "vallhallacarrousel visibleproject" : "nonvisibleproject"} showIndicators={false} showThumbs={false} showStatus={false} autoPlay infiniteLoop>
          <div><img src={waifuthumb1} alt="Waifu bartending 1" /></div>
          <div><img src={waifuthumb2} alt="Waifu bartending 2" /></div>
          <div><img src={waifuthumb3} alt="Waifu bartending 3" /></div>
        </Carousel>
        <Carousel className={selectedgame === "yiik" ? "YIIKcarrousel visibleproject" : "nonvisibleproject"} showIndicators={false} showThumbs={false} showStatus={false} autoPlay infiniteLoop>
          <div><img src={YIIKthumb1} alt="YIIK 1" /></div>
          <div><img src={YIIKthumb2} alt="YIIK 2" /></div>
          <div><img src={YIIKthumb3} alt="YIIK 3" /></div>
        </Carousel>
        <Carousel className={selectedgame === "woh" ? "WOHcarrousel visibleproject" : "nonvisibleproject"} showIndicators={false} showThumbs={false} showStatus={false} autoPlay infiniteLoop>
          <div><img src={WOHthumb1} alt="WOH 1" /></div>
          <div><img src={WOHthumb2} alt="WOH 2" /></div>
          <div><img src={WOHthumb3} alt="WOH 3" /></div>
        </Carousel>
        <Carousel className={selectedgame === "noplace" ? "noplacecarrousel visibleproject" : "nonvisibleproject"} showIndicators={false} showThumbs={false} showStatus={false} autoPlay infiniteLoop>
          <div><img src={noplacethumb1} alt="noplace 1" /></div>
          <div><img src={noplacethumb2} alt="noplace 2" /></div>
          <div><img src={noplacethumb3} alt="noplace 3" /></div>
        </Carousel>
        <Carousel className={selectedgame === "masquerada" ? "masqueradacarrousel visibleproject" : "nonvisibleproject"} showIndicators={false} showThumbs={false} showStatus={false} autoPlay infiniteLoop>
          <div><img src={masqueradathumb1} alt="masquerada 1" /></div>
          <div><img src={masqueradathumb2} alt="masquerada 2" /></div>
          <div><img src={masqueradathumb3} alt="masquerada 3" /></div>
        </Carousel>
        <Carousel className={selectedgame === "nirvanna" ? "nirvannacarrousel visibleproject" : "nonvisibleproject"} showIndicators={false} showThumbs={false} showStatus={false} autoPlay infiniteLoop>
          <div><img src={nirvannathumb1} alt="nirvanna 1" /></div>
          <div><img src={nirvannathumb2} alt="nirvanna 2" /></div>
          <div><img src={nirvannathumb3} alt="nirvanna 3" /></div>
        </Carousel>
        <Carousel className={selectedgame === "sheremebered" ? "srccarrousel visibleproject" : "nonvisibleproject"} showIndicators={false} showThumbs={false} showStatus={false} autoPlay infiniteLoop>
          <div><img src={srcthumb1} alt="src 1" /></div>
          <div><img src={srcthumb2} alt="src 2" /></div>
          <div><img src={srcthumb3} alt="src 3" /></div>
        </Carousel>
      </div>
      <div className="projectdescwrap">
        <div className="projectdesctitle">PROJECT DESCRIPTION</div>
        <div className={selectedgame === "vallhalla" ? "vallhalladesc visibleproject" : "nonvisibleproject"}>
          <p className="textdesc">A cyberpunk bartending simulator unlike any you`ve seen before. (Not that there are that many.) In this world, corporations reign supreme and all human life is infected with nanomachines designed to oppress them… But, this is not about those people.</p>
          <p className="textdesc">You are a bartender at the downtown watering hole of VA-11 HALL-A. Affectionately nicknamed “Valhalla,” it attracts the most fascinating people this side of dystopia. Drawing inspiration from the likes of Ghost in the Shell, Snatcher, and PC-98 adventure games, VA-11 HALL-A will make you laugh, cringe, and possibly regret serving too much alcohol to unsuspecting customers.</p>
          <p className="textdesc">
            Developer:
            {" "}
            <a href="http://sukeban.moe" id="developerlink">Sukeban Games</a>
            {" "}
            (http://sukeban.moe)
            <br />
            Platforms: PC/Mac/Linux, PS Vita
            <br />
            Release Date: Available Now
          </p>
          <p className="projectdesctitle">Project Details</p>
          <p className="textdesc">
            <span id="bold">Tags: </span>
            Linux, Mac, PC, PS4, Switch
          </p>
          <div className="viewproject"><a href="http://waifubartending.com">View Project</a></div>
        </div>
        <div className={selectedgame === "yiik" ? "YIIKdesc visibleproject" : "nonvisibleproject"}>
          <p className="textdesc">When recent college graduate Alex Eggleston returns home from college, he finds adult life to be filled with mystery, strange friends from the internet, and other worlds that exist just out of sight. Journey with Alex across an expansive flat-shaded wonderland, rife with intricate puzzles, fast-paced turn based 8 party-member battles, cat tossing, panda dropping, and ladder throwing action.</p>
          <p className="textdesc">YIIK will start you in the familiar, before transporting you to a world rife with parallel dimensions, existential dilemmas, and the fashion triumphs of normcore culture. Be prepared for meandering exposition, but also laughter and unexpected scenarios!</p>
          <p className="textdesc">
            Developer:
            {" "}
            <a href="http://www.ackkstudios.com/" id="developerlink">Ackk Studios</a>
            <br />
            Platforms: PC/Mac/Linux, PS4, PS Vita, Nintendo Switch
            <br />
            Release Date: This Winter
          </p>
        </div>
        <div className={selectedgame === "woh" ? "WOHdesc visibleproject" : "nonvisibleproject"}>
          <p className="textdesc">The Old Gods are reawakening, clawing their way back into a world that`s spiraling into madness. In hospitals, abandoned classrooms, quiet apartments, and dark forests, strange appearances and unexplainable phenomena test the sanity of residents in Shiokawa, Japan. Is it chaotic retribution, or the machinations of beings beyond our comprehension?</p>
          <p className="textdesc">This is WORLD OF HORROR: The end of the world is nigh, and the only solution is to confront the terror reigning over the apocalypse. Navigate this hellish, roguelite reality through turn-based combat and unforgiving choices in this roguelite-style cosmic horror RPG.</p>
          <p className="textdesc">Invoke dark rituals, uncover disturbing clues, and solve puzzles across multiple randomized mysteries. Each perplexing case unravels into a series of random encounters with nightmarish figures inspired by the works of horror legends Junji Ito and H.P. Lovecraft.</p>
          <p className="textdesc">
            Developer:
            {" "}
            <a href="http://www.wohgame.com/" id="developerlink">panstasz</a>
            <br />
            Release Date: Available Now (Switch TBA)
          </p>
          <p className="textdesc">Now available on Steam Early Access; Xbox Game Preview for Windows 10; Xbox Game Pass for PC (beta). PS4 and Nintendo Switch versions to arrive later in 2020.</p>
        </div>
        <div className={selectedgame === "noplace" ? "noplacedesc visibleproject" : "nonvisibleproject"}>
          <p className="textdesc">Thorn, a retired warrior plagued by nightmares, stumbles on an opportunity for redemption after finding clues to his daughter`s disappearance from long ago. Survive rampant and violent battles in this 2D top-down action RPG, and discover the bone-chilling tale behind Thorn`s odyssey.</p>
          <p className="textdesc">With every life taken, deep consequences weigh upon Thorn`s violent ends. Under your control, Thorn will have the capacity to kill and survive from the word go, but you should expect to find Thorn`s fragility starkly reflected in your own series of likely defeats.</p>
          <p className="textdesc">A captivating blend of the low fantasy setting, highly detailed pixel art, and beautiful hand-painted textures makes this decrepit world croak with breathtaking life, as Thorn carves his path through it.</p>
          <p className="textdesc">
            Developer: Glitch Factory
            <br />
            Platforms: Steam (Windows), Nintendo Switch
            <br />
            Release Date: 2021
          </p>
          <p className="projectdesctitle">Project Details</p>
          <p className="textdesc">
            <span id="bold">Tags: </span>
            Consoles, Desktop, PC, Switch
          </p>
        </div>
        <div className={selectedgame === "masquerada" ? "masqueradadesc visibleproject" : "nonvisibleproject"}>
          <p className="textdesc">With a magical setting inspired by Renaissance-era Venice, Masquerada: Songs and Shadows is a tactical RPG brought to life in a vivid hand-drawn art style. Each character has elemental skills that can be combined for devastating effect in real-time combat with pause.</p>
          <p className="textdesc">Five years of civil war over Mascherines, masks that grant magical powers and are traditionally held by only the wealthy and powerful, have rocked the Citte of Ombre. Together, Cicero Gavar and his friends will unravel the politics, secrets and mysteries of the Citte only to discover that the problems its society faces are intertwined with the conflicted history of the land.</p>
          <p className="textdesc">
            Developer:
            {" "}
            <a href="http://www.witching-hour.net/" id="developerlink">Witching Hour Studios</a>
            <br />
            Platforms: PC/Mac/Linux, PlayStation 4, Xbox One, Nintendo Switch
            <br />
            Release Date: Available Now (Switch TBA)
          </p>
          <p className="projectdesctitle">Project Details</p>
          <p className="textdesc">
            <span id="bold">Tags: </span>
            Linux, Mac, PC, PS4, Switch, Xbox One
          </p>
          <div className="viewproject"><a href="http://www.masquerada.com/">View Project</a></div>
        </div>
        <div className={selectedgame === "nirvanna" ? "nirvannadesc visibleproject" : "nonvisibleproject"}>
          <p className="textdesc">Escape from VA11 HALL-A`s Glitch City to Saint Alicia, an idyllic tourist paradise with an upscale bar called N1RV Ann-A. But opulence and extravagance are merely smokescreens: the artificial island hides a seedy underbelly. Its dystopian economy touches all aspects of life as bar patrons contend with mafia extortion, human trafficking and other sordid crimes.</p>
          <p className="textdesc">For bartender Sam, trouble hits close to home. Her relationship with her partner Leon, who moonlights as a Yakuza, is on the rocks as she works hard to care for their 8-year-old son, Tony.</p>
          <p className="textdesc">
            Developer:
            {" "}
            <a href="http://sukeban.moe/" id="developerlink">Sukeban Games</a>
            <br />
            Platforms: Steam, PS4, Nintendo Switch
            <br />
            Release Date: 2020 (Delayed)
          </p>
          <p className="projectdesctitle">Project Details</p>
          <p className="textdesc">
            <span id="bold">Tags: </span>
            Mac, PC, PS4, Switch
          </p>
        </div>
        <div className={selectedgame === "sheremebered" ? "srcdesc visibleproject" : "nonvisibleproject"}>
          <p className="textdesc">She Remembered Caterpillars is a color-matching puzzle game with an unsettling fungipunk aesthetic. Set in a phantasgamorphic world of writhing caterpillars, brightly-colored Gammies, and living architecture, the game will have players eavesdropping on what appears to be one scientist`s quest to save her father.</p>
          <p className="textdesc">As the chapters progress, more of this strange universe will reveal itself: what manner of cataclysm occurred here? Who are the players involved? And what exactly are the Gammies doing in these dreamscapes?</p>
          <p className="textdesc">Winner of the Best Children`s Game at the German Computer Games Awards, She Remembered Caterpillars will test your capacity for problem-solving, dropping you into puzzles of escalating difficulty, each building on the lessons of the last.</p>
          <p className="textdesc">
            Developer:
            {" "}
            <a href="http://jumpsuit-entertainment.com/" id="developerlink">jumpsuit entertainment UG (haftungsbeschraenkt)</a>
            <br />
            Platforms: PC/Mac/Linux, Nintendo Switch, iOS
            <br />
            Available Now
          </p>
        </div>
      </div>
    </div>

  );
}
