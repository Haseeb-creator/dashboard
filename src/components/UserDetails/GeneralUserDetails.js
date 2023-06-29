import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsPencil } from 'react-icons/bs'

const GeneralUserDetails = () => {
	const [fullName, setFullName] = useState('Mr. Anup Roy');
	const [userName, setUserName] = useState('Anup Roy');
	const [dateOfBirth, setDateOfBirth] = useState('02/05/2023');
	const [referredId, setReferredId] = useState('');
	const [profilePicture, setProfilePicture] = useState('');
	const [isEditing, setIsEditing] = useState(false);



	const handleEdit = () => {
		setIsEditing(true);
	};

	const handleSave = () => {
		setIsEditing(false);
		// For simplicity, we're just logging the values here
		console.log('Full Name:', fullName);
		console.log('User Name:', userName);
		console.log('Date of Birth:', dateOfBirth);
		console.log('Referred ID:', referredId);
		console.log('Profile Picture:', profilePicture);
	};

	const handleProfilePictureUpdate = () => {
		// For simplicity, we're just logging a message here
		setProfilePicture('picture data')
		console.log('Updating profile picture...');
	};

	return (
		<Form className='FormDetails p-3'>
			<div className="d-line-block">
				<h6 className="d-inline-block">General Details</h6>
				{isEditing === false ? (
					<Button className='float-end MobileButtonLink' onClick={handleEdit}>
						<BsPencil size={18} />
					</Button>
				) : (
					<Button className=" MobileButtonLink float-end" onClick={handleSave}>
						Save
					</Button>
				)}
			</div>
			<Form.Group controlId="fullName" className='mb-3'>
				<Form.Label>Full Name</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter full name"
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					disabled={!isEditing}
				/>
			</Form.Group>

			<Form.Group controlId="userName" className='mb-3'>
				<Form.Label>User Name</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter user name"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
					disabled={!isEditing}
				/>
			</Form.Group>

			<Form.Group controlId="dateOfBirth" className='mb-3'>
				<Form.Label>Date of Birth</Form.Label>
				<Form.Control
					type="number"
					placeholder="Enter date of birth"
					value={dateOfBirth}
					onChange={(e) => setDateOfBirth(e.target.value)}
					disabled={!isEditing}
				/>
			</Form.Group>
			<Form.Group controlId="referredId" className='mb-3'>
				<Form.Label>Referred ID</Form.Label>
				<Form.Control
					type="text"
					placeholder="Enter referred ID"
					value={referredId}
					onChange={(e) => setReferredId(e.target.value)}
					disabled={!isEditing}
				/>
			</Form.Group>

			<Form.Group controlId="profilePicture" >
				<Form.Label className='d-block'>Profile Picture</Form.Label>
				<Button className='MobileButtonLink' onClick={handleProfilePictureUpdate} disabled={!isEditing}>
					Update
				</Button>
			</Form.Group>



		</Form>
	)
}

export default GeneralUserDetails