import React, { Component } from 'react';

import Header from './components/header';
import './app.scss'

import Footer from './components/footer';
import AppRouter from './components/appRouter';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    );
  }
}

export default App;
  