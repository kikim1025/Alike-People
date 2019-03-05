import React, { Component } from 'react';
import Survey from './components/Survey';
import HomePage from './components/Home';
import './App.css';

class App extends Component {
  state = {
    isPageSurvey: false,
    
  }


  render() {
    return (
      <div className="App">
       <Survey /> 
      </div>
    );
  }
}

export default App;
