import React, { Component } from "react";
import CandidateFilter from "../components/CandidateFilter";
import DemCandCard from "../components/DemCandCard";
import CardDeck from "react-bootstrap/CardDeck";

const DEM_CANDIDATES_URL = "http://localhost:3001/candidates";

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
      candidateIssues: []
    };
  }

  handleFiltering = issueName => {
    let candidateIssues = this.state.candidates

    candidateIssues = candidateIssues.map(candidate => {
      return candidate.issues.filter(issue => (
            issue.name === issueName[0]
      ))
    });

    this.setState({ candidateIssues });
  };

  componentDidMount() {
    fetch(DEM_CANDIDATES_URL)
      .then(resp => resp.json())
      .then(candidates => this.setState({ candidates }));
  }

  render() {
    return (
      <div>
        <CardDeck>
          {this.state.candidates.map(candidate => (
            <DemCandCard key={candidate.id} candidate={candidate} />
          ))}
        </CardDeck>
        <br />
        <div className={styles.center}>
        <CandidateFilter onChange={this.handleFiltering} />
        </div>
      </div>
    );
  }
}

export default CandidateContainer;
