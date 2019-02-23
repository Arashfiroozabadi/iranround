import React, { Component } from 'react';
import Header from './components/header';

import './app.scss'
import Footer from './components/footer';
import Main from './components/main';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
