import React, { Component } from "react";
import AddressSearch from "../components/AddressSearch";
import YourPoliticians from "./YourPoliticians";
import "./PoliticianContainer.css";

const API_KEY = process.env.REACT_APP_API_KEY;

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
      uRepresentativeData: [],
      dataLoaded: false
    };
  }

  upperFetchURL = () => {
    const { street_number, street_name, street_type } = this.state.address;
    return `https://www.googleapis.com/civicinfo/v2/representatives?address=${street_number}%20${street_name}%20${street_type}&key=${API_KEY}`;
  };

  handleSubmission = e => {
    e.preventDefault();
    const street_address = e.target.formGridAddress1.value.split(" ");
    let address = this.state.address;
    address.street_number = street_address[0];
    address.street_name = street_address[1];
    address.street_type = street_address[2];
    this.setState({ address });

    fetch(this.upperFetchURL())
      .then(resp => resp.json())
      .then(uRepresentativeData => {
        this.setState({ uRepresentativeData });
        this.setState({ dataLoaded: true });
      });
    //.catch( )
  };

  render() {
    return (
      <div className="body">
        <h1>Find your current representatives!</h1>
        <AddressSearch onSubmit={this.handleSubmission} />
        <br />

        {this.state.dataLoaded ? (
          <YourPoliticians
            uRepresentativeData={this.state.uRepresentativeData}
          />
        ) : (
          <h1></h1>
        )}
      </div>
    );
  }
}

export default PoliticianContainer;
