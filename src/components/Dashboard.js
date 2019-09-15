import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap'
import classnames from 'classnames'
import QuestionCard from './QuestionCard'

class Dashboard extends Component {

  state = {
    activeTab: '1'
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {

    const numbers = [1, 2, 3, 4, 5]

    return (
      <div>
        <Container className='questions-list'>
          <Row>
            <Col sm="12" md={{ size: 8, offset: 2}}>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => {this.toggle('1') }}
                  >
                    Unanswered Questions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => {this.toggle('2') }}
                  >
                    Answered Questions
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId='1'>
                  <Row>
                    <Col sm='12'>
                      <ListGroup>
                        {this.props.questionIds.map((id) => (
                          <ListGroupItem key={id}>
                            <QuestionCard id={id} />
                          </ListGroupItem>
                        ))}
                      </ListGroup>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId='2'>
                  <Row>
                    <Col sm='12'>
                      <ListGroup>
                        {numbers.map(num => (
                          <ListGroupItem>{num * 2}</ListGroupItem>
                        ))}
                      </ListGroup>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Dashboard)
