import React from 'react';
import { Rating } from '@mui/material';
import LatestNewsSection from '../elements/latest-news-slider';
import { Link, useParams } from 'react-router-dom';

const Hospital = () => {
    const index = useParams();
    console.log(index)
    const hospitalIndex = parseInt(index);
    console.log(hospitalIndex)
    const data = JSON.parse(localStorage.getItem('data')) || [];
    const secondCollection = data[1];

    if (!secondCollection || hospitalIndex >= secondCollection.length || hospitalIndex < 0) {
        console.log("Invalid hospital index or data missing");
        //return <p>Invalid hospital index</p>;
    }

    let hospital = secondCollection[3]
    console.log("hindex", index);

    console.log("Second Collection Data:", secondCollection.type);
    console.log("Hospital:", hospital);

    if (!hospital) {
        console.log("Hospital data is missing or incorrect");
        //return <p>Hospital data is missing or incorrect</p>;
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
                                            <h2 className="mb-0 text-blue">Gleaneagles Global Hospital, Chennai</h2>
                                            <Rating name="read-only" value="4" readOnly />
                                            <p className="card-text">Established In: 1988</p>
                                            <p className="card-text">Number of Beds: 300</p>
                                            <p className="card-text">City: banglore</p>
                                            <p className="card-text">State: telangana</p>
                                            <p className="card-text">Address: 439, Cheran Nagar, Perumbakkam, Chennai – 600 100, Tamil Nadu</p>
                                            <p className="card-text">About: "Gleneagles Global Health City, a 21-acre complex located in Perumbakkam, Chennai is the largest center of Gleneagles Global Hospitals India. With a capacity of more than 1000 beds and accreditation from leading agencies, the center is Asia’s most reliable and leading Multi-Organ Transplant Center. The hospital has performed several procedures for liver failure, Neuro, Heart, Lung and Kidney. It is known for its several international and national accreditation agencies. World-class infrastructure, dedicated staff and commitment to medical excellence are the USPs of this institute. The hospital has a lot to do with its credit and continues to operate several pioneering programs."</p>
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
