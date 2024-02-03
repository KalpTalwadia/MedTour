import React from 'react'

import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";

function PageBanner({title}) {
  return (
    <div className="banner-wraper">
    <div className="page-banner" style={{backgroundImage: "url("+bnrImg1+")"}}>
        <div className="container">
            <div className="page-banner-entry text-center">
                <h1>{title}</h1>
            </div>
        </div>
        <img className="pt-img1 animate-wave" src={waveBlue} alt=""/>
        <img className="pt-img2 animate2" src={circleDots} alt=""/>
        <img className="pt-img3 animate-rotate" src={plusBlue} alt=""/>
    </div>
</div>
  )
}

export default PageBanner