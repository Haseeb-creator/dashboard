import React from 'react'
import { Image, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { images } from '../Assets/Images';
import job from '../Assets/img/Job.png'
import Logo from '../Assets/img/logo.svg'
import cv from '../Assets/img/CV.png'
import ProfileImg from '../Assets/img/profile.png'

const Header = () => {
	const profileDetails = [
		{ name: 'View Profile', icon: images.ViewProfile, href: '1.1' },
		{ name: 'Edit Profile', icon: images.EditProfile, href: '1.2' },
		{ name: 'Security Settings', icon: images.Setting, href: '1.3' },
		{ name: 'Privacy Settings', icon: images.Privacy, href: '1.4' },
		{ name: 'Logout', icon: images.Logout, href: '1.5' }
	]

	const navDetails = [
		{ name: 'All Jobs', icon: job },
		{ name: 'Add a Candidate', icon: cv }
	]
	return (
		<Navbar className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">
					<Image
						alt="logo"
						src={Logo}
						width="65"
						height="70"
						className='me-3'
					/>{' '}
					<span className='brand'>
						Securing Digital World!
					</span>
				</Navbar.Brand>
				<Nav >
					{navDetails.map((detail) => (
						<div>
							<Image
								alt=""
								src={detail.icon}
								width="40"
								height="40"
								className="d-block mx-auto"
							/> <Nav.Link href="#features" className='link me-2'>
								{detail.name}</Nav.Link>
						</div>
					))}

					<div>
						<Image src={ProfileImg} alt="Profile" className="rounded-circle  d-block mx-auto" width={40} height={40} />
						<NavDropdown title="My Profile" id="dropdown-menu-align-responsive-1" align={{ sm: 'end' }} >

							{profileDetails.map((detail) =>
							(<NavDropdown.Item key={detail.name} className='mb-3' href={`#action${detail.href}`}>
								<Image
									alt=""
									src={detail.icon}
									width="22"
									height="21"
									className="d-line-block me-2"
								/> {detail.name}
							</NavDropdown.Item>)
							)}
						</NavDropdown>
					</div>
				</Nav>
			</Container>
		</Navbar>
	)
}

export default Header
