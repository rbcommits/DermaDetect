import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class sidebar extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div class="col-md-4 side-bar">
                <div class="card">
                    <div class="card-header">
                        <div class="center-header">
                            <img class="img-circle img-responsive center-header" src="http://petermoffatt.com/sites/default/files/headshots/pete_generic_headshot.jpg" width="100" height="100" />
                            <h3>Welcome Dominus!</h3>
                        </div>
                    </div>
                    <ul class="nav nav-tabs nav-justified">
                        <li><a href="#">Messages </a></li>
                        <li><a href="#">Browse Forum</a></li>
                        <li><a href="#">Settings </a></li>
                    </ul>
                </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(sidebar)
