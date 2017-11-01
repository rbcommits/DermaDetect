import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class componentName extends Component {
  constructor(props)
  {
      super(props);
      this.state = {
          reply: ""
      }
      this.addReply = this.addReply.bind(this)
      this.handleInput = this.handleInput.bind(this)
      
  }

  addReply() {
    this.props.addReply(this.state.reply)
  }
  handleInput(event)
  {
      this.setState({reply: event.target.value});
  }
  render() {
    return (
      <div>
            

                <input
                    className="input-lg"
                    type="text"
                    name="QuestionInput"
                    placeholder="Reply...."
                    onChange={this.handleInput} />
                <button
                    className="btn-link custom-file-upload"
                    type="button"
                    onClick={this.addReply}>Post Reply</button>

            
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(componentName)
