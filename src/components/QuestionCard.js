import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Card, Button, CardHeader, CardBody, CardImg, CardTitle, CardText, Form, FormGroup, Label, Input } from 'reactstrap'

const QuestionCard = props => {

  const { id } = props

  const { author } = props

  console.log(props.question)

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

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


function mapStateToProps({ questions, users }, { id }) {
  return {
    author: questions[id].author
  }
}

export default connect(mapStateToProps)(QuestionCard)
