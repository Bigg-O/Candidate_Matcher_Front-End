import React, { Component } from 'react'
import NavBar from './components/NavBar'
import CandidateContainer from './containers/CandidateContainer'
import PoliticianContainer from './containers/PoliticianContainer'

export class App extends Component {
  render() {
    return (
      <div className="app" >
        <h1 className="title"> Campaign Daddies </h1>
        <br/>
        <NavBar />
        <br/>
        <CandidateContainer />
        <br/>
        <PoliticianContainer />
      </div>
    )
  }
}

export default App;