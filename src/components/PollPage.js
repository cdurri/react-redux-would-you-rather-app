import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import { Avatar } from '@material-ui/core'
import {  handleAddQuestionAnswer } from '../actions/questions'

class PollPage extends Component {

    state = {
      submit: false,
      answer: null
    }

    handleChange = (e) => {
      this.setState({submit: true, answer: e.target.value})
    }

    handleSubmit = (e) => {
      console.log('Submit clicked')
      e.preventDefault()

      const { answer } = this.state
      const { dispatch, user, id } = this.props

      console.log(answer)
      console.log(user)

      dispatch(handleAddQuestionAnswer({
        id,
        answer,
        user
      }))
    }

    render() {

      const { author, avatar, optionOne, optionTwo, id } = this.props
      const { submit } = this.state

      return (
        <div>
          <Container className='poll-card'>
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2}}>
                <Card className='question-card'>
                  <CardHeader>
                    {author} asks:
                  </CardHeader>
                  <CardBody>
                    <Row>
                      <Col sm='4' className='poll-card__avatar'>
                        <Avatar
                          src={avatar}
                          className='poll-card__avatar-image'
                          alt='User avatar'
                        />
                      </Col>
                      <Col sm='8' className='question-card__options-preview'>
                        <CardTitle className='question-card__title'>Would you rather</CardTitle>
                        <Form onSubmit={this.handleSubmit}>
                          <FormGroup tag='fieldset' onChange={this.handleChange}>
                            <FormGroup check>
                              <Label check>
                                <Input type='radio' name='radio1' value='optionOne' />{' '}
                                  {optionOne}
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type='radio' name='radio1' value='optionTwo' />{' '}
                                  {optionTwo}
                              </Label>
                            </FormGroup>
                          </FormGroup>
                          <Button type='submit' className='question-card__view-poll-btn' disabled={submit === false}>
                            Submit
                          </Button>
                        </Form>
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
}

function mapStateToProps({ authedUser, questions, users }, props) {

  const { id } = props.match.params

  const user = questions[id].author
  const optionOne = questions[id].optionOne.text
  const optionTwo = questions[id].optionTwo.text


  return {
    id,
    author: users[user].name,
    avatar: users[user].avatarURL,
    optionOne: optionOne,
    optionTwo: optionTwo,
    user: authedUser
  }
}

export default connect(mapStateToProps)(PollPage)
