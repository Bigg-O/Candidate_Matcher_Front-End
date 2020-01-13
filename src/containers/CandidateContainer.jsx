import React, { Component } from "react";
import CandidateFilter from "../components/CandidateFilter";
import DemCandCard from "../components/DemCandCard";
import CardDeck from "react-bootstrap/CardDeck";

const DEM_CANDIDATES_URL = "https://sleepy-bastion-46695.herokuapp.com/candidates";

const styles = {
  center: {
    marginLeft: "auto",
    marginRight: "auto"
  }
}

export class CandidateContainer extends Component {
  constructor() {
    super();
    this.state = {
      candidates: [],
      candidates_copy: []
    };
  }

  handleFiltering = inputIssue => {
    this.setState({ candidates_copy: {...this.state.candidates} })
    let candidates_copy = [...this.state.candidates_copy]

    this.state.candidates.forEach(candidate => {
      candidate.issues.forEach(issue => {
        if (issue.name === inputIssue) {
          const i = this.state.candidates.indexOf(candidate);
          const j = this.state.candidates[i].issues.indexOf(issue);
          candidates_copy[i].issues = [this.state.candidates[i].issues[j]];
        }
      })
    })

    this.setState({ candidates_copy });
  };

  handleReset = () => {
    const candidates_copy = JSON.parse(JSON.stringify(this.state.candidates));
    this.setState({ candidates_copy })
  }

  componentDidMount() {
    fetch(DEM_CANDIDATES_URL)
      .then(resp => resp.json())
      .then(candidates => {
        this.setState({ candidates })
        const candidates_copy = JSON.parse(JSON.stringify(candidates));
        this.setState({ candidates_copy })
      });
  }

  render() {
    return (
      <div>
        <CardDeck>
          {this.state.candidates_copy.map(candidate => (
            <DemCandCard key={candidate.id} candidate={candidate} />
          ))}
        </CardDeck>
        <br />
        <CandidateFilter
          onClick={this.handleReset}
          onChange={this.handleFiltering}
        />
      </div>
    );
  }
}

export default CandidateContainer;
