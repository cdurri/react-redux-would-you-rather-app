import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Container, Row, Col } from 'reactstrap'
import '../index.css';
import Header from './Header'
import Login from './Login'

class App extends Component  {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          {this.props.loggedout === true
            ? <Login />
            : <div>Signed In!</div>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loggedout: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
