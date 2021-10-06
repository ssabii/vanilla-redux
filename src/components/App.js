import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Detail from '../routes/Detail';
import Home from '../routes/Home';

function App() {
  return (
    <Router>
      <Route path="/" component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Router>
  );
}

export default App;