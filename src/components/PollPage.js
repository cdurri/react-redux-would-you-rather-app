import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import { Avatar } from '@material-ui/core'

const PollPage = props => {

    const { author, avatar, optionOne, optionTwo, id } = props

    console.log('ID: ', id)
    console.log('OptionOne: ', optionOne)
    console.log('OptionTwo: ', optionTwo)

    return (

      <div>
        <Container>
          <Row>
            <Col sm="12" md={{ size: 12, offset: 0}}>
              <Card className='question-card'>
                <CardHeader>
                  {author} asks:
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col sm='4' className='question-card__avatar'>
                      <Avatar
                        src={avatar}
                        className='question-card__avatar-image'
                        alt='User avatar'
                      />
                    </Col>
                    <Col sm='8' className='question-card__options-preview'>
                      <CardTitle className='question-card__title'>Would you rather</CardTitle>
                      <Form>
                        <FormGroup tag='fieldset'>
                          <FormGroup check>
                            <Label check>
                              <Input type='radio' name='radio1' />{' '}
                                {optionOne}
                            </Label>
                          </FormGroup>
                          <FormGroup check>
                            <Label check>
                              <Input type='radio' name='radio1' />{' '}
                                {optionTwo}
                            </Label>
                          </FormGroup>
                        </FormGroup>
                      </Form>
                      <Button className='question-card__view-poll-btn'>
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

function mapStateToProps({ questions, users }, props) {

  const { id } = props.match.params

  const user = questions[id].author
  const optionOne = questions[id].optionOne.text
  const optionTwo = questions[id].optionTwo.text


  return {
    id,
    author: users[user].name,
    avatar: users[user].avatarURL,
    optionOne: optionOne,
    optionTwo: optionTwo
  }
}

export default connect(mapStateToProps)(PollPage)
