import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import '../index.css';
import Header from './Header'
import Login from './Login'


class App extends Component  {
  render() {
    return (
      <Router>
          <Header />
          <Login />
      </Router>
    );
  }
}

export default App;
