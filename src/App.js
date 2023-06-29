import { React, useState, useEffect } from 'react';
import './App.css';
import './Mobile.css'
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from './components/ProfileCard';
import UpdateProfileScreen from './Screens/UpdateProfileScreen';
import EmptyCard from './components/EmptyCard';
import SettingsScreen from './Screens/SettingsScreen';
import EditUserProfileScreen from './Screens/EditUserProfileScreen';
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
    <div style={{
      overflow: 'hidden',
    }}>
      <Router>
        <Row xs={12}>
          <Header responsive={isMobile} />

        </Row>
        <Container className="mt-4 mb-4">
          <Row>
            <Col xs={4} md={3} >
              {!isMobile && <ProfileCard />}
            </Col>
            <Col xs={12} md={6}>
              <Routes>
                {isMobile && <Route path="/userprofile" element={<EditUserProfileScreen />} />}

                {!isMobile && <Route path="/profile" element={<UpdateProfileScreen />} />}

                {!isMobile && <Route path="/settings" element={<SettingsScreen />} />}
              </Routes>
            </Col>
            <Col xs={4} md={3} >
              {!isMobile && <EmptyCard />}
            </Col>
          </Row>
        </Container>
        {isMobile && <MobileFooter />}
      </Router>
    </div>
  );
}

export default App;
