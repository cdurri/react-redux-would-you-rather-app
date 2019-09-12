import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import { Avatar } from '@material-ui/core'
import { DiReact } from 'react-icons/di'
import Logo from '../images/react.png'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class SignInCard extends Component {

  state = {
    toHome: false,
    signIn: false,
    userId: null
  }

  handleChange = (e) => {
    e.preventDefault()

    console.log(e.target.value)

    this.setState({signIn: true, userId: e.target.value})
  }

  handleSignIn = (e) => {
    e.preventDefault()

    const { userId } = this.state

    this.props.dispatch(setAuthedUser(userId))

    this.setState(() => ({
      toHome: true
    }))
  }

  render() {
    const { users } = this.props

    const { signIn, toHome } = this.state

    if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 8, offset: 2}}>
            <Card className='login-card'>
              <CardHeader>
                Welcome to the Would You Rather App!
                <CardText>Please sign in to continue</CardText>
              </CardHeader>
              <CardBody>
                <CardImg src={Logo} />
                <Form onSubmit={this.handleSignIn}>
                  <FormGroup>
                    <Label for='selectUser'>Sign in</Label>
                    <Input type='select' name='select' id='selectUser' onChange={this.handleChange}>
                      <option value=''>Select User</option>
                      {users.map((user) => (
                        <option key={user.id} value={user.id} style={{ backgroundImage: `url(${user.avatar})`}}>
                          {/* todo: come back to adding avatar to select dropdown options */}
                          {user.name}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                  <Button className='btn-sign-in' type='submit' disabled={signIn === false}>Sign In</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .map((user) => ({
        avatar: users[user].avatarURL,
        name: users[user].name,
        id: users[user].id
      }))
  }
}

export default connect(mapStateToProps)(SignInCard)
