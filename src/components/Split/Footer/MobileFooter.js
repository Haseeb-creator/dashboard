import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { LuFolderSearch } from "react-icons/lu"
import { PiShareNetworkLight } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

const MobileFooter = () => {

	const location = useLocation();
	return (
		<Navbar fixed="bottom" className='bottom-tab-nav' >
			<Nav className="justify-content-around w-100 footNav" >
				<Nav.Link as={NavLink}
					to="/home"
					active={location.pathname === '/home'}
					style={{ color: location.pathname === '/home' ? '#fff' : 'rgba(255, 255, 255, 0.74)' }}>
					<div className='footIcons'>
						<AiOutlineHome size={23} />
					</div>
					<div className="footName">
						Home
					</div>
				</Nav.Link>
				<Nav.Link as={NavLink} to="/job"
					active={location.pathname === '/job'}
					style={{ color: location.pathname === '/job' ? '#fff' : 'rgba(255, 255, 255, 0.74)' }}>
					<div className='footIcons'>
						<LuFolderSearch size={23} />
					</div>
					<div className="footName">
						Jobs
					</div>
				</Nav.Link>
				<Nav.Link as={NavLink} to="/candidate"
					active={location.pathname === '/candidate'}
					style={{ color: location.pathname === '/candidate' ? '#fff' : 'rgba(255, 255, 255, 0.74)' }} className='plusIconTop'>
					<div style={{ position: 'absolute', bottom: '2%', left: '-200%', width: '5.5rem' }}>
						<div className='footIcons plusIconParent'>
							<FaPlus className='plusIconChild' size={25} />
						</div><div className="footName ">
							Add a Candidate
						</div>
					</div>

				</Nav.Link>
				<Nav.Link as={NavLink} to="/referral"
					active={location.pathname === '/referral'}
					style={{ color: location.pathname === '/referral' ? '#fff' : 'rgba(255, 255, 255, 0.74)' }}>
					<div className='footIcons'>
						<PiShareNetworkLight size={23}
						/>
					</div>
					<div className="footName">
						Referrals
					</div>
				</Nav.Link>
				<Nav.Link as={NavLink} to="/userprofile"
					active={location.pathname === '/userprofile'}
					style={{ color: location.pathname === '/userprofile' ? '#fff' : 'rgba(255, 255, 255, 0.74)' }}>
					<div className='footIcons'>
						<IoPersonOutline size={23}
						/>
					</div>
					<div className="footName">
						Profile
					</div>
				</Nav.Link>
			</Nav>
		</Navbar>
	);
};

export default MobileFooter;

