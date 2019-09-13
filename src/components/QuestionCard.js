import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionCard extends Component {
  render() {
    return (
      <div>Question Card</div>
    )
  }
}

export default connect()(QuestionCard)
