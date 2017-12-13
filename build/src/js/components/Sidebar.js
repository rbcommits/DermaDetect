import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
class Sidebar extends React.Component {

    render() {
        var user_link = "/users/" + this.props.user.username;
        return (

            <div className="col-md-4 side-bar">
                <div className="card sidebar-bg">
                    <div className="card-header">
                        <div className="center-header">
                            <img
                                className="img-circle forum-user-image"
                                src={this.props.user.image}
                                width="150"
                                height="150"/>
                            <h3>Welcome {this.props.user.name}!</h3>
                        </div>
                    </div>
                    <ul className="nav nav-tabs nav-justified">
                        <li>
                        <Link to={user_link}>
                            <a href="#">View Profile</a>
                        </Link>
                        </li>
                        <li>
                        <Link to="/">
                            <a href="#">Browse Forum</a>
                        </Link>
                        </li>
                        <li>
                            <a href="#">Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    console.log(state.session.user)
    return {
        user: state.session.user
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

