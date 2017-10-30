import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

export default class Question extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            showResponse: false
        }

    }
    toggleAnswers = () => {
        console.log("I was clicked: " + this.state.showResponse);
        this.setState({
            showResponse: !this.state.showResponse
        })
    }
    render() {

        if (this.props.args) {
            var answers = []
            var data = this.props.args.answer;
            for (var i = 0; i < data.length; i++) {
                answers.push(
                    <div className="table-responsive reply" key={i}>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td><img
                                        className="img-circle forum-avatar"
                                        src="http://petermoffatt.com/sites/default/files/headshots/pete_generic_headshot.jpg"/></td>
                                    <td><p><b>{data[i].responded_by}: </b> {data[i].response}</p><p>{data[i].responded_on}</p></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                );
            }

            return (
                <div className="card"  ><div className="card-content question"><div className="row">
                            <div className="col-md-4">
                                <img
                                    width="300"
                                    height="300"
                                    src="http://gkoonz.com/wp-content/uploads/2013/02/placeholder.jpg"
                                    className="center-header img-responsive post-image"/>
                            </div>

                            <div className="col-md-8">
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td><img
                                                    src="http://petermoffatt.com/sites/default/files/headshots/pete_generic_headshot.jpg"
                                                    className="img-circle forum-avatar"/></td>
                                                <td className="content">
                                                    <p>
                                                        <strong>
                                                            {this.props.args.posted_by}
                                                        </strong>
                                                    </p>
                                                    <p className="question-date">
                                                        {this.props.args.posted_on}
                                                    </p>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <p>{this.props.args.question}
                                    </p>
                                </div>

                                {answers}

                            </div>
                </div></div></div>
            )
        } else {
            return (<div/>)
        }

    }
}

// data-aos="fade-up" data-aos-once="true"
//