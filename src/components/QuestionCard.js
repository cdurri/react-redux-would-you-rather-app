import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'
import { Avatar } from '@material-ui/core'

const QuestionCard = props => {

  const { author, avatar } = props

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
                  <Col>
                    <Avatar
                      src={avatar}
                      className='unanswered-questions-avatar'
                      alt='User avatar'
                    />
                  </Col>
                  <Col>
                    <CardTitle>Would you rather</CardTitle>
                    <CardText>
                      become a superhero
                    </CardText>
                    <Button>View Poll</Button>
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

  return {
    author: user,
    avatar: users[user].avatarURL
  }
}

export default connect(mapStateToProps)(QuestionCard)
