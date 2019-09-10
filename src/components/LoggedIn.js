import React from 'react'
import { Container, Row, Col } from 'reactstrap'

export default function LoggedIn () {
  return (
    <div className='logged-in'>
      <span>Hello, Sarah Edo</span>
      <span>
        <img
          src='https://placeimg.com/30/30/people'
          className='logged-in-avatar'
          alt='user avatar'
        />
      </span>
      <span>Logout</span>
    </div>
  )
}
