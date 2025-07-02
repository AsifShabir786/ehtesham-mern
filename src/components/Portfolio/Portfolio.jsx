import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import c from "../../img/c.PNG";
import restorent from "../../img/restorent.PNG";

import HOC from "../../img/hoc.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
  <>
<div className="center-text2 text-center">
  <span>Recent Projects</span>
  <br />
  <span className="text-muted text11">
    Our client projects are highly confidential and protected by login credentials. To access these exclusive insights and resources, access exclusive client projects by logging in with my test credentials. Company/Clients privacy is my priority. Thank you for your understanding and cooperation.
    <br/>
    <span class="text-muted textt" style={{textAlign: 'center', display: 'block', margin: '0 auto',marginTop:"1rem"}}></span>
  </span>
</div>


  <div className="bodys" style={{borderRadius:'50px',height:"auto"}}>
  <a href='https://wvexx.com/'>

<div class="card-wrap bbbb">
<div class="card-header one" style={{ height: '200px' }}>
  <img src='https://res.cloudinary.com/dgmjg9zr4/image/upload/v1746577369/image_1_-pica_zsgzzy.png' style={{ width: '100%', height: '100%' }} />
</div>
<div class="card-content">
  <h1 class="card-title">Stock Market Data (AAPL)
  in Next.js and Node Project</h1>
  <p class="card-text">Used Tailwind css,html,css3,next.js and nides and i added
  link of project here.</p>
  <a href='https://wvexx.com/'>
    <button class="card-btn one">Click</button>
  </a>
</div>
</div></a>
  <a href='https://welcome.doingthistogether.com/MainScreen'>

  <div class="card-wrap bbbb">
  <div class="card-header one" style={{ height: '200px' }}>
    <img src='https://res.cloudinary.com/alpja/image/upload/v1702752171/e7dslq84hzg0wdxyyvyp.png' style={{ width: '100%', height: '100%' }} />
  </div>
  <div class="card-content">
    <h1 class="card-title">Medical Test System for Hospital in React.js</h1>
    <p class="card-text">Used bootstrap5,html,css3 with react js and i added
    link of project here.</p>
    <a href='https://welcome.doingthistogether.com/MainScreen'>
      <button class="card-btn one">Click</button>
    </a>
  </div>
</div></a>
<a href='https://tech.doingthistogether.com/login'>

<div class="card-wrap">
  <div class="card-header two" style={{ height: '200px' }}>
    <img src='https://res.cloudinary.com/alpja/image/upload/v1702752592/vffs7bx9yrfsk98aorz9.png' alt="" style={{ width: '100%', height: '100%' }} />
  </div>
  <div class="card-content">
    <h1 class="card-title">doingthistogether, a complete hospital system in Next/Reactjs</h1>
    <p class="card-text">I used React js and next js for it with Materail UI and many more functionalties</p>
    <a href='https://tech.doingthistogether.com/login'>
      <button class="card-btn two">Click</button>
    </a>
  </div>
</div>
</a>
<a href='https://saloonshop.vercel.app/'> 
<div class="card-wrap">
  <div class="card-header three">
  <img src='https://res.cloudinary.com/alpja/image/upload/v1704651644/ueg5qjvk46j6jhqofvfu.png' alt="" style={{ width: '100%', height: '100%' }} />
  </div>
  <div class="card-content">
    <h1 class="card-title">Saloon Shop/Services website in React js and Node js</h1>
    <p class="card-text">A React js project
    with bootstrap5 and some animations click below to view</p>
    <a href='https://saloonshop.vercel.app/'> <button class="card-btn three">Click</button></a>
 </div>
</div></a>
<a href='https://medassist.devforhealth.com/'> 
<div class="card-wrap">
  <div class="card-header four">
  <img src='https://res.cloudinary.com/alpja/image/upload/v1702752829/crsvhuzcpfgjvgdrdgz9.png' alt="" style={{ width: '100%', height: '100%' }} />
  </div>

  <div class="card-content">
    <h1 class="card-title">medassist in Next.js a complete hospital System</h1>
    <p class="card-text">This is complete Next js project and is syetem for a USA hospital link </p>
    <a href='https://medassist.devforhealth.com/'> <button class="card-btn four">Click</button></a>
 </div>
</div>
</a>
<a href='https://podstarz.net/'> 
<div class="card-wrap">
  <div class="card-header four">
  <img src='https://res.cloudinary.com/dgmjg9zr4/image/upload/v1746661034/WhatsApp_Image_2025-05-07_at_4_34_21_PM-Picsart-AiImageEnhancer_rarbvc.png' alt="" style={{ width: '100%', height: '100%' }} />
  </div>

  <div class="card-content">
    <h1 class="card-title">dtt in Next js and Node js complete system for a hospital/Billing EHR</h1>
    <p class="card-text">This is complete Next js project and is syetem for a USA hospital EHR link</p>
    <a href='https://podstarz.net/'> <button class="card-btn four">Click</button></a>
 </div>
</div>
</a>


<a href='https://app.silvercareagency.com/'> 
<div class="card-wrap">
  <div class="card-header four">
  <img src='https://res.cloudinary.com/dgmjg9zr4/image/upload/v1746662333/WhatsApp_Image_2025-05-07_at_4.58.20_PM_npsopo.jpg' alt="" style={{ width: '100%', height: '100%' }} />
  </div>

  <div class="card-content">
    <h1 class="card-title">silvercareagency in Next js complete system for a hospital/billing </h1>
    <p class="card-text">This is complete Next js Node project and is syetem for a USA silvercareAgency credintiol from local will be shown per requirement</p>
    <a href='https://app.silvercareagency.com/'> <button class="card-btn four">Click</button></a>
 </div>
</div>
</a>
</div>









  </>
  );
};

export default Portfolio;
