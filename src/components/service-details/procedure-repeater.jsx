import React from 'react'
import ProcedureCard from './procedure-card'

function ProcedureRepeater({ procedureDetail }) {
    return (
        <div>
            <div className="head-text mb-30">
                <div className="container">
                    <div className="row">
                        {procedureDetail.map(procedure => (
                            <div className="col-lg-4 col-md-6 mb-30">
                                <ProcedureCard title={procedure.procedureTitle} buttonText="Create Qoute" link={"/qoute/procedure/" + procedure.procedureCode} />
                            </div>
                        ))}
                    </div>
                </div>
            </div></div>
    )
}

export default ProcedureRepeater