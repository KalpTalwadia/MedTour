import React from 'react'
import ServiceHospitalCard from './service-hospital-card'

function ServiceHospitalRepeater({ hospitalDetails, serviceIndex }) {
  return (
    <div>
      <div className="head-text mb-30">
        <div className="container">
          <div className="row">
            {hospitalDetails.map((hospital, index) => (
              <div className="col-lg-4 col-md-6 mb-30">
                <ServiceHospitalCard id={index} name={hospital.name} city={hospital.city} state={hospital.state} rating={hospital.rating} />
              </div>
            ))}
          </div>
        </div>
      </div></div>
  )
}

export default ServiceHospitalRepeater