import React from 'react'
import GeneralUserDetails from '../components/Split/UserDetails/GeneralUserDetails'
import BankUserDetails from '../components/Split/UserDetails/BankUserDetails'
import ContactUserDetails from '../components/Split/UserDetails/ContactUserDetails'
import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai";

const EditUserProfileScreen = () => {
	return (
		<div style={{ marginBottom: '10rem' }}>
			<div className='mb-4'>
				<Button as={NavLink}
					to="/" className='MobileButtonLink' style={{ color: 'black', backgroundColor: 'white' }}>
					<AiOutlineArrowLeft size={30} />
				</Button>
			</div>
			<div className='mb-4'>
				<GeneralUserDetails />
			</div>
			<div className='mb-4'>
				<BankUserDetails />
			</div>
			<div>
				<ContactUserDetails />
			</div>
			<div className='d-flex justify-content-center'>
				<Button as={NavLink}
					to="/" size='sm' className='mt-5' style={{ width: '5rem' }} >
					Back
				</Button>
			</div>
		</div>
	)
}

export default EditUserProfileScreen