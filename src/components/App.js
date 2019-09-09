import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import Header from './Header'
import '../index.css';

function App() {
  return (
    <Router>
        <Header />
    </Router>
  );
}

export default App;
