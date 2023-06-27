import React from 'react'
import ProfileCard from '../components/ProfileCard';
import { UpdateProfile } from '../components/UpdateProfile';
import { Container, Row, Col } from 'react-bootstrap';


const HomeScreen = () => {
	return (
		<>
			<Container className='mt-4 ' >
				<Row>
					<Col xs={3} >
						<ProfileCard />
					</Col>
					<Col xs={6}>
						<UpdateProfile />
					</Col>
					<Col xs={3}>
						<ProfileCard />
					</Col>
				</Row>
			</Container>
		</>

	)
}

export default HomeScreen