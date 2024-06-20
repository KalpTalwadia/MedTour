import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";
import { storage } from '../../firebase';

const tiers = [
    { id: 1, name: 'Bronze', price: 100 },
    { id: 2, name: 'Silver', price: 200 },
    { id: 3, name: 'Gold', price: 300 },
];

const options = {
    cities: ['City A', 'City B', 'City C'],
    hospitals: ['Hospital X', 'Hospital Y', 'Hospital Z'],
    doctors: ['Doctor 1', 'Doctor 2', 'Doctor 3'],
};

const TierPricing = () => {
    const [selectedTier, setSelectedTier] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({ city: '', hospital: '', doctor: '' });
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showPrice, setShowPrice] = useState(false);

    useEffect(() => {
        if (selectedTier !== null && Object.values(selectedOptions).every(option => option !== '') && name !== '' && phoneNumber !== '') {
            setShowPrice(true);
            addDataToExcel(selectedTier, selectedOptions, name, phoneNumber);
        } else {
            setShowPrice(false);
        }
    }, [selectedTier, selectedOptions, name, phoneNumber]);

    const handleTierChange = (tierId) => {
        setSelectedTier(tierId);
    };

    const handleOptionChange = (field, value) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    const transformData = (data, tierId, selectedOptions, name, phoneNumber) => {
        const newRow = {
            Tier: tiers[tierId - 1].name,
            City: selectedOptions.city,
            Hospital: selectedOptions.hospital,
            Doctor: selectedOptions.doctor,
            Name: name,
            PhoneNumber: phoneNumber
        };
        return [...data, newRow];
    };

    const addDataToExcel = async (tierId, selectedOptions, name, phoneNumber) => {
        try {
            const fileRef = ref(storage, 'selected_tiers.xlsx');
            const url = await getDownloadURL(fileRef);

            // Fetch the Excel file
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Read the file as a binary string
            const arrayBuffer = await response.arrayBuffer();
            const data = new Uint8Array(arrayBuffer);

            // Parse the Excel file
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            // Transform the fetched data
            const transformedData = transformData(jsonData, tierId, selectedOptions, name, phoneNumber);

            // Add data to the Excel sheet
            const newWorksheet = XLSX.utils.json_to_sheet(transformedData);
            const newWorkbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Sheet1');

            // Write the updated workbook to a binary string
            const updatedExcel = XLSX.write(newWorkbook, { bookType: 'xlsx', type: 'array' });

            // Create a Blob from the binary string
            const blob = new Blob([updatedExcel], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

            // Upload the updated file back to Firebase Storage
            const updatedFileRef = ref(storage, 'selected_tiers_updated.xlsx');
            await uploadBytes(updatedFileRef, blob);

            // Delete the previous file from Firebase Storage
            await deleteObject(fileRef);

            // Rename the updated file to the original file name
            const newFileRef = ref(storage, 'selected_tiers.xlsx');
            await uploadBytes(newFileRef, blob);
            await deleteObject(updatedFileRef);

            console.log('File updated and uploaded successfully!');
        } catch (error) {
            console.error('Error fetching or updating Excel file: ', error);
        }
    };

    return (
        <div className="container py-8">
            <h1 className="text-2xl font-bold mb-4">Tier Pricing</h1>
            <div className="p-4 border rounded-lg">
                <div className="row mb-4">
                    <div className="col-md-6">
                        <label className="form-label">Name:</label>
                        <input
                            type="text"
                            className="form-control  border-0 border-bottom"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Phone Number:</label>
                        <input
                            type="text"
                            className="form-control border-0 border-bottom"
                            placeholder="Enter your phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <label className="form-label">Select Tier:</label>
                        <select
                            className="form-select border-0 border-bottom"
                            onChange={(e) => handleTierChange(parseInt(e.target.value))}
                        >
                            <option value="">Select Tier</option>
                            {tiers.map(tier => (
                                <option key={tier.id} value={tier.id}>{tier.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">City:</label>
                        <select
                            className="form-select border-0 border-bottom"
                            onChange={(e) => handleOptionChange('city', e.target.value)}
                        >
                            <option value="">Select City</option>
                            {options.cities.map(city => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-6">
                        <label className="form-label">Hospital:</label>
                        <select
                            className="form-select border-0 border-bottom"
                            onChange={(e) => handleOptionChange('hospital', e.target.value)}
                        >
                            <option value="">Select Hospital</option>
                            {options.hospitals.map(hospital => (
                                <option key={hospital} value={hospital}>{hospital}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Doctor:</label>
                        <select
                            className="form-select border-0 border-bottom"
                            onChange={(e) => handleOptionChange('doctor', e.target.value)}
                        >
                            <option value="">Select Doctor</option>
                            {options.doctors.map(doctor => (
                                <option key={doctor} value={doctor}>{doctor}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {showPrice && <p className="text-gray-600 mt-4">Price: ${tiers[selectedTier - 1].price}</p>}
            </div>
        </div>
    );

};

export default TierPricing;
