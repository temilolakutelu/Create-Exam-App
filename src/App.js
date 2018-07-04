import React, { Component } from 'react';


import Home from './components/home';
import CreateExam from './components/create.exam';
import PostQuestion from './components/post.question';
import Questions from './components/questions';
import PostAnswer from './components/post.answer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create-exam" component={CreateExam} />
          <Route exact path="/questions" component={Questions} />
          <Route path="/answers/:questionId" component={PostAnswer} />
          <Route path="/postquestion" component={PostQuestion} />

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
