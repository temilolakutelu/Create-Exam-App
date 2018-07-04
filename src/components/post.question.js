import React, { Component } from 'react';
import Navbar from './navbar';

class PostQuestions extends Component {

constructor(props){
  super(props);

  const {match:{params:{questionId}}}=this.props;
 const storedQuestions = localStorage.getItem("exam");
 
const questions = (storedQuestions !== null) ? JSON.parse(storedQuestions) : [];
console.log(questions);
console.log(questions[questionId]);
// let { subject, duration, answers}  = questions[questionId];

// this.state = {
//   Question: {
//     subject,
//    duration
// },
//   questionId,
//   questions,
 
// }
}

  post = (e) => {
    e.preventDefault();
  console.log(e.target.value);

 
 
    const question = e.target.question.value;
    const correctAnswer=e.target.correctAnswer.value;
    const option1=e.target.option1.value;
    const option2=e.target.option2.value;
    const option3=e.target.option3.value;

    const newQuestion = {  question, correctAnswer, option1, option2, option3 };

    const storedQuestions = localStorage.getItem("questions");
   
    const questions = (storedQuestions !== null) ? JSON.parse(storedQuestions) : [];
    questions.push(newQuestion);
    localStorage.setItem("questions", JSON.stringify(questions));
    console.log(localStorage.getItem("questions"));
  }

  render() {
    return (
      
        <div className="container">
        <Navbar/>
            <form name="post" onSubmit={this.post}>
                <h3>Question Page</h3>
                <br /><br />
                
                <br />
                <label htmlFor="question">Question</label>
                <textarea name="question" className="form-control"required></textarea>
                
                <br />
                <label htmlFor="correctAnswer">Enter Correct Answer</label>
                <input name="correctAnswer" type="text" className="form-control" required/>

                <br />
                <p>Enter other options below</p>

                <label htmlFor="option1">Option 1 </label>
                <input name="option1" type="text" className="form-control" required />

                <label htmlFor="option2">Option 2 </label>
                <input name="option2" type="text" className="form-control" required/>

                <label htmlFor="option3">Option 3 </label>
                <input name="option3" type="text" className="form-control" required />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
  }
}

export default PostQuestions;
