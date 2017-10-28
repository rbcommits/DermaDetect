import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FileInput  from 'react-file-input'

export class PostQuestion extends Component {
  static propTypes = {
    prop: PropTypes
  }

  handleChange(event)
  {
    console.log("Loaded filee");
  }
  render() {
    return (
      <div>
        
        <FileInput name="myImage"
                   accept=".png,.gif"
                   placeholder="Image"
                   className="inputClass"
                   onChange={this.handleChange} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(PostQuestion)
