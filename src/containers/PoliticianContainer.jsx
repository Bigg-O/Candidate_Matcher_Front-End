import React, { Component } from 'react'
import AddressSearch from '../components/AddressSearch'
import YourPoliticians from './YourPoliticians'

export class PoliticianContainer extends Component {
    render() {
        return (
            <div>
                <AddressSearch />
                <YourPoliticians />
            </div>
        )
    }
}

export default PoliticianContainer