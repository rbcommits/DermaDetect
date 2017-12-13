import React, { Component } from 'react'
import {get} from '../rest/rest.js'
import { connect } from 'react-redux'
import CalendarDemo from './CalendarDemo.jsx';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom'
class UserProfile extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            appointments: [],
            user: ""
        }

    }

    componentDidMount = () => {
        console.log(this.props.match.params.userID)
      get("user?username="+this.props.match.params.userID).then((data)=>{

        if(data)
        {
            this.setState({user: data[0]})
        }

      })

    }
    

    

  render() {
      var calendar = []
      if(this.props.user.usertype == "doctor")
      {
          calendar.push(<CalendarDemo />)
      }
      
    //console.log("TESTING: " + this.props.match.params.userID)
    return (
        <div>
          <div className="col-md-8">
                <div className="container profile profile-view" id="profile">
                    
                    <form>
                        <div className="row profile-row">
                            <div className="col-md-4 relative">
                                <div className="avatar">
                                    <div className="avatar-bg center"></div>
                                </div>
                                <input type="file" className="form-control" name="avatar-file" />
                            </div>
                            <div className="col-md-8">
                                <h1>Profile </h1>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label className="control-label">Name </label>
                                            <p> {this.state.user.name} </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <label className="control-label">Email </label>
                                    <p>{this.state.user.email} </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label className="control-label">Phone Number </label>
                                            <p> {this.state.user.phone} </p>
                                        </div>
                                    </div>

                                </div>
                                <hr />
                                
                            </div>
                        </div>
                    </form>
                    {calendar}
                </div>
            </div>
      </div>
      
    )
  }
}

const mapStateToProps = (state) => ({
    user: state.session.user || null
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
/*

<EventCalendar 
                        month={7}
                        year={2015}
                        events={events} 
                        onEventClick={(target, eventData, day) => console.log(eventData)} />








<div>
          <div classNameName="col-md-8">
                <div className="container profile profile-view" id="profile">
                    <div className="row">
                        <div className="col-md-12 alert-col relative">
                            <div className="alert alert-info absolue center" role="alert">
                                <button className="close" data-dismiss="alert">
                                    <span aria-hidden="true">×</span></button><span>Profile save with success</span>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className="row profile-row">
                            <div className="col-md-4 relative">
                                <div className="avatar">
                                    <div className="avatar-bg center"></div>
                                </div>
                                <input type="file" className="form-control" name="avatar-file" />
                            </div>
                            <div className="col-md-8">
                                <h1>Profile </h1>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label className="control-label">Firstname </label>
                                            <input className="form-control" type="text" name="firstname" value={ this.props.user.name }/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label className="control-label">Lastname </label>
                                            <input className="form-control" type="text" name="lastname" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="control-label">Email </label>
                                    <input className="form-control" type="email" autocomplete="off" required="" name="email" value= { this.props.user.email} />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label className="control-label">Password </label>
                                            <input className="form-control" type="password" name="password" autocomplete="off" required="" value= {this.props.user.password} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label className="control-label">Confirm Password</label>
                                            <input className="form-control" type="password" name="confirmpass" autocomplete="off" required="" />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-12 content-right">
                                        <button className="btn btn-primary form-btn">SAVE </button>
                                        <button className="btn btn-danger form-btn">CANCEL </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
      </div>
      */