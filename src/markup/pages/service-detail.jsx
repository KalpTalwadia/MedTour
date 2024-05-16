import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

// Import Images
import PageBanner from '../../components/common/page-banner';
import ProcedureRepeater from '../../components/service-details/procedure-repeater';
import ProcedureQuestions from '../../components/service-details/procedure-questions';
import ServiceHeadDetails from '../../components/service-details/service-head-details';
import { Tab, Tabs } from 'react-bootstrap';
import ServiceHospitalRepeater from '../../components/service-details/service-hospital-repeater';
import ServiceDoctorRepeater from '../../components/service-details/service-doctor-repeater';




const ServiceDetail = () => {
	const [serviceDetails, setServiceDetails] = useState([]);
	const params = useParams();


	useEffect(() => {
		const fetchServiceDetails = async () => {
			try {
				const collections = ['procedures', 'hospital', 'doctors'];
				const promises = collections.map(async collectionName => {
					const collectionRef = collection(db, collectionName);
					const querySnapshot = await getDocs(collectionRef);
					const documents = querySnapshot.docs.map(doc => doc.data());
					return { collectionName, documents };
				});
				const results = await Promise.all(promises);
				setServiceDetails(results);
			} catch (error) {
				console.error("Error fetching service data: ", error);
			}
		};

		fetchServiceDetails();
	}, []);

	useEffect(() => {
		if (serviceDetails.length > 0) {
			localStorage.setItem("data", JSON.stringify(serviceDetails));
		}
	}, [serviceDetails]);

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
									{serviceDetails.map((service, index) => (
										<Tab key={index} eventKey={service.collectionName} title={service.collectionName.charAt(0).toUpperCase() + service.collectionName.slice(1)}>
											{service.collectionName === 'procedures' && <ProcedureRepeater procedureDetail={service.documents} />}
											{service.collectionName === 'hospital' && <ServiceHospitalRepeater hospitalDetails={service.documents} serviceIndex={service.index} />}
											{service.collectionName === 'doctors' && <ServiceDoctorRepeater doctorDetails={service.documents} />}
										</Tab>
									))}
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