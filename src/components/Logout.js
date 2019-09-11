import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import { setAuthedUser } from '../actions/authedUser'

class Logout extends Component {

  handleLogout = (e) => {
    e.preventDefault()

    this.props.dispatch(setAuthedUser(null))
  }

  render() {

    return (
      <div className='logged-in'>
        <span>Hello, {this.props.user}</span>
        <span>
          <img
            src='https://placeimg.com/30/30/people'
            className='logged-in-avatar'
            alt='user avatar'
          />
        </span>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    user: authedUser
  }
}


export default connect(mapStateToProps)(Logout)
