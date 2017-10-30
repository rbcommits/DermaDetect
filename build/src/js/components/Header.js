import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

export class Header extends Component {


  render() {
    return (
        <div className="row">
            <div className="col-md-12 nav-border">
                <nav className="navbar navbar-default navigation-clean-search">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand navbar-link" href="#">Derma Detect</a>
                            <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="navcol-1">
                            <ul className="nav navbar-nav">
                                <li className="active" role="presentation"><a href="#">Link 1</a></li>
                                <li role="presentation"><a href="#">Link 2</a></li>
                                <li role="presentation"><a href="#">Link 3</a></li>
                            </ul>
                            <form className="navbar-form navbar-left" target="_self">
                                <div className="form-group">
                                    <label className="control-label" >
                                        <i className="glyphicon glyphicon-search" />
                                    </label>
                                    <input className="form-control search-field" type="search" name="search" id="search-field" />
                                </div>
                            </form>
                            <a className="btn btn-default navbar-btn navbar-right action-button" role="button" href="#">Action </a></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)
