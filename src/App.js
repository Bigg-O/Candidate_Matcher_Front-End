import React, { Component } from 'react'
import CandidateContainer from './containers/CandidateContainer'
import PoliticianContainer from './containers/PoliticianContainer'
import './App.css'

export class App extends Component {
  render() {

    return (
      <div className="app" >
        <h1 className="title"> Campaign Daddies </h1>
        {/* <br/> */}
        <CandidateContainer />
        <br/>
        <PoliticianContainer />
      </div>
    )
  }
}

export default App;