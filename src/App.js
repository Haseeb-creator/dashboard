import React from 'react';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import ProfileCard from './components/ProfileCard';
import { UpdateProfile } from './components/UpdateProfile';

function App() {
  return (
    <Router>
      <Header />
      <Container className="mt-4">
        <Row>
          <Col xs={3}>
            <ProfileCard />
          </Col>
          <Col xs={6}>
            <Routes>
              <Route path="/profile" element={<UpdateProfile />} />
            </Routes>
          </Col>
          <Col xs={3}>
            <ProfileCard />
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
