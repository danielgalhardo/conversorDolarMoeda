import React, { Component } from 'react';
import Header from './Components/Header';
import Conversor from './Components/Conversor';

import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Conversor  />
      </div>
    );
  }
}

export default App;
