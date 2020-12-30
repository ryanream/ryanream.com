import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Resume from './components/pages/Resume';
import Home from './components/pages/Home';

import './App.css';

const App = () => {
  return (
      <Router>
         <div>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/resume' component={Resume}/>
          </Switch>
        
         </div>
      </Router>
  );
};

export default App;
