import { React, useState, useEffect } from 'react';
import './App.css';
import './Responsive.css'
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from './components/ProfileCard';
import UpdateProfile from './components/UpdateProfile';
import EmptyCard from './components/EmptyCard';
import Settings from './components/Settings';
import EditUserDetails from './components/Split/UserDetails/EditUserDetails';
import MobileFooter from './components/Split/Footer/MobileFooter';

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550);
    };

    // Check initial window size
    setIsMobile(window.innerWidth <= 550);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);
  console.log(isMobile);

  return (
    <Router>
      <Header responsive={isMobile} />
      <Container className="mt-4">
        <Row>
          <Col xs={3} md={3}>
            {!isMobile && <ProfileCard />}
          </Col>
          <Col xs={12} md={6}>
            <Routes>
              <Route path="/userprofile" element={<EditUserDetails />} />
              <Route path="/profile" element={<UpdateProfile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Col>
          <Col xs={3} md={3}>
            {!isMobile && <EmptyCard />}
          </Col>
        </Row>
      </Container>
      {isMobile && <MobileFooter />}
    </Router>
  );
}

export default App;
