import React, { Component } from 'react';
import Navbar from './navbar';
import { ListGroup, ListGroupItem }  from 'react-bootstrap';

import { withRouter } from 'react-router-dom';

class Questions extends Component {

  constructor() {
    super();
    
    const storedQuestions = localStorage.getItem("questions");
   
    const questions = (storedQuestions !== null) ? JSON.parse(storedQuestions) : [];
    
    this.state = { questions, correct:'' }
  }

//  handleAnswer = questionId => {
//       e.preventDefault();
//     this.props.history.push(`/answers/${questionId}`, {
//         questionId
//     });
//   }

  handleChange(e){
    this.setState({
     correct:e.target.value
     
    })
    console.log(this.state.correct);
  }

  render() {
      return (
          <div className="container">
          <Navbar/>
          <br/>
            <h3>Questions</h3>
            <br />
            <ListGroup>
                {this.state.questions.map((Q, i) => {
                    return (
                        <div key={i}>
                        <h2>{Q.subject}</h2>
                        <ListGroupItem>
                       
                        <h4>{Q.question}</h4>
                        <br/>
                       <form onSubmit={this.handleAnswer}>
                       <input type="radio" name="answer"   onChange={this.handleChange} value={Q.correctAnswer} /> {Q.correctAnswer}<br/>
                       <input type="radio" name="answer"   onChange={this.handleChange} value={Q.option1}/>{Q.option1}<br/>
                       <input type="radio"   name="answer" onChange={this.handleChange} value={Q.option2}/> {Q.option2}<br/>
                       <input type="radio" name="answer"   onChange={this.handleChange} value={Q.option3}/> {Q.option3}<br/>
                      
                       <button >Submit</button> 
                       </form> 
                        </ListGroupItem>
                        </div>
                    )
                })}
            </ListGroup>
            </div>
      );
  }
}

export default withRouter(Questions);
