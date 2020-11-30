import React, { useState } from 'react';

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageLeap from './components/pages/PageLeap';
import Landing from './components/pages/Landing';

import Spacer from './components/layout/Spacer';
import './App.css';

const App = () => {
  return (
    <div>
      <Landing />
      <Spacer color='orange' />
      <PageLeap image='jump' />
      <Spacer color='blue' />
      <PageLeap image='california' />
      <Spacer color='orange' />
    </div>
  );
};

export default App;
