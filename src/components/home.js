import React, { Component } from 'react';
import Navbar from './navbar';

class Home extends Component {
    constructor() {
        super();
    }

    postQuestion = questionId => {
        this.props.history.push(`/postquestion`, {
            questionId
        });
    }

    exam = questionId => {
        this.props.history.push(`/questions`, {
            questionId
        });
    }

    render() {
        return (
            <div >
                <Navbar />
                <div className="container">
                    <br />
                    <h1 >Create-Exam App</h1>
                    <h3>Let us help you create your examination with ease</h3>
                    <button onClick={() => this.postQuestion()}>Create Exam</button>
                    <button onClick={() => this.exam()}>Write Exam</button>
                </div>
            </div>
        )
    }
}
export default Home;