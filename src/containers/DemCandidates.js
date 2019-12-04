import React, { Component } from 'react'
import DemCandCard from '../components/DemCandCard'
import CardDeck from 'react-bootstrap/CardDeck'

const DEM_CANDIDATES_URL = ""

export class DemCandidates extends Component {
    constructor() {
        super()
        this.state = {
            candidates: []
        }
    }

    componentDidMount() {
        // fetch(DEM_CANDIDATES_URL)
        //     .then(resp => resp.json())
        //     .then(candidates => this.setState({ candidates }))
    }

    render() {
        return (
            <CardDeck>
                {/* {this.state.candidates.map(candidate =>  */}
                    <DemCandCard candidate={this.state.candidate} />
                    <DemCandCard candidate={this.state.candidate} />
                    <DemCandCard candidate={this.state.candidate} />
                    <DemCandCard candidate={this.state.candidate} />
                {/* )} */}
            </CardDeck>
        )
    }
}

export default DemCandidates
