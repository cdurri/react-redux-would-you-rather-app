import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import { Avatar } from '@material-ui/core'
import PollPage from './PollPage'

const QuestionCard = props => {

  const { author, avatar, optionOne, optionTwo } = props

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
                    <CardText>
                      {optionOne}
                    </CardText>
                    <CardText>
                      {optionTwo}
                    </CardText>
                    <Link to={`/poll-page`} component={Link}>
                      <Button  className='question-card__view-poll-btn'>
                        View Poll
                      </Button>
                    </Link>
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

export default connect(mapStateToProps)(QuestionCard)
