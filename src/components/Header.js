import React from 'react'
import Navigation from './Navigation'
import { Container, Row, Col } from 'reactstrap'

export default function Header () {
  return (
    <div className='header'>
      <Container>
        <Navigation />
      </Container>
    </div>
  )
}
