import React from 'react'
import logo from '../logo.svg' // importing logo from src folder
import Title from './Title'
import Description from './Description'

const header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Title className="App-title" title="Welcome to React, Ironhacker!" />
      <Description description="You are ready to take this to the next level!" />
    </header>
  )
}

export default header
