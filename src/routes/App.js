import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import logo from '../assets/logo.svg';
import './App.scss';

const App = () => (
  <div className="App">
    <Header />
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Footer />
  </div>
);

export default App;
