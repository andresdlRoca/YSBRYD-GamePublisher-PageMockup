import React, { useState, useEffect, useRef } from "react";
import "./styles/ProjectDesc.css";

//She remembered caterpillas images
import srcthumb1 from "../assets/6.png";
import srcthumb2 from "../assets/28.png";
import srcthumb3 from "../assets/40.png";

//Nirvanna images
import nirvannathumb1 from "../assets/nirvana-demo_2018-07-26_02-12-39.png";
import nirvannathumb2 from "../assets/nirvana-demo_2018-07-26_02-22-11.png";
import nirvannathumb3 from "../assets/nirvana-demo_2018-07-26_02-32-27.png";

//Masquerada images
import masqueradathumb1 from "../assets/PS4_Masquerada_1.jpg";
import masqueradathumb2 from "../assets/PS4_Masquerada_2.jpg";
import masqueradathumb3 from "../assets/PS4_Masquerada_3.jpg";

//No place for bravery images
import noplacethumb1 from "../assets/ScreenShot_03.jpg";
import noplacethumb2 from "../assets/ScreenShot_06.jpg";
import noplacethumb3 from "../assets/new1thumb.jpg";

//Waifu bartending images
import waifuthumb1 from "../assets/Waifu_Abuse_10.png";
import waifuthumb2 from "../assets/Waifu_Abuse_11.png";
import waifuthumb3 from "../assets/Waifu_Abuse_0758.png";

//WOH images
import WOHthumb1 from "../assets/WOH_Screenshot_1.png";
import WOHthumb2 from "../assets/WOH_Screenshot_2.png";
import WOHthumb3 from "../assets/WOH_Screenshot_3.png";

//YIIK Images
import YIIKthumb1 from "../assets/YIIK_1.jpg";
import YIIKthumb2 from "../assets/YIIK_2.jpg";
import YIIKthumb3 from "../assets/YIIK_3.jpg";

export default function ProjectDesc() {

    return(
        <div className="project-wrap">
            <div className="carrouselwrap">
                <div className="vallhallacarrousel">
                    <img src={waifuthumb1} alt="Waifu bartending 1"/>
                </div>
            </div>
            <div className="projectdescwrap">
                <div className="projectdesctitle">PROJECT DESCRIPTION</div>
                <div className="vallhalladesc">
                    <p>A cyberpunk bartending simulator unlike any you’ve seen before. (Not that there are that many.) In this world, corporations reign supreme and all human life is infected with nanomachines designed to oppress them… But, this is not about those people.</p>
                    <p>You are a bartender at the downtown watering hole of VA-11 HALL-A. Affectionately nicknamed “Valhalla,” it attracts the most fascinating people this side of dystopia. Drawing inspiration from the likes of Ghost in the Shell, Snatcher, and PC-98 adventure games, VA-11 HALL-A will make you laugh, cringe, and possibly regret serving too much alcohol to unsuspecting customers.</p>
                    <p>Developer: <a href="http://sukeban.moe">Sukeban Games</a> (http://sukeban.moe)<br/>Platforms: PC/Mac/Linux, PS Vita<br/>Release Date: Available Now</p>
                    <p>Project Details</p>
                    <p><bold>Tags: </bold>Linux, Mac, PC, PS4, Switch</p>
                    <div className="viewproject"><a href="http://waifubartending.com">View Project</a></div>
                </div>
            </div>
        </div>

    );

}