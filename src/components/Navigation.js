import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, NavbarToggler, Nav, NavbarBrand, NavItem } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'
import LoggedIn from './LoggedIn'

export default function Navigation () {
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
        <LoggedIn />
    </Navbar>
  )
}
