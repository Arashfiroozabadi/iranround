import React, { Component } from 'react';
import Header from './components/header';

import './app.scss'
import Footer from './components/footer';
import Main from './components/main';
import Search from './components/search';
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Search />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
