import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

// Import Images
import lineCircleBlue from "../../images/shap/line-circle-blue.png";
import squareDotsOrange from "../../images/shap/square-dots-orange.png";
import waveBlue from "../../images/shap/wave-blue.png";
import squareRotate from "../../images/shap/square-rotate.png";
import ServicesSliderCard from '../../components/service-slider/services-slider-cards';
import SliderCardiologist from '../../components/service-slider/assets/slider-cardiology';
import SliderFertility from '../../components/service-slider/assets/slider-fertility';
import SliderOncology from '../../components/service-slider/assets/slider-oncology';
import SliderDental from '../../components/service-slider/assets/slider-dental';
import SliderCosmetic from '../../components/service-slider/assets/slider-cosmetic';

class ServicesSliderSection extends Component{
	render(){
			
		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 591,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		
		return(
			<>
				
				<section className="section-area section-sp1 service-wraper">
					<div className="row align-items-center">
						<div className="col-xl-4 col-lg-7 mb-30">	
							<div className="heading-bx">
								<h6 className="title-ext text-secondary">Services</h6>
								<h2 className="title">We Cover A Big Variety Of Medical Services</h2>
								<p>We provide the special tips and advice’s of heath care treatment and high level of best.</p>
							</div>
							<Link to="/services" className="btn btn-secondary btn-lg shadow">All Services</Link>
						</div>
						<div className="col-xl-8 mb-15">	
							<Slider {...settings} className="service-slide slick-arrow-none">
								<ServicesSliderCard title="Fertility" icon={<SliderFertility/>} link="fertility" description="Phasellus venenatis porta rhoncus. Integer et viverra felis."/>
								<ServicesSliderCard title="Oncology" icon={<SliderOncology/>} link="oncology" description="Phasellus venenatis porta rhoncus. Integer et viverra felis."/>
								<ServicesSliderCard title="Cardiology" description="Phasellus venenatis porta rhoncus. Integer et viverra felis." icon={<SliderCardiologist/>} link = "cardiology"/>
								<ServicesSliderCard title="Dental" icon={<SliderDental/>} link="dental" description="Phasellus venenatis porta rhoncus. Integer et viverra felis."/>
								<ServicesSliderCard title="Cosmetic" icon={<SliderCosmetic/>} link="cosmetic" description="Phasellus venenatis porta rhoncus. Integer et viverra felis."/>
							</Slider>
						</div>	 
					</div>
					<img className="pt-img1 animate-rotate" src={lineCircleBlue} alt=""/>
					<img className="pt-img2 animate2" src={squareDotsOrange} alt=""/>
					<img className="pt-img3 animate-wave" src={waveBlue} alt=""/>
					<img className="pt-img4 animate1" src={squareRotate} alt=""/>
				</section>
				
			</>
		);
	}
}

export default ServicesSliderSection;