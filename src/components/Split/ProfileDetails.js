import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const ProfileDetails = ({ tabValueChange, handleProfileData, profileData, formFields, tabKey }) => {
	const [activeField, setActiveField] = useState(null);

	const handleCancel = () => {
		setActiveField(null);
	};

	const handleSave = () => {
		tabValueChange(tabKey);
		setActiveField(null); // Clear active field after saving
		console.log('Saved!');
	};

	const handleEdit = (fieldName, value) => {
		setActiveField(fieldName);
		handleProfileData((prevData) => ({
			...prevData,
			[fieldName]: value
		}));
	};

	const handleInputChange = (fieldName, value) => {
		handleProfileData((prevData) => ({
			...prevData,
			[fieldName]: value
		}));
	};

	return (
		<Form style={{ maxHeight: '100vh', }}>
			<div className="p-2">
				{formFields.map((field) => (
					<Form.Group key={field.fieldName} controlId={field.fieldName}>
						<div className="d-flex align-items-center mb-4 mt-4">
							<Form.Label
								className="me-3"
								style={{ width: '100%', maxWidth: '200px', textAlign: 'left', fontSize: '1rem', }}
							>
								{field.label} <span style={{ float: 'right' }} className='ms-auto'>:</span>
							</Form.Label>
							<div className="input-group ">
								{activeField === field.fieldName ? (
									<Form.Control
										type="text"
										value={profileData[field.fieldName]}
										onChange={(e) => handleInputChange(field.fieldName, e.target.value)}
										size="sm"

									/>
								) : (
									<h5>{profileData[field.fieldName]}</h5>
								)}
								{field.fieldName !== 'profilePicture' && (

									<a
										style={{ color: 'blue', cursor: 'pointer', float: 'right' }}
										onClick={() => (activeField === field.fieldName ? handleSave() : handleEdit(field.fieldName))}
										className="ms-2 ml-auto"
									>
										{activeField === field.fieldName ? 'Save' : 'Edit'}
									</a>

								)}
							</div>
						</div>
					</Form.Group>
				))}

				<div className="d-flex justify-content-center mb-1 ">
					<Button variant="secondary" className="me-3" onClick={handleCancel}>
						Cancel
					</Button>
					<Button variant="primary" onClick={handleSave}>
						Save & Next
					</Button>
				</div>
			</div>
		</Form>
	);
};
