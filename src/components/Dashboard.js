import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TabContent, TabPane, Nav, NavItem, NavLink, ListGroup, ListGroupItem, Container, Row, Col } from 'reactstrap'
import classnames from 'classnames'

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
    return (
      <div>
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
                    <ListGroupItem>1</ListGroupItem>
                    <ListGroupItem>2</ListGroupItem>
                    <ListGroupItem>3</ListGroupItem>
                </ListGroup>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId='2'>

            <ListGroup>
                <ListGroupItem>4</ListGroupItem>
                <ListGroupItem>5</ListGroupItem>
                <ListGroupItem>6</ListGroupItem>
            </ListGroup>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

export default connect()(Dashboard)
