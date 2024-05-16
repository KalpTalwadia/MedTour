import React from 'react';
import { Rating } from '@mui/material';
import LatestNewsSection from '../elements/latest-news-slider';
import { Link, useParams } from 'react-router-dom';
import Error from './error-404';

const Hospital = () => {
    const index = useParams().type;
    const hospitalIndex = parseInt(index);
    const data = JSON.parse(localStorage.getItem('data')) || [];
    let hospital = data[1].documents[hospitalIndex]

    if (!hospital) {
        return Error;
    }
    return (
        <div className="page-content bg-white">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card my-5">
                        <div className="card-header text-center">
                            <h1 className="mb-0 text-blue">Hospital Information</h1>
                            <Link to="/" className="btn btn-primary mt-3">Get Quote</Link>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 order-md-1">
                                    <img src="https://mymedtrip.com/wp-content/uploads/2021/06/miot.jpg" className="card-img" alt="Hospital" style={{}} />
                                </div>
                                <div className="col-md-6 order-md-2">
                                    <div className="card mb-4">
                                        <div className="card-body">
                                            <h2 className="mb-0 text-blue">{hospital.name}</h2>
                                            <Rating name="read-only" value={parseInt(hospital.rating)} readOnly />
                                            <p className="card-text">Established In: {hospital.establishIn}</p>
                                            <p className="card-text">Number of Beds: {hospital.nOfBeds}</p>
                                            <p className="card-text">City: {hospital.city}</p>
                                            <p className="card-text">State: {hospital.state}</p>
                                            <p className="card-text">Address: {hospital.address}</p>
                                            <p className="card-text">About: {hospital.about}</p>
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
};

export default Hospital;
