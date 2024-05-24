
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchServiceDetails } from '../../app/features/fetchDataSlice';
import { Link, useParams } from 'react-router-dom';
import Error from './error-404';
import LatestNewsSection from '../elements/latest-news-slider';
// Import Images


const Doctor = () => {
    const { type: index } = useParams();
    const docIndex = parseInt(index, 10);
    const dispatch = useDispatch();

    const { data, status, error } = useSelector((state) => state.services);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchServiceDetails());
        }
    }, [status, dispatch]);

    const doctor = data.find((item) => item.collectionName === 'doctors')?.documents?.[docIndex];

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }


    if (!doctor) {
        return <Error />;
    }
    return (
        <div className="page-content bg-white">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card my-5">
                        <div className="card-header text-center">
                            <h1 className="mb-0 mt-5 text-primary">Doctor Information</h1>
                            <Link to="/" className="btn btn-primary mt-3">Get Info</Link>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4 order-md-1">
                                    <img
                                        src="https://mymedtrip.com/wp-content/uploads/2021/06/miot.jpg"
                                        className="img-fluid rounded "
                                        alt="Hospital"
                                        style={{ maxWidth: '100%', height: 'auto' }}
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h2 className="mb-0 text-primary">{doctor.name}</h2>
                                            <p className="card-text"><span className="fw-bold">Years of Experience:</span> {doctor.yoe}</p>
                                            <p className="card-text"><span className="fw-bold">Speciality:</span> {doctor.speciality}</p>
                                            <p className="card-text mt-3"><span className="fw-bold">About:</span> {doctor.about}</p>
                                            <div>
                                                <p className="mb-0 fw-bold">Specialization:</p>
                                                <ul className="list-group list-group-flush">
                                                    {doctor.specialization.map((item, index) => (
                                                        <li key={`specialization-${index}`} className="list-group-item">{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="mt-3">
                                                <p className="mb-0 fw-bold">Awards:</p>
                                                <ul className="list-group list-group-flush">
                                                    {doctor.awards.map((item, index) => (
                                                        <li key={`awards-${index}`} className="list-group-item">{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LatestNewsSection />
        </div>
    );
}

export default Doctor
