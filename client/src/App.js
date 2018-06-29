import React, { Component } from 'react';
import Home from './containers/Home';
import RomeTimeline from './components/RomeTimeline';
import Nav from './containers/Nav';

import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/rome' component={RomeTimeline} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
