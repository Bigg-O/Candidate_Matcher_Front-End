import React, { Component } from 'react'
import PoliticianCard from '../components/PoliticianCard'
import CardDeck from 'react-bootstrap/CardDeck'

export class YourPoliticians extends Component {
    render() {
        return (
            <CardDeck>
                {this.props.representativeData.officials.map(official =>
                    <PoliticianCard official={official} />
                )}
            </CardDeck>
        )
    }
}

export default YourPoliticians
