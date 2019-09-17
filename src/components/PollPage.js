import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import { Avatar } from '@material-ui/core'

class PollPage extends Component {
  render() {
    return (
      <div>Poll Page</div>
    )
  }
}

export default connect()(PollPage)
