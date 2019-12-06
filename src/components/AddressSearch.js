import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './AddressSearch.css'

export class AddressSearch extends Component {
    render() {
        return (
            <Form onSubmit={this.props.onSubmit}>
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                {/* <Form.Row>
                    <Form.Group controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                            <option></option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row> */}

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default AddressSearch
