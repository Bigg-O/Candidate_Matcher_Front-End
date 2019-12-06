import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import './CandidateFilter.css'
import Button from 'react-bootstrap/Button'

const ISSUES = ["Gun Control", "Immigration", "Health Care", "Wealth Tax", "Marijuana Legalization", "Defense Spending"]



export class CandidateFilter extends Component {
    render() {
        return (
            <ButtonToolbar>
                <ToggleButtonGroup type="radio" name="options" onChange={this.props.onChange}>
                    {ISSUES.map(issue => (
                        <ToggleButton
                            key={issue}
                            value={issue}
                        >
                            {issue}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
                <Button variant="success" onClick={this.props.onClick}>See All</Button>
            </ButtonToolbar>
        )
    }
}

export default CandidateFilter
