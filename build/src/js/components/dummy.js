import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class componentName extends Component {

    constructor(props){
        this.state={
            data:""
        }
    }
  static propTypes = {
    prop: PropTypes
  }
  anyfunction(event){
    this.setState({data: event.target.value})
    
    
  }
  render() {
    return (
      <div>
        <input type="text" onChange= {this.anyfunction} />
        <input type="text" value= {this.state.data}/>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(componentName)
