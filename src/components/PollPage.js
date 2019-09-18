import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import { Avatar } from '@material-ui/core'

const PollPage = props => {

    const { author, avatar, optionOne, optionTwo } = props

    return (
      <div>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 12, offset: 0}}>
            <Card className='question-card'>
              <CardHeader>
                Joe Bloggs asks:
              </CardHeader>
              <CardBody>
                <Row>
                  <Col sm='4' className='question-card__avatar'>
                    <Avatar
                      src='https://tylermcginnis.com/would-you-rather/dan.jpg'
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
                              be a front-end developer
                          </Label>
                        </FormGroup>
                        <FormGroup check>
                          <Label check>
                            <Input type='radio' name='radio1' />{' '}
                              be a back-end developer
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

function mapStateToProps({ questions, users }, { id }) {
  const user = questions[id].author
  const optionOne = questions[id].optionOne.text
  const optionTwo = questions[id].optionTwo.text

  return {
    author: users[user].name,
    avatar: users[user].avatarURL,
    optionOne: optionOne,
    optionTwo: optionTwo
  }
}

export default connect()(PollPage)
