import React, { useState } from 'react';
import { Card, Image, Accordion, } from 'react-bootstrap';
import job from '../../../Imgs/SideBarIcons/job-seeker.svg'
import candidate from '../../../Imgs/SideBarIcons/add.svg'
import referral from '../../../Imgs/SideBarIcons/Network.svg'
import user from '../../../Imgs/SideBarIcons/User.svg'
import setting from '../../../Imgs/settings.svg'
import logout from '../../../Imgs/exit.svg'
import ProfileImg from '../../../Imgs/profile.png'
import { Link, useLocation } from 'react-router-dom';

const MobileSideBar = ({ closeOffcanvas }) => {

	const sideBarDetails = [
		{ icon: job, title: 'Jobs', Subtitle: ['Marked Jobs', 'Referred Jobs', 'Closed Jobs'], link: '1' },
		{ icon: candidate, title: 'Candidates', Subtitle: ['Add a Candidate to your database', 'Your Candidates Database', 'Referred Candidates', 'Selected Candidates'], link: '2' },
		/* 	{ icon: referral, title: 'Referrals', Subtitle: [], link: '3' },
			/* 	{ icon: user, title: 'View/Update profile', Subtitle: [], link: 'profile' }, 
			{ icon: setting, title: 'Settings', Subtitle: [], link: 'settings' },
			{ icon: logout, title: 'Logout', Subtitle: [], link: '4' }, */
	]


	const location = useLocation();

	const closeToggleOffcanvas = () => {
		closeOffcanvas(false)
	};


	return (
		< >
			<div className=" d-block profileHead ">
				<Image src={ProfileImg} alt="Profile" className="rounded-circle  d-block mb-3" width={50} height={50} />
				<h5 style={{ fontWeight: '400' }}>Dr. Arvind K</h5>
				<Link to='profile' style={{ color: 'rgba(22, 118, 243, 1)', fontSize: '0.9rem' }} onClick={closeToggleOffcanvas}>Update Profile</Link>
			</div>

			<Card.Body style={{ borderTop: '1px solid rgba(0, 0, 0, 0.2)' }}>
				{sideBarDetails.map((detail) => (
					<Accordion key={detail.icon}>
						<Accordion.Item eventKey={detail.icon}>
							<Accordion.Header>
								<Image alt="logo" src={detail.icon} width="28" height="25" className="float-start me-2" />
								<Link to={detail.link}>{detail.title}</Link>
							</Accordion.Header>
							<Accordion.Body>
								{detail.Subtitle.map((subtitle) => (
									<p key={subtitle} className="ms-2">
										<a href="#link">{subtitle}</a>
									</p>
								))}
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				))}
				<div className='sideProfileTag'>
					<ul>
						<li>	<Image alt="logo" src={referral} width="28" height="25" className="float-start me-2" />
							<Link to='referrals' >Referrals</Link> 	</li>
						<li>	<Image alt="logo" src={setting} width="28" height="25" className="float-start me-2" />
							<Link to='referrals' >Settings</Link> 	</li>
						<li >		</li>
					</ul>
					<div className='sideLogout'>
						<Image alt="logo" src={logout} width="28" height="25" className="float-start me-2" />
						<Link to='referrals' >Logout</Link>
					</div>
				</div>




			</Card.Body>

		</ >
	);
};

export default MobileSideBar;
