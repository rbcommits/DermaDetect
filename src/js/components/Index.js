import React from 'react';
import Home from './Home';
import Authenticated from './Authenticated';


export default class Index extends React.Component{


    constructor(props)
    {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    componentWillMount()
    {
        console.log("Updated user login to true");
        this.setState({loggedIn: true});
    }
    updateLoginStatus = (status) =>
    {
        console.log("Got new user status: ", this.state.loggedIn)
    }
    render()
    {
        console.log("Checking login status in index.js: ", this.state.loggedIn);
        return(
            <Authenticated loggedIn={this.state.loggedIn} updateLoginStatus={(status) => this.updateLogin(status)}>
                <Home />
            </Authenticated>
        );
    }

}