import React from 'react'
import { Link } from 'react-router-dom';

function ServicesSliderCard({title,description,link, icon}) {
  return (
    <div className="slider-item">
        <div className="feature-container feature-bx2 feature3">
            <div className="feature-box-xl mb-20">
                <span className="icon-cell">
                {icon}
                </span> 
            </div>
            <div className="icon-content">
                <h3 className="ttr-title">{title}</h3>
                <p>{description}</p>
                <Link to={`/service-detail/${link}`} className="btn btn-primary light">View More</Link>
            </div>
        </div>
    </div>
  )
}

export default ServicesSliderCard