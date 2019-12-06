import React, { Component } from 'react'
import UpperPoliticianCard from '../components/UpperPoliticianCard'
import CardDeck from 'react-bootstrap/CardDeck'

export class YourPoliticians extends Component {
    constructor () {
        super()
        this.state = {
            titles: []
        }
        
    }

    componentDidMount() {
        let titles = this.state.titles

        this.props.uRepresentativeData.offices.forEach(office => {
            for (let i = 0; i < office.officialIndices.length; i++)
                titles.push(office.name)
        });

        this.setState({ titles })
    }

    render() {
        console.log(this.props)
        const { officials } = this.props.uRepresentativeData
        return (
            <div>
            <CardDeck>
            {officials.map(official =>
                <UpperPoliticianCard
                    title={this.state.titles[officials.indexOf(official)]}
                    official={official} />
            )}
        </CardDeck>
            </div>
        )
    }
}

export default YourPoliticians