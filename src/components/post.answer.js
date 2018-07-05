import React, { Component } from 'react';

import Navbar from './navbar';
import ReactDOM from 'react-dom';

import { 
  ListGroup,
  ListGroupItem
}  from 'react-bootstrap';
import questions from './questions';

class PostAnswer extends Component {
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    
    
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
       
<ListGroup>
{this.state.questions.map((Q, i) => {
    return (
        <ListGroupItem key={i} >
            <h4>{Q.subject}</h4>
            <p>{Q.question}</p>
            <form name="post" >
  <input type="radio" name="answer"   onChange={this.handleChange} value={Q.correctAnswer}/> {Q.correctAnswer}<br/>
  <input type="radio" name="answer"   onChange={this.handleChange} value={Q.option1}/>{Q.option1}<br/>
  <input type="radio"   name="answer" onChange={this.handleChange} value={Q.option2}/> {Q.option2}<br/>
  <input type="radio" name="answer"   onChange={this.handleChange} value={Q.option3}/> {Q.option3}<br/>
  <br/>
<button ref={(e)=> this[`button-${i}`] = e} id="myBtn" className="btn btn-primary" onClick={(e) => {
  e.preventDefault();
  const { questionId, questions } = this.state;

  let question = questions[questionId];
  let answer = this.state.correct;
 
  if (answer===Q.correctAnswer){
    alert('correctAnswer');
    this.setState({
      score: this.state.score + 1
     })
     this[`button-${i}`].disabled = true;
     
     
  }
  else{
    alert('wrong answer');
    this[`button-${i}`].disabled = true;
  }

}
}>Submit</button>
</form> 
        </ListGroupItem>
    )
})}
</ListGroup>
       
          </div>
    );
  }
}

export default PostAnswer;
