import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export class UpperPoliticianCard extends Component {
    render() {
        return (
            <div >
            <Card style={{ width: '18rem' }}>
                <a href={this.props.official.urls} target="_blank">
                <Card.Img variant="top" src={this.props.official.photoUrl} alt="I'm Too Cool For a Photo"/>
                </a>
                <Card.Body>
                    <Card.Title>{this.props.official.name}</Card.Title>
                    {/* <Card.Title>{this.props.offices.name}</Card.Title> */}
                    <Card.Text>
                        {this.props.official.party}
                    </Card.Text>

                </Card.Body>
                {/* <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                </ListGroup> */}
            </Card>   </div>      )
    }
}

export default UpperPoliticianCard