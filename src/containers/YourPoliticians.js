import React, { Component } from 'react'
import UpperPoliticianCard from '../components/UpperPoliticianCard'
import CardDeck from 'react-bootstrap/CardDeck'

export class YourPoliticians extends Component {
    render() {
        return (
            <div>
            <CardDeck>
            {this.props.uRepresentativeData.officials.map(official =>
                <UpperPoliticianCard official={official} />
            )}
        </CardDeck>
            </div>
        )
    }
}

export default YourPoliticians
