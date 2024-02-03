import React from 'react'
import ServiceHospitalCard from './service-hospital-card'

function ServiceHospitalRepeater({hospitalDetails}) {
  return (
    <div>
    <div className="head-text mb-30">
        <div className="container">
            <div className="row">
                {hospitalDetails.map(hospital => (
                    <div className="col-lg-4 col-md-6 mb-30">
                    <ServiceHospitalCard name={hospital.name} city={hospital.city} state={hospital.state} rating={hospital.rating}/>
                    </div>
                ))}
            </div>
        </div>
    </div></div>
  )
}

export default ServiceHospitalRepeater