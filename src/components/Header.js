import React from 'react'
import Navigation from './Navigation'
import { Container, Row, Col } from 'reactstrap'

const Header = () => {
  return (
    <div className='header'>
      <Container>
        <Navigation />
      </Container>
    </div>
  )
}

export default Header
