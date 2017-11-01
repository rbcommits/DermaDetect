import React from 'react';
import BrowseForum from './BrowseForum.js'
import Header from './Header.js'
import Sidebar from './Sidebar.js'
import Login from './Login.js'
import { loginUser } from '../redux/actions/actions.js'
import { connect } from 'react-redux';

class Index extends React.Component{


    constructor(props)
    {
        super(props);
        this.updateLogin = this.updateLogin.bind(this)
        this.state = {
            renderUI: false
        }

        
    }
    updateLogin(username, usertype)
    {
        var user = {
            name: username,
            usertype: usertype
        }
        this.props.dispatch(loginUser(user))
        this.setState({renderUI: !this.state.renderUI})
    }

    render()
    {
        console.log("checking login " + this.props.logged_in)
        if(this.props.logged_in)
            {
                return(
                    <div>
                        <Header />
                        <div className="row  adjustNavbarHeight">
                            <Sidebar />
                            <BrowseForum />
                        </div>
                    </div>
                );
            }
        else
            {
                return(
                    <div>
                        <Login loginHandler={ (username, usertype) => this.updateLogin(username, usertype) } />
                    </div>
                );
            }
        
    }

}

const mapStateToProps = state => {
    return {
      username: state.authentication.username || "null",
      usertype: state.authentication.usertype || "null",
      logged_in: state.authentication.logged_in
    }
  }
  
  const mapDispatchToProps = dispatcher => {
    return {
        dispatch: dispatcher
        }
    }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Index)