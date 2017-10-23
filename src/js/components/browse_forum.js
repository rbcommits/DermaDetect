import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class browse_forum extends Component {
  static propTypes = {
    prop: PropTypes
  }

  componentDidMount = () => {
    // Make rest call to server to fetch a list of questions and respective answers
    
  }
  
  render() {

    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(browse_forum)
