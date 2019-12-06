import React, { Component } from "react";
import AddressSearch from "../components/AddressSearch";
import YourPoliticians from "./YourPoliticians";

// DON'T FORGET TO DELETE IT BEFORE MAKEING IT PUBLIC!!!
const API_KEY = "AIzaSyBMcyeCjZx8ICSYZ_UvfJUucHkZPtQtnoQ";
// DON'T FORGET TO DELETE IT BEFORE MAKEING IT PUBLIC!!!

export class PoliticianContainer extends Component {
  constructor() {
    super();
    this.state = {
      address: {
        street_number: null,
        street_name: null,
        street_type: null,
        city: null,
        state: null,
        zip: null
      },
      representativeData: [],
      dataLoaded: false
    };
  }

  fetchURL = () => {
    const { street_number, street_name, street_type } = this.state.address;
    return `https://www.googleapis.com/civicinfo/v2/representatives?address=${street_number}%20${street_name}%20${street_type}&levels=country&key=${API_KEY}`;
  };

  handleSubmission = e => {
    e.preventDefault();
    const street_address = e.target.formGridAddress1.value.split(" ");
    let address = this.state.address;
    address.street_number = street_address[0];
    address.street_name = street_address[1];
    address.street_type = street_address[2];
    this.setState({ address });

    fetch(this.fetchURL())
      .then(resp => resp.json())
      .then(representativeData => {
        console.log(representativeData)
        this.setState({ representativeData });
        this.setState({ dataLoaded: true });
      });
  };

  render() {
    return (
      <div>
        <h1>Find your current representatives!</h1>
        <AddressSearch onSubmit={this.handleSubmission} />
        <br />

        {this.state.dataLoaded ? (
          <YourPoliticians
            representativeData={this.state.representativeData} 
          />
        ) : (
          <h1>Don't worry about me for now</h1>
        )}
      </div>
    );
  }
}

export default PoliticianContainer;

// GET https://www.googleapis.com/civicinfo/v2/representatives?address=3607%20Greystone%20Dr&key=[YOUR_API_KEY] HTTP/1.1

// Accept: application/json
