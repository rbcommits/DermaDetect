import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { get, post } from '../rest/rest.js'
import Question from './Question.js'
import PostQuestion from './PostQuestion.js'

export class BrowseForum extends Component {

  constructor(props)
  {
      super(props);
      this.state = {
          questions: [],
          current_page: "0",
          limit_per_page: "10",

      }

  }
  componentDidMount = () => {
    console.log("I was here");
    // Make rest call to server to fetch a list of questions and respective answers
    var question = get("question", this.state.current_page, this.state.limit_per_page).then((data) => {
      console.log(data);
      this.setState({
        questions: data
    });
    })
    
    //console.log("question length: " + question.data)
    

  }
  
  render() {
    var questions = []
    var data = this.state.questions;
    console.log(data);
    for(var i = 0; i < 10; i++)
      {
        questions.push( <Question args={data[i]} key={i}/> );
      }
    
    return (
      <div className="col-md-8">
        <PostQuestion />
        {questions}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowseForum)
