import React, { Component } from 'react';
import Navbar from './navbar';
import { withRouter } from 'react-router-dom';

class CreateExam extends Component{

    post = (e) => {
        e.preventDefault();
        const subject = e.target.subject.value;
        const duration = e.target.duration.value;
       
    
        const newExam = { subject, duration };
    
        const storedExam = localStorage.getItem(subject);
       
        const exam = (storedExam !== null) ? JSON.parse(storedExam) : [];
       exam.push(newExam);
        localStorage.setItem(subject, JSON.stringify(exam));
        console.log(localStorage.getItem(subject));
        
        
    this.postQuestion();
        
      }

      postQuestion = questionId => {
        this.props.history.push(`/postquestion`, {
            questionId
        });
      }
    render(){

        return (
      
            <div className="container">
            <Navbar/>
            <h3>Create Exam</h3>
            <br /><br />
                <form name="post" onSubmit={this.post}>
                    <label htmlFor="subject">Subject</label>
                    <input name="subject" type="text" className="form-control" required/>
                    <br />
                    <label htmlFor="duration">Duration: (hours)</label>
                    <input name="duration" type="text" className="form-control" required/>
    
                    <br />
                    
                    <button type="submit" className="btn btn-primary">Enter</button>
                </form>
            </div>
        );
    }
}

export default CreateExam;