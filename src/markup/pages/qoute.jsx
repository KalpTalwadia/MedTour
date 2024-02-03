import React, { Component } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import circleDots from "../../images/shap/circle-dots.png";
import plusBlue from "../../images/shap/plus-blue.png";
import LatestNewsSection from '../elements/latest-news-slider';


const Qoute = () => {

    let steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
    return (
        <>

            <div className="page-content bg-white">
                <div className="page-banner" style={{ backgroundImage: "url(" + bnrImg1 + ")" }}>
                    <img className="pt-img1 animate-wave" src={waveBlue} alt="" />
                    <img className="pt-img2 animate2" src={circleDots} alt="" />
                    <img className="pt-img3 animate-rotate" src={plusBlue} alt="" />
                </div>
            </div>

            <section className="section-area section-sp2 appointment-wraper">
                <div className="container">
                    <div className="row justify-content-center">
                        <Stepper activeStep={1} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </div>
                </div>
            </section>
        </>
    );
}


export default Qoute;