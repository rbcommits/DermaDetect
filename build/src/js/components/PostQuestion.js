import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import FileInput from 'react-file-input'

export class PostQuestion extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            question_input: '',
            image: null
        }
    }

    handleInput = (event) => {
        this.setState({question_input: event.target.value})
    }
    handleImage = (event) => {
        this.setState({image: event.target.files[0]})
    }

    postQuestion = () => {
        if (this.state.question_input != "") {
            this
                .props
                .eventHandler(this.state.question_input, this.state.image)
        }

    }
    render()
    {
        return (
            <div>
                <div className="card">

                    <div className="card-header">

                        <input
                            className="input-lg"
                            type="text"
                            name="QuestionInput"
                            placeholder="What do you have in mind?"
                            onChange={this.handleInput}/>
                        <label className="custom-file-upload">
                            <i className="glyphicon glyphicon-link"/>
                            Link Image
                            <input type="file" onChange={this.handleImage}/>
                        </label>
                        <button
                            className="btn-link custom-file-upload"
                            type="button"
                            onClick={this.postQuestion}>Post Question</button>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PostQuestion)
