import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect  } from 'react-redux'
import { Navbar, NavbarToggler, Nav, NavbarBrand, NavItem } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'
import Logout from './Logout'

class Navigation extends Component {
  render() {
    console.log(this.props.loggedin)
    return (
      <Navbar color='light' className='nav'>
          <Nav>
            <NavItem>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/new-question' activeClassName='active'>
                New Question
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='leaderboard' activeClassName='active'>
                Leaderboard
              </NavLink>
            </NavItem>
          </Nav>
          {this.props.loggedin !== false
            && <Logout />
          }
      </Navbar>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loggedin: authedUser !== null
  }
}

export default connect(mapStateToProps)(Navigation)
