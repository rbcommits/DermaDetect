import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import Reply from './Reply.js'
import {patch} from '../rest/rest.js'
import { Link } from 'react-router-dom'
class Question extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            showResponse: false,
            answers: this.props.args.answer,
            image: this.props.args.image_url,
            placeholder_image: "http://gkoonz.com/wp-content/uploads/2013/02/placeholder.jpg",
            image_url: "http://gkoonz.com/wp-content/uploads/2013/02/placeholder.jpg",
            img_click: false
        }

    }
    toggleAnswers = () => {
        this.setState({
            showResponse: !this.state.showResponse
        })
    }
    
    addReply = (reply) => {

        var d = new Date();
        var answer = {
            "response": reply,
            "responded_by": "Dr. " + this.props.user.username,
            "responded_on": d.toLocaleDateString() + ", " + d.toLocaleTimeString()
          }
        var new_answers = this.state.answers;
        new_answers.unshift(answer);
        patch("question/"+this.props.args.id, { answer: new_answers})
        this.setState({answers: new_answers})
    }

    flipImage = () => {
        if(this.state.img_click)
        {
            this.setState({image_url: this.state.image, img_click: !this.state.img_click})
        }
        else
        {
            this.setState({image_url: this.state.placeholder_image, img_click: !this.state.img_click})
        }
        console.log("I clicked image!");
    }
    render() {


        if (this.props.args) {
            var answers = []
            var data = this.state.answers;
            if(this.props.user.usertype == "doctor")
            {
                answers.push(
                <div className = "table-responsive reply" key = {'reply'}> <table className="table">
                    <tbody>
                        <tr>
                            <td><Reply addReply= { (reply) => this.addReply(reply) } key={'reply'}/></td>
                        </tr>
                    </tbody>
                </table> </div> )
            }
            
            for (var i = 0; i < data.length; i++) {
                var link = "/users/"+data[i].responded_by;
                answers.push(
                    <div className="table-responsive reply" key={i}>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td><img
                                        className="img-circle forum-avatar"
                                        src="http://petermoffatt.com/sites/default/files/headshots/pete_generic_headshot.jpg"/></td>
                                    <td className="content"><p><b><Link to={link}>{data[i].responded_by}: </Link></b> {data[i].response}</p><p>{data[i].responded_on}</p></td>
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
                                    src={this.state.image_url}
                                    className="center-header img-responsive post-image"
                                    onClick={this.flipImage}
                                    />
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

const mapStateToProps = (state) => ({
    user: state.session.user || null
  })
  
  const mapDispatchToProps = {
    
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Question)
  