import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import { Avatar } from '@material-ui/core'

class PollPage extends Component {

    state = {
      submit: false
    }

    handleChange = (e) => {
      this.setState({submit: true})
    }

    render() {

      const { author, avatar, optionOne, optionTwo, id } = this.props

      const { submit } = this.state

      console.log('ID: ', id)
      console.log('OptionOne: ', optionOne)
      console.log('OptionTwo: ', optionTwo)

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
                        <Form>
                          <FormGroup tag='fieldset'>
                            <FormGroup check>
                              <Label check>
                                <Input type='radio' name='radio1' onChange={this.handleChange} />{' '}
                                  {optionOne}
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type='radio' name='radio1' onChange={this.handleChange} />{' '}
                                  {optionTwo}
                              </Label>
                            </FormGroup>
                          </FormGroup>
                        </Form>
                        <Button className='question-card__view-poll-btn' disabled={submit === false}>
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
