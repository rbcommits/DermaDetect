import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class header extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
        <div class="row">
            <div class="col-md-12">
                <nav class="navbar navbar-default navigation-clean-search">
                    <div class="container">
                        <div class="navbar-header">
                            <a class="navbar-brand navbar-link" href="#">Derma Detect</a>
                            <button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse" id="navcol-1">
                            <ul class="nav navbar-nav">
                                <li class="active" role="presentation"><a href="#">Link 1</a></li>
                                <li role="presentation"><a href="#">Link 2</a></li>
                                <li role="presentation"><a href="#">Link 3</a></li>
                            </ul>
                            <form class="navbar-form navbar-left" target="_self">
                                <div class="form-group">
                                    <label class="control-label" for="search-field">
                                        <i class="glyphicon glyphicon-search" />
                                    </label>
                                    <input class="form-control search-field" type="search" name="search" id="search-field" />
                                </div>
                            </form>
                            <a class="btn btn-default navbar-btn navbar-right action-button" role="button" href="#">Action </a></div>
                    </div>
                </nav>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(header)
