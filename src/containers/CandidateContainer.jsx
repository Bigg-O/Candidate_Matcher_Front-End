import React, { Component } from 'react'
import DemCandidates from './DemCandidates'
import CandidateFilter from '../components/CandidateFilter'

export class CandidateContainer extends Component {
    render() {
        return (
            <div>
                <DemCandidates />
                <CandidateFilter />
            </div>
        )
    }
}

export default CandidateContainer
