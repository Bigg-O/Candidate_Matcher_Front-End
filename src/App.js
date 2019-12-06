import React, { Component } from 'react'
import CandidateContainer from './containers/CandidateContainer'
import PoliticianContainer from './containers/PoliticianContainer'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

export class App extends Component {
  render() {

    return (
      <Router>
      <div className="app" >
        <h1 className="title"> Campaign Daddies </h1>
        <NavBar />
        <Route exact path="/" component={CandidateContainer} />
        <Route exact path="/politicians" component={PoliticianContainer} />
        {/* <CandidateContainer />
        <br/>
        <PoliticianContainer /> */}
      </div>
      </Router>
    )
  }
}

export default App;