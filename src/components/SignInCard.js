import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import { DiReact } from 'react-icons/di'
import Logo from '../images/react.png'
import { setAuthedUser } from '../actions/authedUser'

class SignInCard extends Component {

  state = {
    signIn: false,
    userId: ''
  }

  handleChange = (e) => {
    e.preventDefault()

    console.log(e.target.value)

    this.setState({signIn: true, userId: e.target.value})
  }

  handleSignIn = (e) => {
    e.preventDefault()

    this.props.dispatch(setAuthedUser(this.state.userId))
  }

  render() {
    const { users } = this.props

    const { signIn } = this.state

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
                        <option key={user.id} value={user.id}>
                          <img
                            src={user.avatar} /* todo: come back  to get avatar to show properly */
                          />
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
        user,
        avatar: users[user].avatarURL,
        name: users[user].name,
        id: users[user].id
      }))
  }
}

export default connect(mapStateToProps)(SignInCard)
