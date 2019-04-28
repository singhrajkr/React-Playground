import React, { Component } from 'react';
import './App.css';
import LandingPage from './landingpage';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <LandingPage />
       <Footer />
      </div>
    );
  }
};

export default App;
