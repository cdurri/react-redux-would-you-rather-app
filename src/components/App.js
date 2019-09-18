import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Container, Row, Col } from 'reactstrap'
import '../index.css';
import NavHeader from './NavHeader'
import Login from './Login'
import Dashboard from './Dashboard'
import PollPage from './PollPage'

class App extends Component  {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <NavHeader />
          {this.props.loggedout === true
            ? <Login />
            : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/poll-page' exact component={PollPage} />
              </div>
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
