import React, { Component } from 'react';
import Navbar from './navbar';
import ReactDOM from 'react-dom';

import { 
  ListGroup,
  ListGroupItem,
  Button,
  FormGroup,
  FormControl,
  InputGroup
}  from 'react-bootstrap';

class PostAnswer extends Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
  
    const {match:{params:{questionId}}}=this.props;
    
    const storedQuestions = localStorage.getItem("questions");
    const questions = (storedQuestions !== null) ? JSON.parse(storedQuestions) : [];
    let { subject, question, answers, correctAnswer, option1, option2, option3}  = questions[questionId];
    
    answers = answers || [];

    this.state = {
        Question: {
            subject,
            question, 
            correctAnswer, 
            option1, 
            option2, 
            option3
        },
       questionId,
        questions,
        answers, score:0,
        correct:''
    }
  }


  addAnswer = (e) => {  
   
    e.preventDefault();
    const { questionId, questions } = this.state;

    let question = questions[questionId];
    let answer = this.state.correct;
   
    
    if (answer===this.state.Question.correctAnswer){
      alert('correctAnswer');
      this.setState({
        score: this.state.score + 1
       })

    }
    else{
      alert('wrong answer');
    }
  }

  handleChange(e){
    this.setState({
     correct:e.target.value
    })
  }

  render() {
    
    return (
     
      <div className="container">
      <Navbar/>
    <h3>Score:{this.state.score}</h3>
        <br />
        <h3>{this.state.Question.subject}</h3>
        <p>{this.state.Question.question}</p>
        <form name="post" onSubmit={this.addAnswer}>
  <input type="radio" name="answer"   onChange={this.handleChange} value={this.state.Question.correctAnswer}/> {this.state.Question.correctAnswer}<br/>
  <input type="radio" name="answer"   onChange={this.handleChange} value={this.state.Question.option1}/>{this.state.Question.option1}<br/>
  <input type="radio"   name="answer" onChange={this.handleChange} value={this.state.Question.option2}/> {this.state.Question.option2}<br/>
  <input type="radio" name="answer"   onChange={this.handleChange} value={this.state.Question.option3}/> {this.state.Question.option3}<br/>
  <br/>
<button >Submit</button>
</form> 
       
          </div>
    );
  }
}

export default PostAnswer;
