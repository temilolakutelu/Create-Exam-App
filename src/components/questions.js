import React, { Component } from 'react';
import { ListGroup, ListGroupItem }  from 'react-bootstrap';

import { withRouter } from 'react-router-dom';

class Questions extends Component {

  constructor() {
    super();
    
    const storedQuestions = localStorage.getItem("questions");
    const questions = (storedQuestions !== null) ? JSON.parse(storedQuestions) : [];
    
    this.state = { questions }
  }

  openAnswer = questionId => {
    this.props.history.push(`/answers/${questionId}`, {
        questionId
    });
  }

  render() {
      return (
          <div className="container">
            <h3>Questions</h3>
            <br />
            <ListGroup>
                {this.state.questions.map((Q, i) => {
                    return (
                        <ListGroupItem key={i} onClick={() => this.openAnswer(i)}>
                            <h4>{Q.subject}</h4>
                            <p>{Q.question}</p>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
          </div>
      );
  }
}

export default withRouter(Questions);
