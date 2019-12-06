import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

export class DemCandCard extends Component {
    render() {
        const { candidate } = this.props
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={candidate.img_url}/>
                <Card.Body>
                    <Card.Title>{candidate.name}</Card.Title>
                    <Card.Text>
                        Age {candidate.age}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    {candidate.issues.map(issue => (
                    <ListGroupItem>{issue.name}: {issue.stance}</ListGroupItem>
                    ))}
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
