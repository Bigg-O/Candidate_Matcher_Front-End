import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export class CandidateFilter extends Component {
    render() {
        return (
            <ButtonToolbar>
                <ToggleButtonGroup type="checkbox" name="options" defaultValue={1}>
                    <ToggleButton value={1}>Marijuana</ToggleButton>
                    <ToggleButton value={2}>Wealth Tax</ToggleButton>
                    <ToggleButton value={3}>Health Care</ToggleButton>
                    <ToggleButton value={4}>Marijuana</ToggleButton>
                    <ToggleButton value={5}>Wealth Tax</ToggleButton>
                    <ToggleButton value={6}>Health Care</ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
        )
    }
}

export default CandidateFilter
