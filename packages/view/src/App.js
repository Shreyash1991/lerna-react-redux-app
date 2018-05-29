import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount(){
    const { actions , introductions } = this.props;

    console.log('BEFORE INIT', introductions);
    actions.initIntroduction();
  }

  render() {
    const { actions , introductions } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{introductions.title}</h1>
        </header>
        <p className="App-intro">
          I am welcome message
        </p>
      </div>
    );
  }
}

export default App;
