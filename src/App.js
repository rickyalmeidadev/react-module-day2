import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import User from './components/User.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <User firstName="Ricky" />
        <User firstName="Carlao" />
      </div>
    )
  }
}

export default App
