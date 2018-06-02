import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import routes from './route';

class App extends Component {
  render() {
    const currentPath = window.location.pathname;
    return (
      <div className="App">
        <Nav />
        { routes }
      </div>
    );
  }
}

export default App;
