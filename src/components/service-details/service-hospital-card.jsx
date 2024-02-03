import { Rating } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';



function ServiceHospitalCard({name, city, state, rating}) {
  return (
    <div className="feature-container feature-bx2 feature1">
    <div className="feature-box-xl mb-20">
        <span className="icon-cell">
            <image/>
        </span> 
    </div>
    <div className="icon-content">
        <h3 className="ttr-title">{name}</h3>
        <b>City : </b> {city} <br/>
        <b>State : </b> {state} <br/>
        <Rating name="read-only" value={rating} readOnly/>
        <br/>
        <Link to="no where" className="btn btn-primary light"> Know More</Link>

    </div>
    </div>
  )
}

export default ServiceHospitalCard