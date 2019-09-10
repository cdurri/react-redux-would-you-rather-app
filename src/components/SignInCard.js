import React from 'react'
import { Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import { DiReact } from 'react-icons/di'
import Logo from '../images/react.png'

const SignInCard = () => {
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
                  <option>Sarah Edo</option>
                  <option>Tyler McGinnis</option>
                  <option>John Doe</option>
                </Input>
              </FormGroup>
              <Button>Sign In</Button>
            </Form>
          </CardBody>
        </CardHeader>
      </Card>
      <DiReact />
    </div>
  )
}

export default SignInCard
