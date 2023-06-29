import React from 'react'
import { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import WebProfileDetails from '../components/Split/Profile/WebProfileDetails';

const UpdateProfile = () => {
	const [key, setKey] = useState('home');

	const [profileData, setProfileData] = useState({
		fullName: 'Mr. ANUP ROY',
		dateOfBirth: '02/02/2023',
		username: 'Anup Roy',
		referredId: 'REF123ABCD'
	});

	const formFields = [
		{ fieldName: 'fullName', label: 'Full Name' },
		{ fieldName: 'profilePicture', label: 'Profile Picture' },
		{ fieldName: 'dateOfBirth', label: 'Date of Birth' },
		{ fieldName: 'username', label: 'Username' },
		{ fieldName: 'referredId', label: 'Referred ID' }
	];

	const [bankData, setBankData] = useState({
		AccountHolderName: 'Mr. ANUP ROY',
		BankName: 'Paytm Bank',
		AccountNumber: '917076401049',
		IFSCCode: 'PYTM123456',
		UPIId: '7076401049@paytm',
		ReferredId: 'REF123ABCD',
	});

	const bankFields = [
		{ fieldName: 'AccountHolderName', label: 'Account Holder Name' },
		{ fieldName: 'BankName', label: 'Bank Name' },
		{ fieldName: 'AccountNumber', label: 'Account Number' },
		{ fieldName: 'IFSCCode', label: 'IFSC Code' },
		{ fieldName: 'UPIId', label: 'UPI Id' },
		{ fieldName: 'ReferredId', label: 'Referred ID' }
	];


	const [contactData, setContactData] = useState({
		EmailId: 'anuproybca@gmail.com',
		AlternateEmail: 'ANUP ROY',
		ConatctNumber: '7076401049',
		AlternateNumber: '1234567890',
		NominiName: 'Anup Roy',
		NominiEmailId: 'anuproy@gmail.com',
		NominiconatctNumber: '7076401049',
	});

	const contactFields = [
		{ fieldName: 'EmailId', label: 'Email Id' },
		{ fieldName: 'AlternateEmail', label: 'Alternate Email Id' },
		{ fieldName: 'ConatctNumber', label: 'Contact Number' },
		{ fieldName: 'AlternateNumber', label: 'Alternate Number' },
		{ fieldName: 'NominiName', label: 'Nomini Name' },
		{ fieldName: 'NominiEmailId', label: 'Nomini Email Id' },
		{ fieldName: 'NominiconatctNumber', label: 'Nomini Conatct Number' },
	];

	const handleChildValue = (value) => {
		setKey(value);
	};

	const handleProfileData = (value) => {
		setProfileData(value)
	}
	const handleBankData = (value) => {
		setBankData(value)
	}
	const handleContactData = (value) => {
		setContactData(value)
	}


	return (
		<Tabs
			id="controlled-tab"
			activeKey={key}
			onSelect={(k) => setKey(k)}
			className="mb-3"
		>
			<Tab eventKey="home" className='mb-2' title="General Details">
				<div>
					<WebProfileDetails tabValueChange={handleChildValue} profileData={profileData} handleProfileData={handleProfileData} formFields={formFields} tabKey={'bank'} nextTab={'bank'} />
				</div>
			</Tab>
			<Tab eventKey="bank" className='m-2' title="Bank Details">
				<div>
					<WebProfileDetails tabValueChange={handleChildValue} profileData={bankData} handleProfileData={handleBankData} formFields={bankFields} tabKey={'contact'} nextTab={'bank'} />
				</div>
			</Tab>
			<Tab eventKey="contact" title="Contact Details">
				<div>
					<WebProfileDetails tabValueChange={handleChildValue} profileData={contactData} handleProfileData={handleContactData} formFields={contactFields} tabKey={'contact'} nextTab={'contact'} />
				</div>
			</Tab>
		</Tabs>
	)
}


export default UpdateProfile