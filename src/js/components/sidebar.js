import React from 'react'

export default class Sidebar extends React.Component {

    render() {
        return (

            <div className="col-md-4 side-bar">
                <div className="card">
                    <div className="card-header">
                        <div className="center-header">
                            <img
                                className="img-circle img-responsive center-header"
                                src="http://petermoffatt.com/sites/default/files/headshots/pete_generic_headshot.jpg"
                                width="100"
                                height="100"/>
                            <h3>Welcome Dominus!</h3>
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

/*
const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(sidebar)
*/
