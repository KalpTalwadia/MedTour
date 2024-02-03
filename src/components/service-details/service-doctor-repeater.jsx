import React from 'react'
import ServiceDoctorCard from './service-doctor-card'

function ServiceDoctorRepeater({doctorDetails}) {
  return (
    <div>
    <div className="head-text mb-30">
        <div className="container">
            <div className="row">
                {doctorDetails.map(doctor => (
                    <div className="col-lg-4 col-md-6 mb-30">
                    <ServiceDoctorCard name={doctor.name} city={doctor.city} state={doctor.state} rating={doctor.rating}/>
                    </div>
                ))}
            </div>
        </div>
    </div></div>
  )
}

export default ServiceDoctorRepeater