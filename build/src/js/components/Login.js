import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AlertContainer from 'react-alert'
import {get} from '../rest/rest.js'

class Login extends Component {


  constructor(props)
  {
    super(props);
    this.state = {
         password: '',
         username: '',
         usertype: ''
      }
    this.checkLogin = this.checkLogin.bind(this)
    this.handlePassword = this.handlePassword.bind(this)
    this.handleUsername = this.handleUsername.bind(this)
  }

  alertOptions = {
    offset: 14,
    position: 'top center',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  }

  showAlert = (message) => {
    this.msg.show(message, {
      time: 2000,
      type: 'error'
    })
  }
  checkLogin() {
    if(this.state.username != '' && this.state.password != '')
    {
        //for now just hardcoding the password and username
        get("user?username="+this.state.username+"&password="+this.state.password).then((data) => {
            var user = data[0]
            if(user)
            {
                this.props.loginHandler(user)
            }
            else
            {
                this.showAlert('Incorrect Username or Password');
            }
        })
    }
    else 
    {
        this.showAlert('Username or Password cannot be empty!');
    }

  }
  handlePassword(event){
      this.setState({password: event.target.value})
  }
  handleUsername(event){
      this.setState({username: event.target.value})
  }

  componentDidMount = () => {
    //this.checkLogin( false );
  }
  
  render() {
      
    return (
    < div ><AlertContainer ref={a => this.msg = a} {...this.alertOptions} /> <div className="login-dark login">
    <div className="form">
        <h2 className="sr-only">Login Form</h2>
        <div className="illustration">
            <i className="icon ion-ios-locked-outline"></i>
        </div>
        <div className="form-group">
            <input type="email" name="email" onChange={this.handleUsername} placeholder="Username" className="form-control"/>
        </div>
        <div className="form-group">
            <input
                type="password"
                onChange= { this.handlePassword }
                placeholder="Password"
                className="form-control"/>
        </div>
        <div className="form-group">
            <button className="btn btn-primary btn-block" onClick={ this.checkLogin }>Log In</button>
        </div>
        <a href="#" className="forgot">Forgot your email or password?</a>
    </div>
</div> </div>
    )
  }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatcher => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)






