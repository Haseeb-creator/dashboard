import React, { useEffect } from 'react'
import job from '../Imgs/Job.png'
import cv from '../Imgs/CV.png'
import ViewProfile from '../Imgs/view.svg'
import EditProfile from '../Imgs/edit.svg'
import Setting from '../Imgs/settings.svg'
import Privacy from '../Imgs/security.svg'
import Logout from '../Imgs/exit.svg'
import WebHeader from './Header/WebHeader';
import MobileHeader from './Header/MobileHeader'

const Header = ({ responsive }) => {

	useEffect(() => {
		console.log(responsive);
	}, [responsive]);

	const profileDetails = [
		{ name: 'View Profile', icon: ViewProfile, href: '1.1' },
		{ name: 'Edit Profile', icon: EditProfile, href: '1.2' },
		{ name: 'Security Settings', icon: Setting, href: '1.3' },
		{ name: 'Privacy Settings', icon: Privacy, href: '1.4' },
		{ name: 'Logout', icon: Logout, href: '1.5' }
	]

	const navDetails = [
		{ name: 'All Jobs', icon: job },
		{ name: 'Add a Candidate', icon: cv }
	]

	console.log(responsive);

	return (
		<>
			{window.innerWidth <= 550 ?
				(<MobileHeader />) :
				(<WebHeader profileDetails={profileDetails} navDetails={navDetails} />)
			}
		</>

	)
}

export default Header
