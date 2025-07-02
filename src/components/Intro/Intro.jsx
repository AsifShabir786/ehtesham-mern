import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}

       




          <span style={{ color: darkMode ? "white" : "white" }}>Hy! I Am</span>
     <h3 className="animate-charcter">Asif Shabir</h3>
           <span style={{fontWeight:'bold',color:"cyan"}}>



     <span class="title-word title-word-1">Senior Full Stack Developer</span>
    <span class="title-word title-word-2"> with</span>
    <span class="title-word title-word-3"> 6 years experience</span>
    <span class="title-word title-word-4"> Next.js React js Node</span>
  

          </span>
        </div>
        <a href="https://wa.me/+447427544122" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </a>
        {/* social icons */}
        <div className="i-icons">
        <a
                  className="nav-link text-light"
                  href="https://github.com/Ehteshambutt"
                > <img src={Github} alt="" /></a>
          {/* <img src={Github} alt="" /> */}
          <a
                  className="nav-link text-light"
                  href="https://www.linkedin.com/in/ehtesham-butt-837200162/"
                > <img src={LinkedIn} alt="" /></a>
          
          <a
                  className="nav-link text-light"
                  href="https://www.instagram.com/ehteshambutt58/"
                >   <img src={Instagram} alt="" /></a>
        
        </div>
      </div>
      {/* right image side */}
      <div className="i-right crwn1">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div crwn"
        >
          <FloatinDiv  img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="React js Next.js" text2=" Node js Express js" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
