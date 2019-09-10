import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import { DiReact } from 'react-icons/di'
import Logo from '../images/react.png'

class SignInCard extends Component {

  render() {
    const { users } = this.props

    console.log(this.props.users)

    const { name } = users

    console.log(name)

    return (
      <div>
        <Card>
          <CardHeader>
            Welcome to the Would You Rather App!
            <CardText>Please sign in to continue</CardText>
            <CardBody>
              <CardImg src={Logo} />
              <Form>
                <FormGroup>
                  <Label for='selectUser'>Sign In</Label>
                  <Input type='select' name='select' id='selectUser'>
                    <option value=''>Select User</option>
                    {this.props.users.map((user) => (
                      <option>{user}</option>
                    ))}
                  </Input>
                </FormGroup>
                <Button>Sign In</Button>
              </Form>
            </CardBody>
          </CardHeader>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({ users }, { name }) {
  const user = users[name]

  return {
    users: Object.keys(users)
      .map((user) => users[user].name)
  }
}

export default connect(mapStateToProps)(SignInCard)
