import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import { Avatar } from '@material-ui/core'
import { setAuthedUser } from '../actions/authedUser'

class Logout extends Component {

  handleLogout = (e) => {
    e.preventDefault()

    this.props.dispatch(setAuthedUser(null))
  }

  render() {
    return (
      <div className='logout-panel'>
        <span>Hello, {this.props.username}</span>
        <span>
          <Avatar
            src={this.props.useravatar}
            className='logged-in-avatar'
            alt='user avatar'
          />
        </span>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    username: users[authedUser].name,
    useravatar: authedUser
      ? users[authedUser].avatarURL
      : null
  }
}


export default connect(mapStateToProps)(Logout)
