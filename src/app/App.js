import React, { Component } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import Search from '../search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Footer />
      </div>
    );
  }
}

export default App;
