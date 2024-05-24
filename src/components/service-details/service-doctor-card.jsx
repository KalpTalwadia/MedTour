import React from 'react'
import { Link } from 'react-router-dom';

function ServiceDoctorCard({ id, name, title, yoe, speciality }) {
  return (
    <div className="feature-container feature-bx2 feature1">
      <div className="feature-box-xl mb-20">
        <span className="icon-cell">
          <image />
        </span>
      </div>
      <div className="icon-content">
        <h3 className="ttr-title">{name}</h3>
        <b>{speciality}</b> <br />
        <b>Years Of Experience : </b> {yoe} <br />
        <b></b> {title} <br />
        <br />
        <Link to={`/doctor/${id}`} className="btn btn-primary light"> Know More</Link>

      </div>
    </div>
  )
}

export default ServiceDoctorCard