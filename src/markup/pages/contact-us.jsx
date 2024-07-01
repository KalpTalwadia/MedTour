import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as XLSX from 'xlsx';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../../firebase';
import {
	setFormData,
	setPopupVisible,
	setLoading,
	resetFormData
} from '../../app/features/contactUsSlice.js';

import bnrImg1 from '../../images/banner/img1.jpg';
import pic1 from '../../images/about/pic-1.jpg';
import icon1 from '../../images/icon/icon1.png';
import icon2 from '../../images/icon/icon2.png';
import icon3 from '../../images/icon/icon3.png';
import animateWave from '../../images/shap/wave-blue.png';
import animate2 from '../../images/shap/circle-dots.png';
import animateRotate from '../../images/shap/plus-blue.png';

const ContactUs = () => {
	const dispatch = useDispatch();
	const { formData, popupVisible, loading } = useSelector((state) => state.contactUs);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		dispatch(setFormData({ [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch(setLoading(true));
		try {
			await addDataToExcel(formData);
			dispatch(setPopupVisible(true));
			dispatch(resetFormData());
			setTimeout(() => dispatch(setPopupVisible(false)), 3000);
		} catch (error) {
			console.error('Error updating Excel file:', error);
		} finally {
			dispatch(setLoading(false));
		}
	};

	const transformData = (data, formData) => {
		const newRow = {
			Name: formData.name,
			Email: formData.email,
			Phone: formData.phone,
			Department: formData.department,
			Message: formData.message
		};
		return [...data, newRow];
	};

	const addDataToExcel = async (formData) => {
		try {
			const fileRef = ref(storage, 'aboutUs.xlsx');
			const url = await getDownloadURL(fileRef);

			const response = await fetch(url);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const arrayBuffer = await response.arrayBuffer();
			const data = new Uint8Array(arrayBuffer);

			const workbook = XLSX.read(data, { type: 'array' });
			const sheetName = workbook.SheetNames[0];
			const worksheet = workbook.Sheets[sheetName];
			const jsonData = XLSX.utils.sheet_to_json(worksheet);

			const transformedData = transformData(jsonData, formData);
			const newWorksheet = XLSX.utils.json_to_sheet(transformedData);
			const newWorkbook = XLSX.utils.book_new();
			XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Sheet');

			const updatedExcel = XLSX.write(newWorkbook, { bookType: 'xlsx', type: 'array' });

			const blob = new Blob([updatedExcel], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

			await uploadBytes(fileRef, blob);

			console.log('File updated and uploaded successfully!');
		} catch (error) {
			console.error('Error fetching or updating Excel file:', error);
		}
	};

	return (
		<>
			{loading && (
				<div className="loading-overlay">
					<div className="loading-text">Processing...</div>
				</div>
			)}
			<div className={`page-content bg-white ${loading ? 'blur-background' : ''}`}>
				<div className="banner-wraper">
					<div className="page-banner banner-lg contact-banner" style={{ backgroundImage: `url(${bnrImg1})` }}>
						<div className="container">
							<div className="page-banner-entry text-center">
								<h1>Contact Us</h1>
								<nav aria-label="breadcrumb" className="breadcrumb-row">
									<ul className="breadcrumb">
										<li className="breadcrumb-item">
											<Link to="/">
												<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home">
													<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
													<polyline points="9 22 9 12 15 12 15 22"></polyline>
												</svg>
												Home
											</Link>
										</li>
										<li className="breadcrumb-item active" aria-current="page">Contact Us</li>
									</ul>
								</nav>
							</div>
						</div>
						<img className="pt-img1 animate-wave" src={animateWave} alt="" />
						<img className="pt-img2 animate2" src={animate2} alt="" />
						<img className="pt-img3 animate-rotate" src={animateRotate} alt="" />
					</div>
				</div>

				<section className="">
					<div className="container">
						<div className="contact-wraper">
							{popupVisible && (
								<div className="popup-message">
									<p>Response sent!</p>
								</div>
							)}
							<div className="row">
								<div className="col-lg-6 mb-30">
									<form className="form-wraper contact-form" onSubmit={handleSubmit}>
										<div className="row">
											<div className="form-group col-md-12">
												<input name="name" type="text" required className="form-control" placeholder="Your Name" value={formData.name} onChange={handleInputChange} />
											</div>
											<div className="form-group col-md-12">
												<input name="email" type="email" required className="form-control" placeholder="Email" value={formData.email} onChange={handleInputChange} />
											</div>
											<div className="form-group col-md-12">
												<input name="phone" type="text" required className="form-control" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
											</div>
											<div className="form-group col-md-12">
												<select name="department" className="form-select form-control" value={formData.department} onChange={handleInputChange}>
													<option value="">Select Department</option>
													<option value="One">One</option>
													<option value="Two">Two</option>
													<option value="Three">Three</option>
												</select>
											</div>
											<div className="form-group col-md-12">
												<textarea name="message" required className="form-control" placeholder="Type Message" value={formData.message} onChange={handleInputChange}></textarea>
											</div>
											<div className="col-lg-12">
												<button name="submit" type="submit" className="btn w-100 btn-secondary btn-lg">Submit</button>
											</div>
										</div>
									</form>
								</div>
								<div className="col-lg-6 mb-30">
									<div className="contact-info ovpr-dark" style={{ backgroundImage: `url(${pic1})` }}>
										<div className="info-inner">
											<h4 className="title mb-30">Contact Us For Any Information</h4>
											<div className="icon-box">
												<h6 className="title"><i className="ti-map-alt"></i>Location</h6>
												<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
											</div>
											<div className="icon-box">
												<h6 className="title"><i className="ti-id-badge"></i>Email &amp; Phone</h6>
												<Link to="#" className="text-white">info@yourdomain.com</Link>
												<p>(+68) 120034509</p>
											</div>
											<div className="icon-box">
												<h6 className="title"><i className="ti-world"></i>Follow Us</h6>
												<ul className="social-media">
													<li><a rel="noreferrer" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
													<li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
													<li><a rel="noreferrer" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-area section-sp1">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx4 feature4">
									<div className="icon-md feature-icon">
										<img src={icon1} alt="" />
									</div>
									<div className="icon-content">
										<h5 className="ttr-title">Contact Number</h5>
										<p>+001 123 456 790</p>
										<p>+002 3424 44 00</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx4 feature3">
									<div className="icon-md feature-icon">
										<img src={icon3} alt="" />
									</div>
									<div className="icon-content">
										<h5 className="ttr-title">Email Address</h5>
										<p>info@yourdomain.com</p>
										<p>example@support.com</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-30">
								<div className="feature-container feature-bx4 feature2">
									<div className="icon-md feature-icon">
										<img src={icon2} alt="" />
									</div>
									<div className="icon-content">
										<h5 className="ttr-title">Address</h5>
										<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<style jsx>{`
        .popup-message {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #1f2278;
          color: white;
          padding: 10px 30px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          opacity: 0.95;
          font-size: 16px;
          text-align: center;
        }
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.8);
          z-index: 999;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .loading-text {
          font-size: 24px;
          color: #333;
        }
        .blur-background {
          filter: blur(5px);
        }
      `}</style>
		</>
	);
};

export default ContactUs;
