import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import './App.css';

import HomePage from './Pages/HomePage/HomePage';
import FormView from './Pages/FormView/FormView';

class App extends Component{

  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/formview/:formId' component={FormView} />
        </Switch>
      </div>
    )
  }
}

export default App;