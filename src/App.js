import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import 'vue-hi-there'
class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          <span> First Vue Component </span>
          <demo-basic>
            <second-component prop1='1' prop2='string' prop3='true' />
          </demo-basic>

          <span> Second Vue Component </span>
          <second-component prop1='1' prop2='Boolean' prop3='false' />
        </p>
      </div>
    )
  }
}

export default App
