import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AlertContainer from 'react-alert'
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

export class Login extends Component {


  constructor(props)
  {
    super(props);
    const { cookies } = this.props;
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

  showAlert = () => {
    this.msg.show('Incorrect Username or Password', {
      time: 2000,
      type: 'error'
    })
  }
  checkLogin(popup) {
    const { cookies } = this.props;
    if(this.state.username != '' && this.state.password != '')
    {
        //for now just hardcoding the password and username
        if(this.state.password == "123")
            {
                if(this.state.username == "jason")
                {
                    //cookies.set('username', this.state.username, { path: '/' });
                    //cookies.set('usertype', "patient", { path: '/' });
                    this.props.loginHandler(this.state.username, "patient")
                }
                else if(this.state.username == "dominus")
                {
                    //cookies.set('username', this.state.username, { path: '/' });
                    //cookies.set('usertype', "doctor", { path: '/' });
                    this.props.loginHandler(this.state.username, "doctor")
                }
            }
    }
    else 
        {
            if(popup)
            {
                this.showAlert();
            }
            
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
                <button className="btn btn-primary btn-block" onClick={ () => this.checkLogin(true) }>Log In</button>
            </div>
            <a href="#" className="forgot">Forgot your email or password?</a>
        </div>
    </div> </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
