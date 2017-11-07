import React from 'react'
import { connect } from 'react-redux';
class Sidebar extends React.Component {

    render() {
        return (

            <div className="col-md-4 side-bar">
                <div className="card sidebar-bg">
                    <div className="card-header">
                        <div className="center-header">
                            <img
                                className="img-circle forum-user-image"
                                src="http://www.lopeztileinstaller.com/Ceramic%20Tile/dal-tile/rittenhouse%20square/Semi-Gloss/White%202%20k101%20lg.jpg"
                                width="150"
                                height="150"/>
                            <h3>Welcome {this.props.user.name}!</h3>
                        </div>
                    </div>
                    <ul className="nav nav-tabs nav-justified">
                        <li>
                            <a href="#">Messages
                            </a>
                        </li>
                        <li>
                            <a href="#">Browse Forum</a>
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
    return {
        user: state.session.user
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

