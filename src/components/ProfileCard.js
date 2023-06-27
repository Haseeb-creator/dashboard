import React from 'react';
import { Card, Image } from 'react-bootstrap';
import job from '../Imgs/SideBarIcons/job-seeker.svg'
import candidate from '../Imgs/SideBarIcons/add.svg'
import referral from '../Imgs/SideBarIcons/Network.svg'
import user from '../Imgs/SideBarIcons/User.svg'
import setting from '../Imgs/settings.svg'
import logout from '../Imgs/exit.svg'
import ProfileImg from '../Imgs/profile.png'
import { Link } from 'react-router-dom';

const ProfileCard = () => {

	const sideBarDetails = [
		{ icon: job, title: 'Jobs', Subtitle: ['Marked Jobs', 'Referred Jobs', 'Closed Jobs'], link: '' },
		{ icon: candidate, title: 'Candidates', Subtitle: ['Add a Candidate to your database', 'Your Candidates Database', 'Referred Candidates', 'Selected Candidates'], link: '#link2' },
		{ icon: referral, title: 'Referrals', Subtitle: [], link: '#link3' },
		{ icon: user, title: 'View/Update profile', Subtitle: [], link: '/profile' },
		{ icon: setting, title: 'Settings', Subtitle: [], link: '#link5' },
		{ icon: logout, title: 'Logout', Subtitle: [], link: '#link6' },
	]


	return (
		<Card >

			<div className=" d-block mx-auto m-2 ">
				<Image src={ProfileImg} alt="Profile" className="rounded-circle  d-block mx-auto mt-3" width={60} height={60} />
				<h5 style={{ fontWeight: '600' }}>Dr. Arvind K</h5>
			</div>

			<Card.Body>
				{sideBarDetails.map((detail) => (
					<div key={detail.icon} className='d-block mb-4'>
						<Image
							alt="logo"
							src={detail.icon}
							width="28"
							height="25"
							className='float-start me-2'
						/>
						<span className='sideBarTitle'><Link to={detail.link}> {detail.title}</Link></span>
						{detail.Subtitle.map((subtitle) => (
							<ul key={subtitle} className='listTitle'>
								<li className='ms-2'><a href='#link'>{subtitle}</a></li>
							</ul>
						))}
					</div>
				))}
			</Card.Body>

		</Card >
	);
};

export default ProfileCard;
