import React, { Component } from 'react'
import './App.css'
import Header from './components/Header.js'
import User from './components/User.js'
import ReactPlayer from "react-player"

class App extends Component {
  render() {
    return (
      <div className="App">
        <User firstName="Ricky" />
        <User firstName="Carlao" />
        
        {/* Vimeo video */}
        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />

        {/* YouTube Video */}
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          muted
        />
      </div>
    )
  }
}

export default App
