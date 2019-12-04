import React, { Component } from 'react'
import DemCandCard from '../components/DemCandCard'
import CardDeck from 'react-bootstrap/CardDeck'

const DEM_CANDIDATES_URL = "http://localhost:3001/candidates"

export class DemCandidates extends Component {
    constructor() {
        super()
        this.state = {
            candidates: []
        }
    }

    componentDidMount() {
        fetch(DEM_CANDIDATES_URL)
            .then(resp => resp.json())
            .then(candidates => this.setState({ candidates }))
    }

    render() {
        return (
            <CardDeck>
                {this.state.candidates.map(candidate => 
                    <DemCandCard candidate={candidate} />

                )} 
            </CardDeck>
        )
    }
}

export default DemCandidates
