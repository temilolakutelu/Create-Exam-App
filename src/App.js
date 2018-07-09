import React, { Component } from 'react';
import Home from './components/home';
import PostQuestion from './components/post.question';
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
          <Route path="/postanswer" component={PostAnswer} />
          <Route path="/postquestion" component={PostQuestion} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
