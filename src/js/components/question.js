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
    toggleAnswers = () =>
    {
        console.log("I was clicked: " + this.state.showResponse);
        this.setState({showResponse: !this.state.showResponse})
    }
    render() {
        

        if(this.props.args)
            {
                var answers = []
        var data = this.props.args.answer;
        for(var i = 0; i< data.length; i++)
            {
                answers.push(
                <div className="card-content" key={data[i].responded_on}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td><img src="http://petermoffatt.com/sites/default/files/headshots/pete_generic_headshot.jpg" className="img-circle forum-avatar" /></td>
                                <td className="content" ><p><b>{data[i].responded_by}</b>  {data[i].response}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div> );
            }
            
        return (
            <div className="card">
                <div className="card-header" >
                    <h3 onClick={this.toggleAnswers}>{this.props.args.question}</h3>
                </div>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={100}>
                { this.state.showResponse ? answers : null }
                </CSSTransitionGroup>

            </div>
        )
            }
            else
                {
                    return ( <div /> )
                }
        
    }
}

// data-aos="fade-up" data-aos-once="true"
//  