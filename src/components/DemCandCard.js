import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export class DemCandCard extends Component {
    render() {
        console.log(this.props.candidate)
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.candidate.img_url}/>
                <Card.Body>
                    <Card.Title>{this.props.candidate.name}</Card.Title>
                    <Card.Text>
                        Age {this.props.candidate.age}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">

                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        )
    }
}

export default DemCandCard
