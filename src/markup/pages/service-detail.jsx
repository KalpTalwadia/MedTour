import React from 'react';
import { useParams } from 'react-router-dom';

// Import Images
import PageBanner from '../../components/common/page-banner';
import ProcedureRepeater from '../../components/service-details/procedure-repeater';
import ProcedureQuestions from '../../components/service-details/procedure-questions';
import ServiceHeadDetails from '../../components/service-details/service-head-details';
import { Tab, Tabs } from 'react-bootstrap';
import ServiceHospitalRepeater from '../../components/service-details/service-hospital-repeater';
import ServiceDoctorRepeater from '../../components/service-details/service-doctor-repeater';




const ServiceDetail = () => {
	let params = useParams();
	let serviceDetails = {
		serviceTitle: "Dentistry",
		procedures: [{
			procedureTitle: "orthodontic treatments",
			procedureCode: "orthodontic"
		}, {
			procedureTitle: "restorative treatments",
			procedureCode: "orthodontic"
		}, {
			procedureTitle: "root canal treatments",
			procedureCode: "orthodontic"
		}, {
			procedureTitle: "gum disease treatments",
			procedureCode: "orthodontic"
		}, {
			procedureTitle: "cosmetic dentistry",
			procedureCode: "orthodontic"
		}, {
			procedureTitle: "dental implants",
			procedureCode: "orthodontic"
		}],
		hospitals: [{
			name: "Max Hospital",
			city: "Delhi",
			state: "Delhi",
			rating: 4
		}, {
			name: "Manipal Hospital",
			city: "Banglore",
			state: "Karnataka",
			rating: 4
		},
		{
			name: "Rainbow Hospital",
			city: "Banglore",
			state: "Karnataka",
			rating: 4
		}],
		doctors: [
			{
				name: "ABC",
				city: "Delhi",
				state: "Delhi",
				rating: 4
			}
		]
	}

	return (
		<>

			<div className="page-content bg-white">
				<PageBanner title={params.type} />
				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="clearfix">
								<ServiceHeadDetails />
							</div>
							<div>
								<Tabs justify>
									<Tab eventKey="procedures" title={`Our ${params.type} services`}>
										<ProcedureRepeater procedureDetail={serviceDetails.procedures} />
									</Tab>
									<Tab eventKey="hospitals" title="Hospitals">
										<ServiceHospitalRepeater hospitalDetails={serviceDetails.hospitals} />
									</Tab>
									<Tab eventKey="doctos" title="Top Doctors">
										<ServiceDoctorRepeater doctorDetails={serviceDetails.doctors}></ServiceDoctorRepeater>
									</Tab>
								</Tabs>
							</div>
							<div className="clearfix">
								<ProcedureQuestions />
							</div>
						</div>
					</div>
				</section>

			</div>

		</>
	);

}

export default ServiceDetail;