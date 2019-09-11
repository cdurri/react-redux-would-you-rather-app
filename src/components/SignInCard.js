import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
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
        <Card>
          <CardHeader>
            Welcome to the Would You Rather App!
            <CardText>Please sign in to continue</CardText>
            <CardBody>
              <CardImg src={Logo} />
              <Form onSubmit={this.handleSignIn}>
                <FormGroup>
                  <Label for='selectUser'>Sign In</Label>
                  <Input type='select' name='select' id='selectUser' onChange={this.handleChange}>
                    <option value=''>Select User</option>
                    {this.props.users.map((user) => (
                      <option key={user.id} value={user.id}>{user.name}</option>
                    ))}
                  </Input>
                </FormGroup>
                <Button className='sign-in' type='submit' disabled={signIn === false}>Sign In</Button>
              </Form>
            </CardBody>
          </CardHeader>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .map((user) => ({
        user,
        name: users[user].name,
        id: users[user].id,
      }))
  }
}

export default connect(mapStateToProps)(SignInCard)
