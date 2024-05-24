import React from 'react'
import ServiceDoctorCard from './service-doctor-card'

function ServiceDoctorRepeater({ doctorDetails }) {
  return (
    <div>
      <div className="head-text mb-30">
        <div className="container">
          <div className="row">
            {doctorDetails.map((doctor, index) => (
              <div className="col-lg-4 col-md-6 mb-30">
                <ServiceDoctorCard id={index} name={doctor.name} title={doctor.title} yoe={doctor.yoe} speciality={doctor.speciality
                } />
              </div>
            ))}
          </div>
        </div>
      </div></div>
  )
}

export default ServiceDoctorRepeater