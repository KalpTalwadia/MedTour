// ServiceDetail.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServiceDetails } from '../../app/features/fetchDataSlice';

import PageBanner from '../../components/common/page-banner';
import ProcedureRepeater from '../../components/service-details/procedure-repeater';
import ProcedureQuestions from '../../components/service-details/procedure-questions';
import ServiceHeadDetails from '../../components/service-details/service-head-details';
import { Tab, Tabs } from 'react-bootstrap';
import ServiceHospitalRepeater from '../../components/service-details/service-hospital-repeater';
import ServiceDoctorRepeater from '../../components/service-details/service-doctor-repeater';

const ServiceDetail = () => {
	const dispatch = useDispatch();
	const serviceDetails = useSelector((state) => state.services.data);

	const serviceStatus = useSelector((state) => state.services.status);
	const error = useSelector((state) => state.services.error);
	const params = useParams();

	useEffect(() => {
		if (serviceStatus === 'idle') {
			dispatch(fetchServiceDetails());
		}
	}, [serviceStatus, dispatch]);

	return (
		<div className="page-content bg-white">
			<PageBanner title={params.type} />
			<section className="section-area section-sp1">
				<div className="container">
					<div className="row">
						<div className="clearfix">
							<ServiceHeadDetails />
						</div>
						<div>
							{serviceStatus === 'loading' && <p>Loading...</p>}
							{serviceStatus === 'failed' && <p>Error: {error}</p>}
							{serviceStatus === 'succeeded' && (
								<Tabs justify>
									{serviceDetails.map((services, index) => (
										<Tab
											key={index}
											eventKey={services.collectionName}
											title={services.collectionName.charAt(0).toUpperCase() + services.collectionName.slice(1)}
										>
											{services.collectionName === 'hospital' && <ServiceHospitalRepeater hospitalDetails={services.documents} serviceIndex={services.index} />}
											{services.collectionName === 'doctors' && <ServiceDoctorRepeater doctorDetails={services.documents} serviceIndex={services.index} />}
											{services.collectionName === 'procedures' && <ProcedureRepeater procedureDetail={services.documents} serviceIndex={services.index} />}
										</Tab>
									))}
								</Tabs>
							)}
						</div>
						<div className="clearfix">
							<ProcedureQuestions />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ServiceDetail;
