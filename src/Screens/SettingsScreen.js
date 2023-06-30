import React from 'react'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProfileDetails from '../components/Profile/WebProfileDetails'
const Settings = () => {
	const [key, setKey] = useState('privacy');

	const [profileData, setProfileData] = useState({})


	const formFields = [

	];

	const [securityData, setSecurityData] = useState({
		AccountHolderName: 'Mr. ANUP ROY',
		BankName: 'Paytm Bank',
		AccountNumber: '917076401049',
		IFSCCode: 'PYTM123456',
		UPIId: '7076401049@paytm',
		ReferredId: 'REF123ABCD',
	});

	const securityFields = [
		{ fieldName: 'password', label: 'Password' },
		{ fieldName: '2-stepVerification', label: '2-Step verification' },
	];


	const [passwordData, setPasswordData] = useState({
		OldPassword: '',
		NewPassword: '',
		ConfirmPassword: '',
	});

	const passwordFields = [
		{ fieldName: 'OldPassword', label: 'Enter Old Password' },
		{ fieldName: 'NewPassword', label: 'Enter New Password' },
		{ fieldName: 'ConfirmPassword', label: 'Confirm New Password' },
	];

	const handleChildValue = (value) => {
		setKey(value);
	};

	const handleProfileData = (value) => {
		setProfileData(value)
	}
	const handleBankData = (value) => {
		setSecurityData(value)
	}
	const handleContactData = (value) => {
		setPasswordData(value)
	}


	return (
		<Tabs
			id="controlled-tab"
			activeKey={key}
			onSelect={(k) => setKey(k)}
			className="mb-3"
		>
			<Tab eventKey="privacy" className='mb-2' title="Privacy">
				<div>
					<ProfileDetails tabValueChange={handleChildValue} profileData={profileData} handleProfileData={handleProfileData} formFields={formFields} tabKey={''} nextTab={'privacy'} />
				</div>
			</Tab>
			<Tab eventKey="security" className='m-2' title="Security">
				<div>
					<ProfileDetails tabValueChange={handleChildValue} profileData={securityData} handleProfileData={handleBankData} formFields={securityFields} tabKey={''} nextTab={'security'} />
				</div>
			</Tab>
			<Tab eventKey="password" title="Change Password">
				<div>
					<ProfileDetails tabValueChange={handleChildValue} profileData={passwordData} handleProfileData={handleContactData} formFields={passwordFields} tabKey={''} nextTab={'password'} />
				</div>
			</Tab>
		</Tabs>
	)
}


export default Settings