import React, { useState } from 'react';
// still an issuee with eslint
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Section from './components/pages/Section';
import Landing from './components/pages/Landing';

import Spacer from './components/layout/Spacer';
import './App.css';

const App = () => {
  return (
    <div>
      <Landing />
      <Spacer color='orange' />
      <Section image='jump' cardNum='0' />
      <Spacer color='blue' />
      <Section image='california' cardNum='2' />
      <Spacer color='orange' />
    </div>
  );
};

export default App;
